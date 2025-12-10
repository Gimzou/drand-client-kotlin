import {
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  decodeToString1x4faah2liw2p as decodeToString,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    this.cq_1 = ByteString.gq(new Int8Array(0), null);
    this.dq_1 = toCharArray('0123456789abcdef');
  }
  hq(byteArray) {
    return ByteString.gq(byteArray, null);
  }
}
class ByteString {
  static gq(data, dummy) {
    Companion_getInstance();
    var $this = createThis(this);
    $this.eq_1 = data;
    $this.fq_1 = 0;
    return $this;
  }
  static iq(data, startIndex, endIndex) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.gq(copyOfRange(data, startIndex, endIndex), null);
  }
  i1() {
    return this.eq_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.eq_1.length === this.eq_1.length))
      return false;
    if (!(other.fq_1 === 0) && !(this.fq_1 === 0) && !(other.fq_1 === this.fq_1))
      return false;
    return contentEquals(this.eq_1, other.eq_1);
  }
  hashCode() {
    var hc = this.fq_1;
    if (hc === 0) {
      hc = contentHashCode(this.eq_1);
      this.fq_1 = hc;
    }
    return hc;
  }
  j1(index) {
    if (index < 0 || index >= this.i1())
      throw IndexOutOfBoundsException.xc('index (' + index + ') is out of byte string bounds: [0..' + this.i1() + ')');
    return this.eq_1[index];
  }
  jq(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().cq_1;
    } else {
      tmp = ByteString.iq(this.eq_1, startIndex, endIndex);
    }
    return tmp;
  }
  kq(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.i1() : endIndex;
    return $super === VOID ? this.jq(startIndex, endIndex) : $super.jq.call(this, startIndex, endIndex);
  }
  lq(other) {
    if (other === this)
      return 0;
    var localData = this.eq_1;
    var otherData = other.eq_1;
    var inductionVariable = 0;
    var tmp0 = this.i1();
    // Inline function 'kotlin.math.min' call
    var b = other.i1();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.i1(), other.i1());
  }
  d(other) {
    return this.lq(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.i1().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.i1(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.oa(len);
    $this$with.la('ByteString(size=');
    $this$with.la(sizeStr);
    $this$with.la(' hex=');
    var localData = this.eq_1;
    var inductionVariable = 0;
    var last = this.i1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.ma(Companion_getInstance().dq_1[(b >>> 4 | 0) & 15]);
        $this$with.ma(Companion_getInstance().dq_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.ma(_Char___init__impl__6a9atx(41)).toString();
  }
  mq() {
    return this.eq_1;
  }
}
class UnsafeByteStringOperations {
  nq(array) {
    return Companion_getInstance().hq(array);
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function ByteString_0(bytes) {
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if (bytes.length === 0) {
    tmp = Companion_getInstance().cq_1;
  } else {
    tmp = Companion_getInstance().hq(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.mq());
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.i1() === 0;
}
var UnsafeByteStringOperations_instance;
function UnsafeByteStringOperations_getInstance() {
  return UnsafeByteStringOperations_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
//endregion
//region block: init
UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
//endregion
//region block: exports
export {
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance24iw7lp31iicx,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
