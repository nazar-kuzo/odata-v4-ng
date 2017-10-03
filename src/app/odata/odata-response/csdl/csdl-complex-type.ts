import { CsdlProperty } from './csdl-structural-property';

export class CsdlComplexType {
    constructor(
        public name: string,
        public properties?: CsdlProperty[],
        public baseType?: string,
        public openType?: boolean,
        public hasStream?: boolean
    ) { }
}