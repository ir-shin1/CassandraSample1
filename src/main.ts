//
import {client} from './client';

var c: client;

new Promise((resolve) => {
    c = new client(process.argv[2]);
    resolve();
}).then(async () => {
    const result = await c.select('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');
    console.log(result);
}).then(async () => {
    const result = await c.update('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', 'cookie string');
    if (result.rows && result.rows[0]['[applied]']) {
        console.log('更新成功');
    } else {
        console.log('更新失敗');
    }
    console.log(result);
}).then(async () => {
    const result = await c.select('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');
    console.log(result);
}).then(async () => {
    await c.shutdown();
}, async (err) => {
    console.log(err);
    await c.shutdown();
});
