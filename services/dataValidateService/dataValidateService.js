import { detectionList } from './detectionList.js';

export class DataValidateService {
    async checkData (toCheck) {
        if (typeof toCheck == 'string') {
            if (await this.sqlInjCheck(toCheck)) return true;
        } else {
            const toCheckArr = Object.values(toCheck);
            for (let i=0;i<toCheckArr.length;i++) {
                if (typeof toCheckArr[i] == 'string') {
                    if (await this.sqlInjCheck(toCheckArr[i])) return true;
                }
            }
        }
    }
    async sqlInjCheck (toCheck) {
        for (let i=0;i<detectionList.length;i++) {
            if (toCheck.toLowerCase().indexOf(detectionList[i]) != -1) {
                return true;
            }
        }
        return false;
    }
}