# Grafgiti
Create graffity on your github contributions wall.

![Screencast](https://www.dropbox.com/s/h353fz4yd2goeqs/grafgiti-screencast.gif?dl=1)

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

Tada! Follow the instructions below the screen. After designing your grafgiti press "D" to commit it. Then press "q" to exit and run:

```
git push
```

# Technologies
I have put together the following tools to create Grafgiti:

* React
* React-blessed
* Redux
* Redux-saga
* Simple-git
