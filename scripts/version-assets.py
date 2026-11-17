"""Проставляет ?v=<хеш содержимого> к css/style.css и js/main.js во всех страницах.

Cloudflare велит браузерам держать CSS и JS 4 часа. Без версии посетитель после деплоя
может получить новую страницу со старыми стилями. Запускать после каждой правки CSS или JS:

    python scripts/version-assets.py
"""
import hashlib
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = ['css/style.css', 'js/main.js']

versions = {a: hashlib.md5((ROOT / a).read_bytes()).hexdigest()[:8] for a in ASSETS}

for page in sorted(ROOT.rglob('*.html')):
    if any(p in page.parts for p in ['node_modules', 'legacy-netlify', 'tests', '.git']):
        continue
    # Байты, а не текст: сохраняем исходные переводы строк
    text = page.read_bytes().decode('utf-8')
    new = text
    is_nested = len(page.relative_to(ROOT).parts) > 1
    for asset, v in versions.items():
        # Match both css/style.css and /css/style.css
        prefix = '/' if is_nested else ''
        new = re.sub(rf'(["\'])/?{re.escape(asset)}(\?v=[0-9a-f]*)?\1', rf'\g<1>{prefix}{asset}?v={v}\g<1>', new)
    if new != text:
        page.write_bytes(new.encode('utf-8'))
        print('обновлено:', page.relative_to(ROOT))

print('версии:', versions)
