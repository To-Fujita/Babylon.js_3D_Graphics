// All the rooms are here for ice world game. 
// by T. Fujita
// 
// B: Block(Movable)
// F: Floor
// G: Goal
// P: Player
// W: Wall

var room = [];
    room[0] = [["WWWWGWWW",
		"WFPFFFFW",
		"WFFFFFFW",
		"WFFFFFFW",
		"WFFFFWWW",
		"WWWWWWWW"],
	       ["FFFFFFFF",
		"FFFFFFFF",
		"FFFFFFFF",
		"FFFFFFFF",
		"FFFFFFFF",
		"FFFFFFFF"]]

    room[1] = [["WWWWWWWW",
		"WFPFFFFW",
		"WFBFFFFW",
		"WWWWWLWW",
		"WWWWWWWW",
		"WWWWWWWW",
		"WWWWWWWW"],
	       ["WFFFFFFW",
		"WFFFFFFW",
		"WFFFFFFW",
		"WFFFFFFW",
		"WFFFFBFW",
		"WFBFFFFW",
		"WWWWGWWW"]]

    room[2] = [["WWWWWGWWWWWWWWWW",
		"WFFFFFFFFFFFBFFW",
		"WFFFFFFFBFFFFFFW",
		"WFFBFFFFFFFFFBFW",
		"WFFBFFFFFFFFFFFW",
		"WFFFFFBBPFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WBFBFFFFFFFBFFFW",
		"WFFFFFFFBFFFFFFW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF"]]

    room[3] = [["FFFWWWGWWWWWWWWW",
		"WWWWFFFFFFFFFFFW",
		"WFBFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFPFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WWWWWWWWWWWWWLWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"WFFFEFFFFFFFFFFW",
		"WFFFFFFFEFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFBFFFFFBFFFFW",
		"WWWWWWWWWWWWWWWW"]]

    room[4] = [["WWWWWWWWWWWWWWWW",
		"WFFPFFFFFFFFFFFW",
		"WFFFFFFFFFFFFWFW",
		"WFFFFFWFFFFFFFFW",
		"WFFFFFFFFFFWFFFW",
		"WFFFFFFWFFFFFFFW",
		"WWWFFFFFFFFFWFFW",
		"WWWWWWWWWWLWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"WWFFFEFFFFFFFFFW",
		"WFFFFFFFFFFFWFFW",
		"WFFFFFFFFFBBFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WWWWWWWWWWWWGWWW"]]

    room[5] = [["WWWWGWWWWWWWWWWW",
		"WFPFFFFFFFFFFFFW",
		"WFFFFFFBFFFFFFFW",
		"WFFFFBFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFWFFFFFFFFW",
		"WWWLWWWWWFFFFWWW",
		"WWWWWWWWWFFFFWFF",
		"WWWWWWWWWFFFFWFF",
		"WWWWWWWWWFFFFWFF",
		"WWWWWWWWWFFFFWFF",
		"WWWWWWWWWWWWWWFF"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FWFFFFFFFFEFFFFF",
		"WWFFFFFFFFFFFFFF",
		"WFFFFFBFFFFFFFFF",
		"WFFFFFFFFFFFFFFF",
		"WFFFFFFFFFFFFFFF",
		"WWWWWWWWWWWWWWFF"]]

    room[6] = [["WWWWWWWWWWGWWWWW",
		"WFFFFFFFFFFFFFFW",
		"WFFFPFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFBBFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFBFFFW",
		"WFFFFFFFFFWWWWWW",
		"WLFFFFFFFFWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFWWFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFBFFFF",
		"WFFFEFFFFFWFFFFW",
		"WFFFFFFFFFFFWWWW",
		"WFBFFFFFFFFFWFFF",
		"WWFFFFFFFFFFWFFF",
		"WWWWWWWWWWWWWFFF"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFEFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFBFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFEFFFFFFF",
		"FFBFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF"]]

    room[7] = [["FFFWWWWWWWWFFFFF",
		"FFFWFFFFFFWWFFFF",
		"FFFWFFFFFFFWWFFF",
		"FFWWFFFFFFBFWWFF",
		"FWWFFFFPFWWFFWWF",
		"FWWFFFFFFFFWFFWW",
		"WWFFFFFFFFFFWFFW",
		"WWBFFFFFFFBFFFFW",
		"WFFFFFFFFWFFFFFW",
		"WFFFFFWFFFBFFWWW",
		"WWFFFLWFFFFFFWFF",
		"WWWWWWWWWWWWWWFF"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"WFFFFEFFFFFFFFFF",
		"WFFFFFFFFFFFFFFF",
		"WFFFFFFFFFFEFFFF",
		"WFFFFFFFFFFFFFFF",
		"WWFFFFFFFFFFFFFF",
		"WWGWWWWWWWWWWWFF"]]

    room[8] = [["FWWWWWWWWWWWGWWF",
		"WWFFFFPFFFFFFFWW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFBFFFFFW",
		"WFFFFBFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WWFFFFFFFFFFBFFW",
		"WWLWWWFFFWWWWWLW",
		"WWWWWWFFFWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"WFFFEFFFFFFFFFFW",
		"WWFFFFFFFFFFBFFW",
		"WFFFFFFFFWFFFFFW",
		"WFFFFFFFFFFFFFWW",
		"WFFFFFFFFFFFFFWW",
		"WWWWWWWWWWWWWWWW"]]

    room[9] = [["WWWWWWWWWWWWWWWW",
		"WFFFFFBFFFFFBFFW",
		"WFFFFFFFFFFFFFFW",
		"WFFBFFFFWFFFFFFW",
		"WWFFFPFFFFFFFFWW",
		"WWWFFFFFFFFFBWWW",
		"WWWWLWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW",
		"WWWWWWWWWWWWWWWW"],
	       ["FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"FFFFFFFFFFFFFFFF",
		"WFFFFFFFFFFFFFFF",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFFFFFFFW",
		"WWWWFWWWWWWWWWWW",
		"WFFFFFFFFFFFFFFW",
		"WFFFFFFFFBFFFFFW",
		"WBBFFFFFBFFFFFFW",
		"WFFFFFFFFFFFFFWW",
		"WWGWWWWWWWWWWWWW"]]

    room[10] = [["WWWWGWWWWWWWWWWW",
		 "WFFFFFFFFFFFFFFW",
		 "WFFFFFFFFFFFFFFW",
		 "WFFPFFFFFFFFFFFW",
		 "WFFFFFFFFFFFFFFW",
		 "WFFFWWWWWWWWWWWW",
		 "WFFFWWWWWWWWWWWW",
		 "WFFFWWWWWWWWWWWW",
		 "WFFFWWWWWWWWWWWW",
		 "WFFFWWWWWWWWWWWW",
		 "WFFLWWWWWWWWWWWW",
		 "WWWWWWWWWWWWWWWW"],
	        ["FFFFFFFFFFFFFFFF",
		 "FFFFFFFFFFFFFFFF",
		 "FFFFFFFFFFFFFFFF",
		 "FFFFFFFFFFFFFFFF",
		 "FFFFFFFFFFFFFFFW",
		 "FFFFFFBFFBFFWWWW",
		 "FFFFFFBFFFFFFWWW",
		 "FFFFBFFBFFFFFFWW",
		 "FFFFFFFBFFBFFFFW",
		 "FFFFBBFFFBFFFFFW",
		 "WFFFFFFFFFFFFFFW",
		 "WWWWWWWWWWWWWWWW"]]
