import { CsdlAnnotable, CsdlAnnotation } from './csdl-annotation';

export class CsdlEnumType {
    constructor(
        public name: string,
        public members: CsdlEnumMember[],
        public underlyingType?: string,
        public isFlags?: boolean
    ) { }
}

export class CsdlEnumMember extends CsdlAnnotable {
    constructor(
        public name: string,
        public value?: number,
        annotationList?: CsdlAnnotation[]
    ) {
      super(annotationList);
    }
}
