[![Maintainability](https://api.codeclimate.com/v1/badges/90617fa24b6166d89156/maintainability)](https://codeclimate.com/github/bukharovev/project-lvl2-s455/maintainability)
[![Build Status](https://travis-ci.org/bukharovev/cli-utility-gendiff.svg?branch=master)](https://travis-ci.org/bukharovev/cli-utility-gendiff)
[![Test Coverage](https://api.codeclimate.com/v1/badges/285774dc237bbcf71bef/test_coverage)](https://codeclimate.com/github/bukharovev/cli-utility-gendiff/test_coverage)

### Description
Utility to find differences in configuration files.

Utility features:

* Format support json, yaml, ini

* Generating a report in the form of plain text, standard and json
 
### Installation

```
npm install gendiff-bukharovev -global
```

### Usage

```
gendiff --format json before.yaml after.yaml
```

### Help

```
gendiff -h
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  Output formats: standard, plain, json
  -h, --help           output usage information
```
### Examples 

input json: https://asciinema.org/a/eh0uVVpMHBZU1WaxQg5YLmNVm

input yaml: https://asciinema.org/a/6c16QuJyL9g9ZXgh2V9rWDBha

input ini: https://asciinema.org/a/xSDxNGvZZTEI6Tbx8jIAseSZ6

output format standard: https://asciinema.org/a/GdrUyLz2Rkfh7UaxWgJex5L2J

output format plain: https://asciinema.org/a/nNNTuwlYJr8X1sxq6mI6bcp8Z

output format json: https://asciinema.org/a/I2Lr7g9fBn6V97UVeWgKsrRWy
