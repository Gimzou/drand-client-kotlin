import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  Long2qws0ah9gnpki as Long,
  compare2uud5j30pw5xc as compare,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract16cg4lfi29fq9 as subtract,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  equalsLong28bsrfhwvd686 as equalsLong,
  toString1pkumu07cwy4m as toString,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  add85si75olwt6n as add,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  fromInt1lka3ktyu79a4 as fromInt,
  convertToIntofdoxh9bstof as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  multiply18i3gv3wlmcjg as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance24iw7lp31iicx as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Source {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.fs(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.fs.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  constructor() {
    this.oq_1 = null;
    this.pq_1 = null;
    this.qq_1 = new Long(0, 0);
  }
  i1() {
    return this.qq_1;
  }
  vq() {
    return this;
  }
  wq() {
    return equalsLong(this.i1(), new Long(0, 0));
  }
  xq(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.u(toString(message));
    }
    if (compare(this.i1(), byteCount) < 0) {
      throw EOFException.uq("Buffer doesn't contain required number of bytes (size: " + this.i1().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  yq(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.u(toString(message));
    }
    return compare(this.i1(), byteCount) >= 0;
  }
  zq() {
    var tmp0_elvis_lhs = this.oq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.i1();
    if (segmentSize === 0) {
      this.hr();
      return this.zq();
    }
    var v = segment.ir();
    this.qq_1 = subtract(this.qq_1, new Long(1, 0));
    if (segmentSize === 1) {
      this.hr();
    }
    return v;
  }
  jr() {
    var tmp0_elvis_lhs = this.oq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.i1();
    if (segmentSize < 2) {
      this.xq(new Long(2, 0));
      if (segmentSize === 0) {
        this.hr();
        return this.jr();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.zq() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.zq() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.kr();
    this.qq_1 = subtract(this.qq_1, new Long(2, 0));
    if (segmentSize === 2) {
      this.hr();
    }
    return v;
  }
  lr() {
    return Unit_instance;
  }
  mr(out, startIndex, endIndex) {
    checkBounds(this.i1(), startIndex, endIndex);
    if (equalsLong(startIndex, endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.qq_1 = add(out.qq_1, remainingByteCount);
    var s = this.oq_1;
    while (compare(currentOffset, fromInt(ensureNotNull(s).cr_1 - s.br_1 | 0)) >= 0) {
      currentOffset = subtract(currentOffset, fromInt(s.cr_1 - s.br_1 | 0));
      s = s.fr_1;
    }
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).nr();
      copy.br_1 = copy.br_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.br_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.cr_1;
      tmp.cr_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.oq_1 == null) {
        out.oq_1 = copy;
        out.pq_1 = copy;
      } else if (false) {
        out.pq_1 = ensureNotNull(out.pq_1).or(copy).pr();
        if (ensureNotNull(out.pq_1).gr_1 == null) {
          out.oq_1 = out.pq_1;
        }
      } else {
        out.pq_1 = ensureNotNull(out.pq_1).or(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.cr_1 - copy.br_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.fr_1;
    }
  }
  qr() {
    var result = this.i1();
    if (equalsLong(result, new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.pq_1);
    if (tail.cr_1 < 8192 && tail.er_1) {
      result = subtract(result, fromInt(tail.cr_1 - tail.br_1 | 0));
    }
    return result;
  }
  rr(position) {
    if (compare(position, new Long(0, 0)) < 0 || compare(position, this.i1()) >= 0) {
      throw IndexOutOfBoundsException.xc('position (' + position.toString() + ') is not within the range [0..size(' + this.i1().toString() + '))');
    }
    if (equalsLong(position, new Long(0, 0))) {
      return ensureNotNull(this.oq_1).sr(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.oq_1 == null) {
      var offset = new Long(-1, -1);
      return ensureNotNull(null).sr(convertToInt(subtract(position, offset)));
    }
    if (compare(subtract(this.i1(), position), position) < 0) {
      var s = this.pq_1;
      var offset_0 = this.i1();
      $l$loop: while (!(s == null) && compare(offset_0, position) > 0) {
        offset_0 = subtract(offset_0, fromInt(s.cr_1 - s.br_1 | 0));
        if (compare(offset_0, position) <= 0)
          break $l$loop;
        s = s.gr_1;
      }
      var tmp0 = s;
      var offset_1 = offset_0;
      return ensureNotNull(tmp0).sr(convertToInt(subtract(position, offset_1)));
    } else {
      var s_0 = this.oq_1;
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_0 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.cr_1 - s_0.br_1 | 0;
        var nextOffset = add(tmp0_0, fromInt(other));
        if (compare(nextOffset, position) > 0)
          break $l$loop_0;
        s_0 = s_0.fr_1;
        offset_2 = nextOffset;
      }
      var tmp0_1 = s_0;
      var offset_3 = offset_2;
      return ensureNotNull(tmp0_1).sr(convertToInt(subtract(position, offset_3)));
    }
  }
  p2() {
    return this.tr(this.i1());
  }
  tr(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.u(toString(message));
    }
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.oq_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.uq('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.cr_1 - head.br_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$4 = compare(tmp0, b_0) <= 0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$4);
      this.qq_1 = subtract(this.qq_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.br_1 = head.br_1 + toSkip | 0;
      if (head.br_1 === head.cr_1) {
        this.hr();
      }
    }
  }
  ur(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.oq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.i1();
    var toCopy = Math.min(tmp0, b);
    s.vr(sink, startIndex, startIndex + toCopy | 0);
    this.qq_1 = subtract(this.qq_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.hr();
    }
    return toCopy;
  }
  wr(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.u(toString(message));
    }
    if (equalsLong(this.i1(), new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = compare(byteCount, this.i1()) > 0 ? this.i1() : byteCount;
    sink.xr(this, bytesWritten);
    return bytesWritten;
  }
  yr(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.u(toString(message));
    }
    if (compare(this.i1(), byteCount) < 0) {
      sink.xr(this, this.i1());
      throw EOFException.uq('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.i1().toString() + ' bytes were written.');
    }
    sink.xr(this, byteCount);
  }
  zr(sink) {
    var byteCount = this.i1();
    if (compare(byteCount, new Long(0, 0)) > 0) {
      sink.xr(this, byteCount);
    }
    return byteCount;
  }
  as() {
    return buffered(new PeekSource(this));
  }
  bs(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.u(toString(message));
    }
    if (this.pq_1 == null) {
      var result = SegmentPool_instance.es();
      this.oq_1 = result;
      this.pq_1 = result;
      return result;
    }
    var t = ensureNotNull(this.pq_1);
    if ((t.cr_1 + minimumCapacity | 0) > 8192 || !t.er_1) {
      var newTail = t.or(SegmentPool_instance.es());
      this.pq_1 = newTail;
      return newTail;
    }
    return t;
  }
  fs(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.bs(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.gs();
      var toCopy = Math.min(tmp0, b);
      tail.hs(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.qq_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.qq_1 = add(tmp0_0, fromInt(other));
  }
  xr(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.u(toString(message));
    }
    checkOffsetAndCount(source.qq_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      if (compare(remainingByteCount, fromInt(ensureNotNull(source.oq_1).i1())) < 0) {
        var tail = this.pq_1;
        var tmp;
        if (!(tail == null) && tail.er_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.cr_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.js() ? 0 : tail.br_1;
          var tmp$ret$3 = subtract(tmp0_0, fromInt(other_0));
          tmp = compare(tmp$ret$3, new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.oq_1).ls(tail, convertToInt(remainingByteCount));
          source.qq_1 = subtract(source.qq_1, remainingByteCount);
          this.qq_1 = add(this.qq_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.oq_1 = ensureNotNull(source.oq_1).ks(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.oq_1);
      var movedByteCount = fromInt(segmentToMove.i1());
      source.oq_1 = segmentToMove.ms();
      if (source.oq_1 == null) {
        source.pq_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.oq_1 == null) {
        this.oq_1 = segmentToMove;
        this.pq_1 = segmentToMove;
      } else if (true) {
        this.pq_1 = ensureNotNull(this.pq_1).or(segmentToMove).pr();
        if (ensureNotNull(this.pq_1).gr_1 == null) {
          this.oq_1 = this.pq_1;
        }
      } else {
        this.pq_1 = ensureNotNull(this.pq_1).or(segmentToMove);
      }
      source.qq_1 = subtract(source.qq_1, movedByteCount);
      this.qq_1 = add(this.qq_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  ns(source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.wr(this, new Long(8192, 0));
      if (equalsLong(readCount, new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  os(byte) {
    this.bs(1).ps(byte);
    this.qq_1 = add(this.qq_1, new Long(1, 0));
  }
  qs(short) {
    this.bs(2).rs(short);
    this.qq_1 = add(this.qq_1, new Long(2, 0));
  }
  z4() {
    return Unit_instance;
  }
  toString() {
    if (equalsLong(this.i1(), new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.i1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$1 = compare(a, b) <= 0 ? a : b;
    var len = convertToInt(tmp$ret$1);
    var builder = StringBuilder.oa(imul(len, 2) + (compare(this.i1(), fromInt(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.oq_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.i1()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.ss(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.ma(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.ma(tmp_1[tmp$ret$3]);
      }
      curr = curr.fr_1;
    }
    if (compare(this.i1(), fromInt(maxPrintableBytes)) > 0) {
      builder.ma(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.i1().toString() + ' hex=' + builder.toString() + ')';
  }
  hr() {
    var oldHead = ensureNotNull(this.oq_1);
    var nextHead = oldHead.fr_1;
    this.oq_1 = nextHead;
    if (nextHead == null) {
      this.pq_1 = null;
    } else {
      nextHead.gr_1 = null;
    }
    oldHead.fr_1 = null;
    SegmentPool_instance.ts(oldHead);
  }
  us() {
    var oldTail = ensureNotNull(this.pq_1);
    var newTail = oldTail.gr_1;
    this.pq_1 = newTail;
    if (newTail == null) {
      this.oq_1 = null;
    } else {
      newTail.fr_1 = null;
    }
    oldTail.gr_1 = null;
    SegmentPool_instance.ts(oldTail);
  }
}
class PeekSource {
  constructor(upstream) {
    this.vs_1 = upstream;
    this.ws_1 = this.vs_1.vq();
    this.xs_1 = this.ws_1.oq_1;
    var tmp = this;
    var tmp0_safe_receiver = this.ws_1.oq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.br_1;
    tmp.ys_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.zs_1 = false;
    this.at_1 = new Long(0, 0);
  }
  wr(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.zs_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.u3(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.u(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.xs_1 == null || (this.xs_1 === this.ws_1.oq_1 && this.ys_1 === ensureNotNull(this.ws_1.oq_1).br_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.u3(toString(message_1));
    }
    if (equalsLong(byteCount, new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.at_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.vs_1.yq(tmp$ret$7))
      return new Long(-1, -1);
    if (this.xs_1 == null && !(this.ws_1.oq_1 == null)) {
      this.xs_1 = this.ws_1.oq_1;
      this.ys_1 = ensureNotNull(this.ws_1.oq_1).br_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.ws_1.i1(), this.at_1);
    var toCopy = compare(byteCount, b) <= 0 ? byteCount : b;
    this.ws_1.mr(sink, this.at_1, add(this.at_1, toCopy));
    this.at_1 = add(this.at_1, toCopy);
    return toCopy;
  }
  z4() {
    this.zs_1 = true;
  }
}
class RealSource {
  constructor(source) {
    this.bt_1 = source;
    this.ct_1 = false;
    this.dt_1 = new Buffer();
  }
  vq() {
    return this.dt_1;
  }
  wr(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.ct_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.u3(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.u(toString(message_0));
    }
    if (equalsLong(this.dt_1.i1(), new Long(0, 0))) {
      var read = this.bt_1.wr(this.dt_1, new Long(8192, 0));
      if (equalsLong(read, new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.dt_1.i1();
    var toRead = compare(byteCount, b) <= 0 ? byteCount : b;
    return this.dt_1.wr(sink, toRead);
  }
  wq() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.ct_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.u3(toString(message));
    }
    return this.dt_1.wq() && equalsLong(this.bt_1.wr(this.dt_1, new Long(8192, 0)), new Long(-1, -1));
  }
  xq(byteCount) {
    if (!this.yq(byteCount))
      throw EOFException.uq("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  yq(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.ct_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.u3(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.u(toString(message_0));
    }
    while (compare(this.dt_1.i1(), byteCount) < 0) {
      if (equalsLong(this.bt_1.wr(this.dt_1, new Long(8192, 0)), new Long(-1, -1)))
        return false;
    }
    return true;
  }
  zq() {
    this.xq(new Long(1, 0));
    return this.dt_1.zq();
  }
  ur(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (equalsLong(this.dt_1.i1(), new Long(0, 0))) {
      var read = this.bt_1.wr(this.dt_1, new Long(8192, 0));
      if (equalsLong(read, new Long(-1, -1)))
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.dt_1.i1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$2 = compare(a, b) <= 0 ? a : b;
    var toRead = convertToInt(tmp$ret$2);
    return this.dt_1.ur(sink, startIndex, startIndex + toRead | 0);
  }
  yr(sink, byteCount) {
    try {
      this.xq(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.xr(this.dt_1, this.dt_1.i1());
        throw e;
      } else {
        throw $p;
      }
    }
    this.dt_1.yr(sink, byteCount);
  }
  zr(sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!equalsLong(this.bt_1.wr(this.dt_1, new Long(8192, 0)), new Long(-1, -1))) {
      var emitByteCount = this.dt_1.qr();
      if (compare(emitByteCount, new Long(0, 0)) > 0) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.xr(this.dt_1, emitByteCount);
      }
    }
    if (compare(this.dt_1.i1(), new Long(0, 0)) > 0) {
      totalBytesWritten = add(totalBytesWritten, this.dt_1.i1());
      sink.xr(this.dt_1, this.dt_1.i1());
    }
    return totalBytesWritten;
  }
  jr() {
    this.xq(new Long(2, 0));
    return this.dt_1.jr();
  }
  as() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.ct_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.u3(toString(message));
    }
    return buffered(new PeekSource(this));
  }
  z4() {
    if (this.ct_1)
      return Unit_instance;
    this.ct_1 = true;
    this.bt_1.z4();
    this.dt_1.p2();
  }
  toString() {
    return 'buffered(' + toString(this.bt_1) + ')';
  }
}
class Companion {
  constructor() {
    this.et_1 = 8192;
    this.ft_1 = 1024;
  }
  gt() {
    return Segment.ht();
  }
}
class Segment {
  js() {
    var tmp0_safe_receiver = this.dr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.it();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  static ht() {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.ar_1 = new Int8Array(8192);
    $this.er_1 = true;
    $this.dr_1 = null;
    return $this;
  }
  static jt(data, pos, limit, shareToken, owner) {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.ar_1 = data;
    $this.br_1 = pos;
    $this.cr_1 = limit;
    $this.dr_1 = shareToken;
    $this.er_1 = owner;
    return $this;
  }
  nr() {
    var tmp0_elvis_lhs = this.dr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.kt();
      this.dr_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.br_1;
    var tmp_1 = this.cr_1;
    // Inline function 'kotlin.also' call
    t.lt();
    return Segment.jt(this.ar_1, tmp_0, tmp_1, t, false);
  }
  ms() {
    var result = this.fr_1;
    if (!(this.gr_1 == null)) {
      ensureNotNull(this.gr_1).fr_1 = this.fr_1;
    }
    if (!(this.fr_1 == null)) {
      ensureNotNull(this.fr_1).gr_1 = this.gr_1;
    }
    this.fr_1 = null;
    this.gr_1 = null;
    return result;
  }
  or(segment) {
    segment.gr_1 = this;
    segment.fr_1 = this.fr_1;
    if (!(this.fr_1 == null)) {
      ensureNotNull(this.fr_1).gr_1 = segment;
    }
    this.fr_1 = segment;
    return segment;
  }
  ks(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.cr_1 - this.br_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.u(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.nr();
    } else {
      prefix = SegmentPool_instance.es();
      var tmp0 = this.ar_1;
      var tmp2 = prefix.ar_1;
      var tmp4 = this.br_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.br_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
    }
    prefix.cr_1 = prefix.br_1 + byteCount | 0;
    this.br_1 = this.br_1 + byteCount | 0;
    if (!(this.gr_1 == null)) {
      ensureNotNull(this.gr_1).or(prefix);
    } else {
      prefix.fr_1 = this;
      this.gr_1 = prefix;
    }
    return prefix;
  }
  pr() {
    // Inline function 'kotlin.check' call
    if (!!(this.gr_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.u3(toString(message));
    }
    if (!ensureNotNull(this.gr_1).er_1)
      return this;
    var byteCount = this.cr_1 - this.br_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.gr_1).cr_1 | 0) + (ensureNotNull(this.gr_1).js() ? 0 : ensureNotNull(this.gr_1).br_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.gr_1;
    this.ls(ensureNotNull(predecessor), byteCount);
    var successor = this.ms();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.u3('Check failed.');
    }
    SegmentPool_instance.ts(this);
    return predecessor;
  }
  ps(byte) {
    var _unary__edvuaz = this.cr_1;
    this.cr_1 = _unary__edvuaz + 1 | 0;
    this.ar_1[_unary__edvuaz] = byte;
  }
  rs(short) {
    var data = this.ar_1;
    var limit = this.cr_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.cr_1 = limit;
  }
  ir() {
    var _unary__edvuaz = this.br_1;
    this.br_1 = _unary__edvuaz + 1 | 0;
    return this.ar_1[_unary__edvuaz];
  }
  kr() {
    var data = this.ar_1;
    var pos = this.br_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.br_1 = pos;
    return s;
  }
  ls(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.er_1) {
      var message = 'only owner can write';
      throw IllegalStateException.u3(toString(message));
    }
    if ((sink.cr_1 + byteCount | 0) > 8192) {
      if (sink.js())
        throw IllegalArgumentException.nc();
      if (((sink.cr_1 + byteCount | 0) - sink.br_1 | 0) > 8192)
        throw IllegalArgumentException.nc();
      var tmp0 = sink.ar_1;
      var tmp2 = sink.ar_1;
      var tmp4 = sink.br_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.cr_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
      sink.cr_1 = sink.cr_1 - sink.br_1 | 0;
      sink.br_1 = 0;
    }
    var tmp0_0 = this.ar_1;
    var tmp2_0 = sink.ar_1;
    var tmp4_0 = sink.cr_1;
    var tmp6 = this.br_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.br_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4_0, tmp6, endIndex_0);
    sink.cr_1 = sink.cr_1 + byteCount | 0;
    this.br_1 = this.br_1 + byteCount | 0;
  }
  vr(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.ar_1;
    var tmp6 = this.br_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.br_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.br_1 = this.br_1 + len | 0;
  }
  hs(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.ar_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.cr_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.cr_1 = this.cr_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  i1() {
    return this.cr_1 - this.br_1 | 0;
  }
  gs() {
    return this.ar_1.length - this.cr_1 | 0;
  }
  mt(readOnly) {
    return this.ar_1;
  }
  sr(index) {
    return this.ar_1[this.br_1 + index | 0];
  }
  nt(index, value) {
    this.ar_1[this.cr_1 + index | 0] = value;
  }
  ot(index, b0, b1) {
    var d = this.ar_1;
    var l = this.cr_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  pt(index, b0, b1, b2) {
    var d = this.ar_1;
    var l = this.cr_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  qt(index, b0, b1, b2, b3) {
    var d = this.ar_1;
    var l = this.cr_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  constructor() {
    AlwaysSharedCopyTracker_instance = null;
    super();
    AlwaysSharedCopyTracker_instance = this;
  }
  it() {
    return true;
  }
  lt() {
    return Unit_instance;
  }
}
class UnsafeBufferOperations {}
class SegmentReadContextImpl$1 {
  ss(segment, offset) {
    return segment.sr(offset);
  }
}
class SegmentWriteContextImpl$1 {
  ut(segment, offset, value) {
    segment.nt(offset, value);
  }
  tt(segment, offset, b0, b1) {
    segment.ot(offset, b0, b1);
  }
  st(segment, offset, b0, b1, b2) {
    segment.pt(offset, b0, b1, b2);
  }
  rt(segment, offset, b0, b1, b2, b3) {
    segment.qt(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  ss(segment, offset) {
    return get_SegmentReadContextImpl().ss(segment, offset);
  }
}
class IOException extends Exception {
  static xt() {
    var $this = this.lc();
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static yt(message) {
    var $this = this.q3(message);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static zt(message, cause) {
    var $this = this.mc(message, cause);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static au() {
    var $this = this.xt();
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static uq(message) {
    var $this = this.yt(message);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  constructor() {
    this.cs_1 = 0;
    this.ds_1 = 0;
  }
  es() {
    return Companion_instance.gt();
  }
  ts(segment) {
  }
  kt() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (compare(startIndex, new Long(0, 0)) < 0 || compare(endIndex, size) > 0) {
    throw IndexOutOfBoundsException.xc('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (compare(startIndex, endIndex) > 0) {
    throw IllegalArgumentException.u('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (compare(offset, new Long(0, 0)) < 0 || compare(offset, size) > 0 || compare(subtract(size, offset), byteCount) < 0 || compare(byteCount, new Long(0, 0)) < 0) {
    throw IllegalArgumentException.u('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException.uq("Buffer doesn't contain required number of bytes (size: " + $this.i1().toString() + ', required: ' + byteCount.toString() + ')');
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.i1() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.i1();
  var endOffset = compare(endIndex, b) <= 0 ? endIndex : b;
  checkBounds(_this__u8e3s4.i1(), startIndex, endOffset);
  if (equalsLong(startIndex, endOffset))
    return new Long(-1, -1);
  // Inline function 'kotlinx.io.seek' call
  if (_this__u8e3s4.oq_1 == null) {
    var o = new Long(-1, -1);
    if (equalsLong(o, new Long(-1, -1))) {
      return new Long(-1, -1);
    }
    var segment = null;
    var offset = o;
    do {
      // Inline function 'kotlin.check' call
      if (!(compare(endOffset, offset) > 0)) {
        throw IllegalStateException.u3('Check failed.');
      }
      ensureNotNull(segment);
      var tmp = segment;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = convertToInt(subtract(startIndex, offset));
      var tmp_0 = Math.max(a, 0);
      var tmp0 = segment.i1();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = convertToInt(subtract(endOffset, offset));
      var tmp$ret$3 = Math.min(tmp0, b_0);
      var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$3);
      if (!(idx === -1)) {
        return add(offset, fromInt(idx));
      }
      var tmp0_0 = offset;
      // Inline function 'kotlin.Long.plus' call
      var other = segment.i1();
      offset = add(tmp0_0, fromInt(other));
      segment = segment.fr_1;
    }
     while (!(segment == null) && compare(offset, endOffset) < 0);
    return new Long(-1, -1);
  }
  if (compare(subtract(_this__u8e3s4.i1(), startIndex), startIndex) < 0) {
    var s = _this__u8e3s4.pq_1;
    var offset_0 = _this__u8e3s4.i1();
    $l$loop: while (!(s == null) && compare(offset_0, startIndex) > 0) {
      offset_0 = subtract(offset_0, fromInt(s.cr_1 - s.br_1 | 0));
      if (compare(offset_0, startIndex) <= 0)
        break $l$loop;
      s = s.gr_1;
    }
    var tmp0_1 = s;
    var o_0 = offset_0;
    if (equalsLong(o_0, new Long(-1, -1))) {
      return new Long(-1, -1);
    }
    var segment_0 = tmp0_1;
    var offset_1 = o_0;
    do {
      // Inline function 'kotlin.check' call
      if (!(compare(endOffset, offset_1) > 0)) {
        throw IllegalStateException.u3('Check failed.');
      }
      ensureNotNull(segment_0);
      var tmp_1 = segment_0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = convertToInt(subtract(startIndex, offset_1));
      var tmp_2 = Math.max(a_0, 0);
      var tmp0_2 = segment_0.i1();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_1 = convertToInt(subtract(endOffset, offset_1));
      var tmp$ret$8 = Math.min(tmp0_2, b_1);
      var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$8);
      if (!(idx_0 === -1)) {
        return add(offset_1, fromInt(idx_0));
      }
      var tmp0_3 = offset_1;
      // Inline function 'kotlin.Long.plus' call
      var other_0 = segment_0.i1();
      offset_1 = add(tmp0_3, fromInt(other_0));
      segment_0 = segment_0.fr_1;
    }
     while (!(segment_0 == null) && compare(offset_1, endOffset) < 0);
    return new Long(-1, -1);
  } else {
    var s_0 = _this__u8e3s4.oq_1;
    var offset_2 = new Long(0, 0);
    $l$loop_0: while (!(s_0 == null)) {
      var tmp0_4 = offset_2;
      // Inline function 'kotlin.Long.plus' call
      var other_1 = s_0.cr_1 - s_0.br_1 | 0;
      var nextOffset = add(tmp0_4, fromInt(other_1));
      if (compare(nextOffset, startIndex) > 0)
        break $l$loop_0;
      s_0 = s_0.fr_1;
      offset_2 = nextOffset;
    }
    var tmp0_5 = s_0;
    var o_1 = offset_2;
    if (equalsLong(o_1, new Long(-1, -1))) {
      return new Long(-1, -1);
    }
    var segment_1 = tmp0_5;
    var offset_3 = o_1;
    do {
      // Inline function 'kotlin.check' call
      if (!(compare(endOffset, offset_3) > 0)) {
        throw IllegalStateException.u3('Check failed.');
      }
      ensureNotNull(segment_1);
      var tmp_3 = segment_1;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_1 = convertToInt(subtract(startIndex, offset_3));
      var tmp_4 = Math.max(a_1, 0);
      var tmp0_6 = segment_1.i1();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_2 = convertToInt(subtract(endOffset, offset_3));
      var tmp$ret$13 = Math.min(tmp0_6, b_2);
      var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$13);
      if (!(idx_1 === -1)) {
        return add(offset_3, fromInt(idx_1));
      }
      var tmp0_7 = offset_3;
      // Inline function 'kotlin.Long.plus' call
      var other_2 = segment_1.i1();
      offset_3 = add(tmp0_7, fromInt(other_2));
      segment_1 = segment_1.fr_1;
    }
     while (!(segment_1 == null) && compare(offset_3, endOffset) < 0);
    return new Long(-1, -1);
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.nq(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  _this__u8e3s4.br_1 = 0;
  _this__u8e3s4.cr_1 = 0;
  _this__u8e3s4.dr_1 = null;
  _this__u8e3s4.er_1 = false;
  _this__u8e3s4.fr_1 = null;
  _this__u8e3s4.gr_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.i1() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.i1() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.u(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.i1() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.u(toString(message_0));
  }
  var p = _this__u8e3s4.br_1;
  var data = _this__u8e3s4.mt(true);
  var inductionVariable = startOffset;
  if (inductionVariable < endOffset)
    do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (data[p + idx | 0] === byte) {
        return idx;
      }
    }
     while (inductionVariable < endOffset);
  return -1;
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(compare(byteCount_0, new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.u(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
  endIndex = endIndex === VOID ? new Long(-1, 2147483647) : endIndex;
  // Inline function 'kotlin.require' call
  if (!(compare(new Long(0, 0), startIndex) <= 0 ? compare(startIndex, endIndex) <= 0 : false)) {
    var tmp;
    if (compare(endIndex, new Long(0, 0)) < 0) {
      tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
    } else {
      tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
    }
    var message = tmp;
    throw IllegalArgumentException.u(toString(message));
  }
  if (equalsLong(startIndex, endIndex))
    return new Long(-1, -1);
  var offset = startIndex;
  $l$loop: while (true) {
    var tmp_0;
    if (compare(offset, endIndex) < 0) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = offset;
      var tmp$ret$2 = add(this_0, fromInt(1));
      tmp_0 = _this__u8e3s4.yq(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.vq();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.vq().i1();
    var tmp$ret$3 = compare(endIndex, b) <= 0 ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!equalsLong(idx, new Long(-1, -1))) {
      return idx;
    }
    offset = _this__u8e3s4.vq().i1();
  }
  return new Long(-1, -1);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (compare(_this__u8e3s4.vq().i1(), new Long(2147483647, 0)) < 0 && _this__u8e3s4.yq(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(compare(_this__u8e3s4.vq().i1(), new Long(2147483647, 0)) < 0)) {
      var message = "Can't create an array of size " + _this__u8e3s4.vq().i1().toString();
      throw IllegalStateException.u3(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.vq().i1());
  } else {
    _this__u8e3s4.xq(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.vq(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.ur(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.uq('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4) {
  return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.i1());
}
function readString_0(_this__u8e3s4) {
  _this__u8e3s4.yq(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.vq(), _this__u8e3s4.vq().i1());
}
function readString_1(_this__u8e3s4, byteCount) {
  _this__u8e3s4.xq(byteCount);
  return commonReadUtf8(_this__u8e3s4.vq(), byteCount);
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.vq();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.bs(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.gs() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.ut(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.ut(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.cr_1 = tail.cr_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.qq_1;
          tmp.qq_1 = add(this_3, fromInt(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.gs() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.gs();
          throw IllegalStateException.u3(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.cr_1 = tail.cr_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.qq_1;
          tmp_0.qq_1 = add(this_4, fromInt(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.us();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.bs(2);
        get_SegmentWriteContextImpl().tt(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.cr_1 = tail_0.cr_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.qq_1;
          tmp_1.qq_1 = add(this_5, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.gs() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.gs();
          throw IllegalStateException.u3(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.cr_1 = tail_0.cr_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.qq_1;
          tmp_2.qq_1 = add(this_6, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.us();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.bs(3);
        get_SegmentWriteContextImpl().st(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.cr_1 = tail_1.cr_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.qq_1;
          tmp_3.qq_1 = add(this_7, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.gs() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.gs();
          throw IllegalStateException.u3(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.cr_1 = tail_1.cr_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.qq_1;
          tmp_4.qq_1 = add(this_8, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.us();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$26 = Char__toInt_impl_vasixd(this_10);
        this_0.os(toByte(tmp$ret$26));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.bs(4);
          get_SegmentWriteContextImpl().rt(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.cr_1 = tail_2.cr_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.qq_1;
            tmp_6.qq_1 = add(this_11, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.gs() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.gs();
            throw IllegalStateException.u3(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.cr_1 = tail_2.cr_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.qq_1;
            tmp_7.qq_1 = add(this_12, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.us();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.lr();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (equalsLong(byteCount, new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.oq_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (compare(fromInt(curr.i1()), byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.mt(true);
      var tmp2 = curr.br_1;
      var tmp0_0 = curr.cr_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$0 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$0);
      _this__u8e3s4.tr(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.u3(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.xc('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$5 = 2;
        }
        index = tmp + tmp$ret$5 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$19;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$19 = 1;
                break $l$block_4;
              } else {
                tmp$ret$19 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$19 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$19 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$19 = 3;
          }
          index = tmp_0 + tmp$ret$19 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$41;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$41 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$41 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$41 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$41 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$41 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$41 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$41 = 4;
            }
            index = tmp_2 + tmp$ret$41 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.wt_1);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.tq_1);
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
protoOf(Buffer).is = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException.xt);
initMetadataForClass(EOFException, 'EOFException', EOFException.au);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  Buffer as Buffergs925ekssbch,
  EOFException as EOFExceptionh831u25jcq9n,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  indexOf_1 as indexOf29nspdgx2e3ap,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString_0 as readString2nvggcfaijfhd,
  readString_1 as readString3v6duspiz33tv,
  readString as readStringo8i62qxt5m4m,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
