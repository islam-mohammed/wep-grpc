import * as jspb from "google-protobuf"

export class GetFormRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFormRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFormRequest): GetFormRequest.AsObject;
  static serializeBinaryToWriter(message: GetFormRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFormRequest;
  static deserializeBinaryFromReader(message: GetFormRequest, reader: jspb.BinaryReader): GetFormRequest;
}

export namespace GetFormRequest {
  export type AsObject = {
    id: number,
  }
}

export class Form extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getPagesList(): Array<Page>;
  setPagesList(value: Array<Page>): void;
  clearPagesList(): void;
  addPages(value?: Page, index?: number): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Form.AsObject;
  static toObject(includeInstance: boolean, msg: Form): Form.AsObject;
  static serializeBinaryToWriter(message: Form, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Form;
  static deserializeBinaryFromReader(message: Form, reader: jspb.BinaryReader): Form;
}

export namespace Form {
  export type AsObject = {
    id: number,
    code: string,
    pagesList: Array<Page.AsObject>,
  }
}

export class Page extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getNextButton(): string;
  setNextButton(value: string): void;

  getPreviousButton(): string;
  setPreviousButton(value: string): void;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  clearBlocksList(): void;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    label: string,
    icon: string,
    nextButton: string,
    previousButton: string,
    blocksList: Array<Block.AsObject>,
  }
}

export class Block extends jspb.Message {
  getQuestionsList(): Array<Question>;
  setQuestionsList(value: Array<Question>): void;
  clearQuestionsList(): void;
  addQuestions(value?: Question, index?: number): Question;

