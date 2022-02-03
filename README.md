### SQL

CREATE DATABASE nivo;
DROP TABLE transactions;
CREATE TABLE transactions(userId TEXT, amount float, description TEXT, id TEXT, type boolean);

### Core

The core hosts on port 5000

```bash
    yarn
    yarn dev
```

### Front

The front hosts on port 3000

```bash
  npm i
  npm run dev
```
