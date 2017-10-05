# Grafgiti
Create graffiti on your github contributions wall.

![Screencast](https://raw.githubusercontent.com/mohebifar/grafgiti/master/screencast.gif)

# Usage
Install grafgiti globally:

```
npm i -g grafgiti
```

[Create a new public repository on Github](https://github.com/new) then clone it and cd to the directory created by the clone:

```
git clone REPO_URL
cd repo_name
```

Run grafgiti:

```
grafgiti
```

Tada! Follow the instructions below the screen. After designing your grafgiti press "D" to commit it. Then press "Q" to exit and run:

```
git push
```

The output would be something like this:

![Grafgiti output](https://www.dropbox.com/s/2gp7evacncfae6g/grafgiti-result.png?dl=1)

# Technologies
I have put together the following tools to create Grafgiti:

* React
* React-blessed
* Redux
* Redux-saga
* Simple-git
