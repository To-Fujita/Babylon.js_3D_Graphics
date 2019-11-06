// This program is based on "https://matome.naver.jp/odai/2141170552198835001" by Mr. tan23ae.
// by T. Fujita

var Maze = function(X, Y) {
    var w = X;								// 幅（奇数）
    var h = Y;								// 高さ（奇数）
    if(w < 11) {w = 11;}
    if(h < 11) {h = 11;}
    if(w % 2 == 0) {w = w - 1;}
    if(h % 2 == 0) {h = h - 1;}

    var x;
    var y;
    var maze = new Array();
    var results = new Array();

// 準備
    for (y = 0; y < h; y++) {
	maze[y] = new Array();
	for (x = 0; x < w; x++) {
	    if (y == 0 || y == h -1 || x == 0 || x == w - 1) {
		maze[y][x] = "W";					// 外周
	    } else if (y % 2 == 0 && x % 2 == 0) {
		maze[y][x] = "W";					// [偶数][偶数]
	    } else {
	        maze[y][x] = "F";					// その他
	    }
	}
    }


// 壁位置
    for (y = 2; y < h - 2; y += 2) {
	for (x = 2; x < w - 2; x += 2) {
	    var n;
	    if (y == 2) { 						// 一番上の段
		if (maze[y][x-1] == "W") {
		    n = rand(0, 2);
		} else {
		    n = rand(0, 3);
		}
	    } else {
		if (maze[y][x-1] == "W") {
		    n = rand(1, 2);
		} else {
		    n = rand(1, 3);
		}
	    }

	    switch (n) {
		case 0: 						// 上
		    maze[y - 1][x] = "W";
		    break;
		case 1: 						// 右
		    maze[y][x + 1] = "W";
		    break;
		case 2: 						// 下
		    maze[y + 1][x] = "W";
		    break;
		default: 						// 左
		    maze[y][x - 1] = "W";
		    break;
	    }
	}
    }
    var i = 0;
    while (maze[0][i] == "W") {
	if(maze[1][i + 1] == "F") {maze[0][i + 1] = "P";}
	i = i + 1;
    }
    i = maze[0].length - 2;
    var j = maze.length - 1;
    while(maze[j][i] == "W") {
	if(maze[j - 1][i - 1] == "F") {maze[j][i - 1] = "G";}
	i = i - 1;
    }
// alert(maze[0] + "\n" + maze[1]);
    for (y = 0; y < h; y++) {
	results[y] = [];
	for (x = 0; x < w; x++) {
	    results[y] = results[y] + maze[y][x];
	}
    }
// alert(results[0] + "\n" + results[1]);
    return results;
}


// 乱数取得
var rand = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

