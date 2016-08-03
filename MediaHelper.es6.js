class MediaHelper {
    /**
     *
     * @param {string} media
     * @param {Array.<string>} medias
     */
    constructor(media, medias) {
        let mediaIndex = medias.indexOf(media);

        let mediaMap = this.map = {};

        if (typeof media != 'string' || mediaIndex < 0) {
            throw new TypeError('Unknown media');
        }

        medias.forEach(function (m, ix) {
            if (mediaIndex == ix) {
                mediaMap[m + '-up'] = mediaMap[m + '-down'] = mediaMap[m] = true;
            } else {
                mediaMap[m] = false;
                mediaMap[m + '-up'] = !(mediaMap[m + '-down'] = ix > mediaIndex);
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
    is(media) {
        if (this.map.hasOwnProperty(media)) {
            return this.map[media];
        } else {
            return null;
        }
    }
}