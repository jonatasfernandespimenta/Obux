import CPF from './index'; // tslint:disable-line

const TEST_CPF_NUMBER = 68404377871;
const TEST_CPF_STRING = TEST_CPF_NUMBER.toString();
const TEST_CPF_FORMATTED = '684.043.778-71';

describe('CPF module', () => {
  describe('strip', () => {
    it('should be defined', () => {
      expect(typeof CPF.strip).toBe('function');
    });

    it('should strip not-numbers from anything', () => {
      expect(CPF.strip('1.2')).toBe('12');
      expect(CPF.strip('1\;1a/asd')).toBe('11');
    });

    it('should be type agnostic', () => {
      expect(CPF.strip(11)).toBe('11');
      expect(CPF.strip(() => {})).toBe('');
      expect(CPF.strip(/\d2\d/)).toBe('2');
      expect(CPF.strip({ a: 2 })).toBe('');
      expect(CPF.strip(null)).toBe('');
      // since we are testing exceptions, we disable ts typechecking.
      // @ts-ignore
      expect(CPF.strip()).toBe('');
    });
  });

  describe('format', () => {
    it('should be defined', () => {
      expect(typeof CPF.format).toBe('function');
    });

    it('should format cpfs', () => {
      expect(CPF.format(TEST_CPF_NUMBER)).toBe(TEST_CPF_FORMATTED);
      expect(CPF.format(TEST_CPF_STRING)).toBe(TEST_CPF_FORMATTED);
    });

    it('should be type and length agnostic', () => {
      expect(CPF.format(/\d/)).toBe('');
      expect(CPF.format({ a: 2 })).toBe('');
      expect(CPF.format(() => {})).toBe('');
      expect(CPF.format(function a2b() {})).toBe(''); // tslint:disable-line
      expect(CPF.format(null)).toBe('');
      // since we are testing exceptions, we disable ts typechecking.
      // @ts-ignore
      expect(CPF.format()).toBe('');
    });
  });

  describe('validate', () => {
    it('should be defined', () => {
      expect(typeof CPF.validate).toBe('function');
    });

    it('should validate and invalidate cpfs', () => {
      expect(CPF.validate(TEST_CPF_STRING.substr(0, 10))).toBe(false);
      expect(CPF.validate('11111111111')).toBe(false);
      // changes the first verifier digit
      expect(CPF.validate((TEST_CPF_NUMBER - 10).toString())).toBe(false);

      // changes the second verifier digir
      expect(CPF.validate((TEST_CPF_NUMBER - 1).toString())).toBe(false);
      expect(CPF.validate(TEST_CPF_NUMBER.toString())).toBe(true);
    });

    it('should be type agnostic', () => {
      expect(CPF.validate('213123')).toBe(false);
      expect(CPF.validate(() => {})).toBe(false);
      expect(CPF.validate(/123/)).toBe(false);
      expect(CPF.validate(null)).toBe(false);
      // since we are testing exceptions, we disable ts typechecking.
      // @ts-ignore
      expect(CPF.validate()).toBe(false);
    });
  });

  describe('generate', () => {
    it('should be defined', () => {
      expect(typeof CPF.generate).toBe('function');
    });

    it('should generate valid cpfs', () => {
      expect(CPF.generate()).toHaveLength(11);
      expect(CPF.generate(true)).toHaveLength(14);
      expect(CPF.validate(CPF.generate())).toBe(true);
      expect(CPF.validate(CPF.generate(true))).toBe(true);
    });

    it('should be type agnostic', () => {
      // since we are testing exceptions, we disable ts typechecking.
      // @ts-ignore
      expect(CPF.generate(() => {})).toHaveLength(14);
      // @ts-ignore
      expect(CPF.generate(null)).toHaveLength(11);
      // @ts-ignore
      expect(CPF.generate(/123/)).toHaveLength(14);
      // @ts-ignore
      expect(CPF.generate('123')).toHaveLength(14);
    });
  });
});