  getValidationsList(): Array<Block.Validation>;
  setValidationsList(value: Array<Block.Validation>): void;
  clearValidationsList(): void;
  addValidations(value?: Block.Validation, index?: number): Block.Validation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    questionsList: Array<Question.AsObject>,
    validationsList: Array<Block.Validation.AsObject>,
  }

  export class Validation extends jspb.Message {
    getType(): Block.Validation.Type;
    setType(value: Block.Validation.Type): void;

    getMessage(): string;
    setMessage(value: string): void;

    getAntecedentInput(): string;
    setAntecedentInput(value: string): void;

    getConsequentInput(): string;
    setConsequentInput(value: string): void;

    getAntecedentValuesList(): Array<string>;
    setAntecedentValuesList(value: Array<string>): void;
    clearAntecedentValuesList(): void;
    addAntecedentValues(value: string, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validation.AsObject;
    static toObject(includeInstance: boolean, msg: Validation): Validation.AsObject;
    static serializeBinaryToWriter(message: Validation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validation;
    static deserializeBinaryFromReader(message: Validation, reader: jspb.BinaryReader): Validation;
  }

  export namespace Validation {
    export type AsObject = {
      type: Block.Validation.Type,
      message: string,
      antecedentInput: string,
      consequentInput: string,
      antecedentValuesList: Array<string>,
    }

    export enum Type { 
      REQUIRED_IF_NOT_EMPTY = 0,
      EMPTY_IF_EMPTY = 1,
      EMPTY_IF_NOT_EMPTY = 2,
      REQUIRED_IF_EMPTY = 3,
      REQUIRED_IF_VALUE = 4,
    }
  }

}

export class Question extends jspb.Message {
  getType(): Question.Type;
  setType(value: Question.Type): void;

  getInputName(): string;
  setInputName(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getPlaceHolder(): string;
  setPlaceHolder(value: string): void;

  getValidationsList(): Array<Question.Validation>;
  setValidationsList(value: Array<Question.Validation>): void;
  clearValidationsList(): void;
  addValidations(value?: Question.Validation, index?: number): Question.Validation;

  getChoice(): Question.Choice | undefined;
  setChoice(value?: Question.Choice): void;
  hasChoice(): boolean;
  clearChoice(): void;

  getFirstNameAudio(): Question.FirstNameAudio | undefined;
  setFirstNameAudio(value?: Question.FirstNameAudio): void;
  hasFirstNameAudio(): boolean;
  clearFirstNameAudio(): void;

  getText(): Question.Text | undefined;
  setText(value?: Question.Text): void;
  hasText(): boolean;
  clearText(): void;

  getRecipient(): Question.Recipient | undefined;
  setRecipient(value?: Question.Recipient): void;
  hasRecipient(): boolean;
  clearRecipient(): void;

  getQuestionCase(): Question.QuestionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    type: Question.Type,
    inputName: string,
    label: string,
    placeHolder: string,
    validationsList: Array<Question.Validation.AsObject>,
    choice?: Question.Choice.AsObject,
    firstNameAudio?: Question.FirstNameAudio.AsObject,
    text?: Question.Text.AsObject,
    recipient?: Question.Recipient.AsObject,
  }

  export class Choice extends jspb.Message {
    getType(): Question.Type;
    setType(value: Question.Type): void;

    getParentInputName(): string;
    setParentInputName(value: string): void;

    getSectionsList(): Array<Question.Choice.Section>;
    setSectionsList(value: Array<Question.Choice.Section>): void;
    clearSectionsList(): void;
    addSections(value?: Question.Choice.Section, index?: number): Question.Choice.Section;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Choice.AsObject;
    static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
    static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Choice;
    static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
  }

  export namespace Choice {
    export type AsObject = {
      type: Question.Type,
      parentInputName: string,
      sectionsList: Array<Question.Choice.Section.AsObject>,
    }

    export class Section extends jspb.Message {
      getLabel(): string;
      setLabel(value: string): void;

      getParentInputValue(): string;
      setParentInputValue(value: string): void;

      getOptionsList(): Array<Question.Choice.Option>;
      setOptionsList(value: Array<Question.Choice.Option>): void;
      clearOptionsList(): void;
      addOptions(value?: Question.Choice.Option, index?: number): Question.Choice.Option;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Section.AsObject;
      static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
      static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Section;
      static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
    }

    export namespace Section {
      export type AsObject = {
        label: string,
        parentInputValue: string,
        optionsList: Array<Question.Choice.Option.AsObject>,
      }
    }


    export class Option extends jspb.Message {
      getLabel(): string;
      setLabel(value: string): void;

      getImage(): string;
      setImage(value: string): void;

      getValue(): string;
      setValue(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Option.AsObject;
      static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
      static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Option;
      static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
    }

    export namespace Option {
      export type AsObject = {
        label: string,
        image: string,
        value: string,
      }
    }

  }


  export class FirstNameAudio extends jspb.Message {
    getParentInputName(): string;
    setParentInputName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FirstNameAudio.AsObject;
    static toObject(includeInstance: boolean, msg: FirstNameAudio): FirstNameAudio.AsObject;
    static serializeBinaryToWriter(message: FirstNameAudio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FirstNameAudio;
    static deserializeBinaryFromReader(message: FirstNameAudio, reader: jspb.BinaryReader): FirstNameAudio;
  }

  export namespace FirstNameAudio {
    export type AsObject = {
      parentInputName: string,
    }
  }


  export class Text extends jspb.Message {
    getType(): Question.Text.Type;
    setType(value: Question.Text.Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Text.AsObject;
    static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
    static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Text;
    static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
  }

  export namespace Text {
    export type AsObject = {
      type: Question.Text.Type,
    }

    export enum Type { 
      DEFAULT = 0,
      PHONE = 1,
    }
  }


  export class Recipient extends jspb.Message {
    getType(): Question.Recipient.Type;
    setType(value: Question.Recipient.Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recipient.AsObject;
    static toObject(includeInstance: boolean, msg: Recipient): Recipient.AsObject;
    static serializeBinaryToWriter(message: Recipient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recipient;
    static deserializeBinaryFromReader(message: Recipient, reader: jspb.BinaryReader): Recipient;
  }

  export namespace Recipient {
    export type AsObject = {
      type: Question.Recipient.Type,
    }

    export enum Type { 
      SINGLE = 0,
      GROUP = 1,
    }
  }


  export class Validation extends jspb.Message {
    getType(): Question.Validation.Type;
    setType(value: Question.Validation.Type): void;

    getValue(): number;
    setValue(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validation.AsObject;
    static toObject(includeInstance: boolean, msg: Validation): Validation.AsObject;
    static serializeBinaryToWriter(message: Validation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validation;
    static deserializeBinaryFromReader(message: Validation, reader: jspb.BinaryReader): Validation;
  }

  export namespace Validation {
    export type AsObject = {
      type: Question.Validation.Type,
      value: number,
      message: string,
    }

    export enum Type { 
      NOT_EMPTY = 0,
      PAST_DATE = 1,
      MAX_LENGTH = 2,
      MIN_LENGTH = 3,
      IS_EMAIL = 4,
      IS_VALID_GEO_DATA = 5,
      IS_VALID_S3_URL = 6,
    }
  }


  export enum Type { 
    CHOICE = 0,
    CHOICE_DEPENDENT = 1,
    DATE = 2,
    FIRST_NAME_AUDIO = 3,
    PICTURE = 4,
    TEXT = 5,
    RECIPIENT = 6,
    GROUP_NAME = 7,
  }

  export enum QuestionCase { 
    QUESTION_NOT_SET = 0,
    CHOICE = 16,
    FIRST_NAME_AUDIO = 17,
    TEXT = 18,
    RECIPIENT = 19,
  }
}

