function getSterrenbeeld(gb) {
    var m = parseInt(gb.substring(6, 7));
    var d = parseInt(gb.substring(9, 10));
    console.log(m + " " + d);
    switch (m) {
        case 12:
            if (d < 22)
                return "Boogschutter";
            else
                return "Steenbok";
            break;
        case 1:
            if (d < 19)
                return "Steenbok";
            else
                return "Waterman";
            break;
        case 2:
            if (d < 19)
                return "Waterman";
            else
                return "Vissen";
            break;
        case 3:
            if (d < 20)
                return "Vissen";
            else
                return "Ram";
            break;
        case 4:
            if (d < 19)
                return "Ram";
            else
                return "Stier";
            break;
        case 5:
            if (d < 20)
                return "Stier";
            else
                return "Tweelingen";
            break;
        case 6:
            if (d < 20)
                return "Tweelingen";
            else
                return "Kreeft";
            break;
        case 7:
            if (d < 22)
                return "Kreeft";
            else
                return "Leeuw";
            break;
        case 8:
            if (d < 23) {
                return "Leeuw";
            } else
                return "Maagd";
            break;
        case 9:
            if (d < 22)
                return "Maagd";
            else
                return "Weegschaal";
            break;
        case 10:
            if (d < 22)
                return "Weegschaal";
            else
                return "Schorpioen";
            break;
        case 11:
            if (d < 19)
                return "Schorpioen";
            else
                return "Boogschutter";
            break;
        default:
            break;
    }
}