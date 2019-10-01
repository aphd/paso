# SoPa (SOlidity PArser)

A Solidity Parser

Requires Node >= v11.3.0

### Usage

**Web tool**

[https://aphd.github.io/sopa/](https://aphd.github.io/sopa/)

**CLI tool**

```bash
node --experimental-modules src/services/client.mjs --d=src/fixtures/smart-contracts/ --o /tmp/metrics.csv
```

**Data analysis**

```bash
cd src/fixtures
python
```

```python
import pandas as pd
df = pd.read_csv('metrics.csv',parse_dates=['submission_date'],  index_col='submission_date')
df[['mapping', 'total_lines', 'interfaces', 'libraries']].resample('Y').mean().transform(lambda x: x/x.max())
```

```python
import matplotlib.pyplot as plt
%matplotlib inline
import pylab as plot
params = {
  'legend.fontsize': 45,
  'xtick.labelsize'     : 35.0,
  'ytick.labelsize'     : 35.0,
  'legend.handlelength': 2}
plot.rcParams.update(params)

df['2017-01-01':'2019-10-13'] \
    [['interfaces', 'libraries','total_lines', 'mapping', 'modifiers', 'bytecode' ]] \
    .resample('Y').mean().apply(lambda x: x / max(x)) \
    .plot(kind = 'bar', figsize=(40,20))

```

### References 
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
3. This project is using a [solidity parser](https://github.com/federicobond/solidity-parser-antlr) built on top of a [ANTLR4](https://github.com/antlr/antlr4) grammar.
