import urllib.request
import json
import subprocess
import time

# Launch Chrome headless with remote debugging on port 9333 (fresh instance)
cmd = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--headless=new',
    '--remote-debugging-port=9333',
    '--user-data-dir=C:\\Users\\Hasukatsu\\AppData\\Local\\Temp\\chrome_test_profile',
    '--window-size=390,844',
    'http://127.0.0.1:8085/?t=' + str(time.time())
]
proc = subprocess.Popen(cmd)
time.sleep(2)

try:
    req = urllib.request.urlopen('http://127.0.0.1:9333/json')
    targets = json.loads(req.read())
    page = next(t for t in targets if t.get('type') == 'page')
    print('Found page target:', page['title'], page['url'])

    # Query via websocket using a node script
finally:
    proc.terminate()
