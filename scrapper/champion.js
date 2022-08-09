class Champion {
    get fullName() {
        return this._fullName;
    }

    get classType() {
        return this._classType;
    }

    get difficulty() {
        return this._difficulty;
    }

    get scenicName() {
        return this._scenicName;
    }

    constructor(fullName, classType, difficulty, scenicName) {
        this._fullName = fullName;
        this._classType = classType;
        this._difficulty = difficulty;
        this._scenicName = scenicName;
    }
}

module.exports = Champion;