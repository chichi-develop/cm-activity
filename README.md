# cm-activity

## 利用

### 初回のみ（data container)
```
docker clone
docker
```

### 初回、その後共通

```
docker clone
docker-compose up -d --build
```


## データベース　移行

### Windowsの場合（mysqlをインストールした環境　C:\mysql-5.7.24-winx64）

#### エクスポート

```
@echo off

echo exportしています。しばらくお待ち下さい。

S:
C:\mysql-5.7.24-winx64\mysql-5.7.24-winx64\bin\mysqldump -h 192.168.0.250 -u docker -pdocker -r ccwebdb.bakcup --single-transaction ccwebdb

echo 処理が完了しました。
pause
```

#### インポート

```
@echo off


echo importしています。しばらくお待ち下さい。

S:
C:\mysql-5.7.24-winx64\mysql-5.7.24-winx64\bin\mysql -h 192.168.0.250  -udocker -pdocker ccwebdb < ccwebdb_20190225_2.bakcup

echo 処理が完了しました。
pause
```
PR test
