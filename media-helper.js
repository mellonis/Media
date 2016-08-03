/**
 *
 * @param {string} media
 * @param {Array.<string>} medias
 * @constructor
 */
function MediaHelper(media, medias) {
    var mediaMap = {},
        currentMedia,
        currentMediaIndex;

    currentMedia = media;
    currentMediaIndex = medias.indexOf(currentMediamedia);

    if (typeof currentMedia != 'string' || currentMediaIndex < 0) {
        throw new TypeError('Unknown media');
    }

    medias.forEach(function (m, ix) {
        if (currentMediaIndex == ix) {
            mediaMap[m + '-up'] = mediaMap[m + '-down'] = mediaMap[m] = true;
        } else {
            mediaMap[m] = false;
            mediaMap[m + '-up'] = !(mediaMap[m + '-down'] = ix > currentMediaIndex);
        }
    });

    this.is = function (m) {
        if (mediaMap.hasOwnProperty(m)) {
            return mediaMap[m];
        } else {
            return null;
        }
    };
}