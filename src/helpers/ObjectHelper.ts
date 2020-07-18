import { FIXME } from '../models/FixMe.model';

class ObjectHelper {
  static isObject(valueToCheck: FIXME): boolean {
    return typeof valueToCheck === 'object' && valueToCheck instanceof Object && !(valueToCheck instanceof Array);
  }
}

export default ObjectHelper;
