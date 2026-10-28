const {test} = require('node:test');
const assert = require('node:assert/strict');
const app = require('./app');
test('Hello World, проверка здоровья и неизвестный маршрут', async t => {
  const server=app.listen(0,'127.0.0.1');
  await new Promise(resolve=>server.once('listening',resolve));
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const url=`http://127.0.0.1:${server.address().port}`;
  const response=await fetch(url);
  assert.equal(response.status,200);assert.equal(await response.text(),'Hello World');
  assert.deepEqual(await (await fetch(url+'/health')).json(),{status:'ok'});
  assert.equal((await fetch(url+'/missing')).status,404);
});
