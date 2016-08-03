/**
 *
 * @param {string} media
 * @param {Array.<string>} medias
 * @constructor
 */
function MediaHelper(media, medias) {
    var mediaMap,
        mediaIndex;

    mediaIndex = medias.indexOf(media);

    if (typeof media != 'string' || mediaIndex < 0) {
        throw new TypeError('Unknown media');
    }

    mediaMap = this.map = {};

    medias.forEach(function (media, ix) {
        if (mediaIndex == ix) {
            mediaMap[media + '-up'] = mediaMap[media + '-down'] = mediaMap[media] = true;
        } else {
            mediaMap[media] = false;
            mediaMap[media + '-up'] = !(mediaMap[media + '-down'] = ix > mediaIndex);
        }
    });

    Object.freeze(this.map);
    Object.freeze(this);
}

/**
 *
 * @param {string} media
 * @returns {(boolean|null)}
 */
MediaHelper.prototype.is = function (media) {
    if (this.map.hasOwnProperty(media)) {
        return this.map[media];
    } else {
        return null;
    }
};