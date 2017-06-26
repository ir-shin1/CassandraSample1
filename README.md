# CassandraSample1

typescriptアプリからCassandraへアクセスするサンプルプログラム

## 実行方法
---

### パッケージのインストール

```
$ npm install
$ wget https://raw.githubusercontent.com/aliem/DefinitelyTyped/feature/cassandra-driver-promises/cassandra-driver/index.d.ts \
          -O node_modules/@types/cassandra-driver/index.d.ts
```

ターミナルを二つ開き、typescriptのコンパイルと実行を行う。

### コンパイル

```shell
$ npm start

> cassandra@0.0.0 start /tmp/CassandraSample1
> tsc -w -d --sourceMap

19:52:58 - Compilation complete. Watching for file changes.
```

コンパイルしてエラーが無ければ、もう片方のターミナルからデータ投入とコマンドの実行を行う。

### データの投入

```shell
$ cqlsh <cassandra host address> --cqlversion="3.4.4" -f cql/drop.cql 
$ cqlsh <cassandra host address> --cqlversion="3.4.4" -f cql/sample.cql 
```

### コマンドの実行

```shell
$ node src/main.js <cassandra host address>
[ Row {
    id: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    cookie: 'cookie string',
    create_time: 2017-06-25T11:32:43.529Z,
    update_time: 2017-06-26T10:37:42.001Z } ]
更新成功
ResultSet {
  info: 
   { queriedHost: '<cassandra host address>:9042',
     triedHosts: {},
     achievedConsistency: 10,
     traceId: undefined,
     warnings: undefined,
     customPayload: undefined },
  rows: [ Row { '[applied]': true } ],
  rowLength: 1,
  columns: [ { name: '[applied]', type: [Object] } ],
  pageState: null,
  nextPage: undefined }
[ Row {
    id: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    cookie: 'cookie string',
    create_time: 2017-06-25T11:32:43.529Z,
    update_time: 2017-06-26T10:53:48.248Z } ]
```

