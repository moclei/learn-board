export class Decision {
  constructor(public username: string,
              public content: string,
              public title?: string,
              public result?: string,
              public expectedValue?: number,
              public actualValue?: number,
              public decisionId?: string,
              public userId?: string) {}

}
