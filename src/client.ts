// このソースをコンパイルするには、npm --save-dev @types/cassandra-driver を実行した後、
// node_modules/@types/cassandra-driver/index.d.ts を以下のファイルと置き換える必要がある。
// master には、callback形式の型は登録されているが、Promise形式の型が登録されていないため、コンパイルエラーとなる。
// なぜか、masterにマージされていない。おそらく、lintエラー取るためにかなり手を入れているようだから、その影響かもしれない。
// wget https://raw.githubusercontent.com/aliem/DefinitelyTyped/feature/cassandra-driver-promises/cassandra-driver/index.d.ts ¥
//         -O node_modules/@types/cassandra-driver/index.d.ts
//
import {types, Client, QueryOptions} from 'cassandra-driver';

export class client extends Client {
    constructor(hosts: string) {
        super({ contactPoints: [ hosts ] });
    }

    public select(id: string): Promise<any> {
        const query: string = "select * from Sample.Cookie where id = ?";
        return this.execute(query, [ id ]).then((result: types.ResultSet) => {
            return (result.rows);
        });
    }

    public update(id: string, cookie: string ): Promise<any> {
        const query: string = "update Sample.Cookie set cookie = ?, update_time = toTimestamp(now()) where id = ? IF EXISTS";
        return this.execute(query, [ cookie, id ]).then((result: types.ResultSet) => {
            return (result);
        });
    }
}
