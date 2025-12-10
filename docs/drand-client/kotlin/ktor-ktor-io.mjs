import {
  Companion_instance2oawqq9qiaris as Companion_instance,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  _Result___init__impl__xyqfz83hut4nr3dfvi3 as _Result___init__impl__xyqfz8,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt1lka3ktyu79a4 as fromInt,
  compare2uud5j30pw5xc as compare,
  numberToLong345n6tb1n1i71 as numberToLong,
  add85si75olwt6n as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  isInterface3d6p8outrmvmk as isInterface,
  returnIfSuspendedqak8u4r448cu as returnIfSuspended,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  Long2qws0ah9gnpki as Long,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  convertToIntofdoxh9bstof as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  captureStack1fzi4aczwc4hg as captureStack,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  equalsLong28bsrfhwvd686 as equalsLong,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString_1,
  subtract16cg4lfi29fq9 as subtract,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  EmptyCoroutineContext_getInstance31fow51ayy30t as EmptyCoroutineContext_getInstance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  CancellationException3b36o9qz53rgr as CancellationException,
  ArrayList3it5z8td81qkl as ArrayList,
  listOf1jh22dvmctj1r as listOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  Dispatchers_getInstanceitgtkvqfcnx3 as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  IOException1wyutdmfe71nu as IOException,
  indexOf29nspdgx2e3ap as indexOf,
  EOFExceptionh831u25jcq9n as EOFException,
  readStringo8i62qxt5m4m as readString,
  readByteString2hnsbql6t4ads as readByteString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
  readString3v6duspiz33tv as readString_1,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.m1e_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.n1e_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
}
class Empty {
  toString() {
    return 'Empty';
  }
  hashCode() {
    return -231472095;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  }
}
class Closed {
  constructor(cause) {
    this.o1e_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.o1e_1) + ')';
  }
  hashCode() {
    return this.o1e_1 == null ? 0 : hashCode(this.o1e_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.o1e_1, other.o1e_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.q1e().cb(Companion_getInstance().n1e_1);
}
function resume_0(throwable) {
  var tmp = this.q1e();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$2);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.cb(tmp1_elvis_lhs == null ? Companion_getInstance().n1e_1 : tmp1_elvis_lhs.bo_1);
}
class Read {
  constructor(continuation) {
    this.u1e_1 = continuation;
    this.v1e_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.u1e_1), 16));
      stackTraceToString(this_0);
      tmp.v1e_1 = this_0;
    }
  }
  q1e() {
    return this.u1e_1;
  }
  p1e() {
    return this.v1e_1;
  }
  r1e() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.w1e_1 = continuation;
    this.x1e_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.w1e_1), 16));
      stackTraceToString(this_0);
      tmp.x1e_1 = this_0;
    }
  }
  q1e() {
    return this.w1e_1;
  }
  p1e() {
    return this.x1e_1;
  }
  r1e() {
    return 'write';
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.g1g(min, $completion) : $super.g1g.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.y1e_1 = autoFlush;
    this.z1e_1 = new Buffer();
    this.a1f_1 = 0;
    this.b1f_1 = new Object();
    this.c1f_1 = atomic$ref$1(Empty_instance);
    this.d1f_1 = new Buffer();
    this.e1f_1 = new Buffer();
    this.f1f_1 = atomic$ref$1(null);
  }
  x1f() {
    return this.y1e_1;
  }
  y1f() {
    var tmp0_safe_receiver = this.f1f_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1g(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.d1f_1.wq()) {
      moveFlushToReadBuffer(this);
    }
    return this.d1f_1;
  }
  b1g() {
    if (this.c1g()) {
      var tmp0_safe_receiver = this.f1f_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.a1g(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw ClosedWriteChannelException.w1f();
    }
    return this.e1f_1;
  }
  d1g() {
    var tmp0_safe_receiver = this.f1f_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1g();
  }
  c1g() {
    return !(this.f1f_1.kotlinx$atomicfu$value == null);
  }
  f1g() {
    return !(this.d1g() == null) || (this.c1g() && this.a1f_1 === 0 && this.d1f_1.wq());
  }
  g1g(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb.bind(VOID, this, min), $completion);
  }
  m1f($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flush__owbk1c.bind(VOID, this), $completion);
  }
  l1f() {
    if (this.e1f_1.wq())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.b1f_1;
    var count = convertToInt(this.e1f_1.i1());
    this.z1e_1.ns(this.e1f_1);
    this.a1f_1 = this.a1f_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.c1f_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.c1f_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.s1e();
    }
  }
  z4() {
    this.l1f();
    if (!this.f1f_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  i1g($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flushAndClose__wsi7db.bind(VOID, this), $completion);
  }
  j1g(cause) {
    if (!(this.f1f_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.f1f_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.e1g();
    closeSlot(this, wrappedCause);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static k1f(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ec('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.j1f_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.k1g_1 = channel;
    this.l1g_1 = matchString;
    this.m1g_1 = writeChannel;
    this.n1g_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.l1g_1.i1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.u(toString_1(message));
    }
    this.o1g_1 = this.k1g_1.y1f();
    this.p1g_1 = buildPartialMatchTable(this);
    this.q1g_1 = new Buffer();
    this.r1g_1 = new Long(0, 0);
    this.s1g_1 = 0;
  }
  t1g(ignoreMissing, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_findNext__stdkn8.bind(VOID, this, ignoreMissing), $completion);
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.u1g_1 = null;
    this.v1g_1 = new Buffer();
  }
  d1g() {
    return this.u1g_1;
  }
  f1g() {
    return true;
  }
  y1f() {
    return this.v1g_1;
  }
  g1g(min, $completion) {
    return false;
  }
  j1g(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.w1g_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.h1h_1 = channel;
    this.i1h_1 = job;
  }
  j10() {
    return this.i1h_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.j1h_1 = channel;
    this.k1h_1 = coroutineContext;
  }
  ou() {
    return this.k1h_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.l1h_1 = EmptyCoroutineContext_getInstance();
  }
  ab() {
    return this.l1h_1;
  }
  bb(result) {
    return Unit_instance;
  }
  cb(result) {
    return this.bb(result);
  }
}
class ByteWriteChannel$flushAndClose$ref {
  constructor(p0) {
    this.m1h_1 = p0;
  }
  kc($completion) {
    return this.m1h_1.i1g($completion);
  }
}
class writer$slambda {
  constructor($block, $channel) {
    this.n1h_1 = $block;
    this.o1h_1 = $channel;
  }
  p1h($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  ic(p1, $completion) {
    return this.p1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CloseToken {
  constructor(origin) {
    this.z1f_1 = origin;
  }
  u1h(wrap) {
    var tmp0_subject = this.z1f_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.z1f_1.h11();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.dc(this.z1f_1.message, this.z1f_1);
        } else {
          tmp = wrap(this.z1f_1);
        }
      }
    }
    return tmp;
  }
  e1g(wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.u1h(wrap) : $super.u1h.call(this, wrap);
  }
  a1g(wrap) {
    var tmp0_safe_receiver = this.u1h(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  }
}
class CountedByteReadChannel {
  constructor(delegate) {
    this.v1h_1 = delegate;
    this.w1h_1 = new Buffer();
    this.x1h_1 = new Long(0, 0);
    this.y1h_1 = new Long(0, 0);
  }
  z1h() {
    updateConsumed(this);
    return this.y1h_1;
  }
  d1g() {
    return this.v1h_1.d1g();
  }
  f1g() {
    return this.w1h_1.wq() && this.v1h_1.f1g();
  }
  y1f() {
    transferFromDelegate(this);
    return this.w1h_1;
  }
  g1g(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb_0.bind(VOID, this, min), $completion);
  }
  j1g(cause) {
    this.v1h_1.j1g(cause);
    this.w1h_1.z4();
  }
}
class ClosedByteChannelException extends IOException {
  static t1h(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.zt(cause == null ? null : cause.message, cause);
    captureStack($this, $this.s1h_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static r1f(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.t1h(cause);
    captureStack($this, $this.q1f_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static w1f(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.t1h(cause);
    captureStack($this, $this.v1f_1);
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    this.x1g_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.y1g_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.z1g_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.a1h_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.b1h_1 = listOf([new LineEndingMode(this.x1g_1), new LineEndingMode(this.y1g_1), new LineEndingMode(this.z1g_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_1();
    this.a1i_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.a1i_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.a1i_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.a1i_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.b1i_1 = source;
    this.c1i_1 = null;
  }
  d1g() {
    var tmp0_safe_receiver = this.c1i_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1g();
  }
  f1g() {
    return this.b1i_1.wq();
  }
  y1f() {
    var tmp0_safe_receiver = this.d1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.b1i_1.vq();
  }
  g1g(min, $completion) {
    var tmp0_safe_receiver = this.d1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.b1i_1.yq(fromInt(min));
  }
  j1g(cause) {
    if (!(this.c1i_1 == null))
      return Unit_instance;
    this.b1i_1.z4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.c1i_1 = new CloseToken(IOException.zt(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static g1i(message) {
    var $this = this.yt(message);
    captureStack($this, $this.f1i_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static g1h(message) {
    var $this = this.g1i(message);
    captureStack($this, $this.f1h_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.tx();
}
class DefaultPool {
  constructor(capacity) {
    this.q1i_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.q1i_1;
    tmp.r1i_1 = Array(size);
    this.s1i_1 = 0;
  }
  t1i(instance) {
  }
  u1i(instance) {
    return instance;
  }
  v1i(instance) {
  }
  w1i() {
    if (this.s1i_1 === 0)
      return this.p1i();
    this.s1i_1 = this.s1i_1 - 1 | 0;
    var idx = this.s1i_1;
    var tmp = this.r1i_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.r1i_1[idx] = null;
    return this.u1i(instance);
  }
  x1i(instance) {
    this.v1i(instance);
    if (this.s1i_1 === this.q1i_1) {
      this.t1i(instance);
    } else {
      var _unary__edvuaz = this.s1i_1;
      this.s1i_1 = _unary__edvuaz + 1 | 0;
      this.r1i_1[_unary__edvuaz] = instance;
    }
  }
  tx() {
    var inductionVariable = 0;
    var last = this.s1i_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.r1i_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.r1i_1[i] = null;
        this.t1i(instance);
      }
       while (inductionVariable < last);
    this.s1i_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  p1i() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  x1i(instance) {
    return Unit_instance;
  }
  tx() {
    return Unit_instance;
  }
}
class Companion_2 {
  y1i(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().h1i_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().i1i_1;
    }
    throw IllegalArgumentException.u('Charset ' + name + ' is not supported');
  }
  z1i(charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            var it = replace_0(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  }
}
class Charset {
  constructor(_name) {
    this.j1i_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.j1i_1 === other.j1i_1;
  }
  hashCode() {
    return getStringHashCode(this.j1i_1);
  }
  toString() {
    return this.j1i_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.h1i_1 = new CharsetImpl('UTF-8');
    this.i1i_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.a1j_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.b1j_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  l1i() {
    return new CharsetEncoderImpl(this);
  }
  k1i() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.f1j_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.f1j_1.toString() + ')';
  }
  hashCode() {
    return this.f1j_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.f1j_1.equals(other.f1j_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.h1j_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.h1j_1.toString() + ')';
  }
  hashCode() {
    return this.h1j_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.h1j_1.equals(other.h1j_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.i1j_1 = $this_toKtor;
  }
  c1j(buffer) {
    return this.i1j_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.j1j_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().m2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.u3(toString_1(message));
    }
  }
  c1j(buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.j1j_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.u3(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.os(toByte(point >> 8));
        }
        builder.os(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function *_generator_awaitContent__vf28kb($this, min, $completion) {
  rethrowCloseCauseIfNeeded($this);
  if (compare($this.d1f_1.i1(), fromInt(min)) >= 0)
    return true;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while (compare(add(numberToLong($this.a1f_1), $this.d1f_1.i1()), fromInt(min)) < 0 && $this.f1f_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.az();
    var tmp2 = new Read(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.c1f_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.c1f_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.s1e();
          break $l$block_0;
        }
      }
      if (previous instanceof Read) {
        previous.t1e(ConcurrentIOException.k1f(tmp2.r1e(), previous.p1e()));
      } else {
        if (isInterface(previous, Task)) {
          previous.s1e();
        } else {
          if (previous instanceof Closed) {
            tmp2.t1e(previous.o1e_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!(compare(add(numberToLong($this.a1f_1), $this.d1f_1.i1()), fromInt(min)) < 0 && $this.f1f_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.c1f_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Read) {
          tmp = $this.c1f_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.s1e();
        }
      }
    }
    var tmp$ret$6 = cancellable.iz();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  if (compare($this.d1f_1.i1(), new Long(1048576, 0)) < 0) {
    moveFlushToReadBuffer($this);
  }
  return compare($this.d1f_1.i1(), fromInt(min)) >= 0;
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.b1f_1;
  $this.z1e_1.zr($this.d1f_1);
  $this.a1f_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.c1f_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.c1f_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.s1e();
  }
}
function *_generator_flush__owbk1c($this, $completion) {
  rethrowCloseCauseIfNeeded($this);
  $this.l1f();
  if ($this.a1f_1 < 1048576)
    return Unit_instance;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while ($this.a1f_1 >= 1048576 && $this.f1f_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.az();
    var tmp2 = new Write(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.c1f_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.c1f_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.s1e();
          break $l$block_0;
        }
      }
      if (previous instanceof Write) {
        previous.t1e(ConcurrentIOException.k1f(tmp2.r1e(), previous.p1e()));
      } else {
        if (isInterface(previous, Task)) {
          previous.s1e();
        } else {
          if (previous instanceof Closed) {
            tmp2.t1e(previous.o1e_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!($this.a1f_1 >= 1048576 && $this.f1f_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.c1f_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Write) {
          tmp = $this.c1f_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.s1e();
        }
      }
    }
    var tmp$ret$6 = cancellable.iz();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  return Unit_instance;
}
function *_generator_flushAndClose__wsi7db($this, $completion) {
  // Inline function 'kotlin.runCatching' call
  var tmp;
  try {
    var tmp_0 = $this.m1f($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.Companion.success' call
    tmp = _Result___init__impl__xyqfz8(Unit_instance);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      // Inline function 'kotlin.Companion.failure' call
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  if (!$this.f1f_1.atomicfu$compareAndSet(null, get_CLOSED()))
    return Unit_instance;
  closeSlot($this, null);
  return Unit_instance;
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().m1e_1;
  var continuation = $this.c1f_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.t1e(cause);
  }
}
function ClosedReadChannelException$_init_$ref_ix0089() {
  var l = (p0) => ClosedReadChannelException.r1f(p0);
  l.callableName = '<init>';
  return l;
}
function ClosedWriteChannelException$_init_$ref_ef15ty() {
  var l = (p0) => ClosedWriteChannelException.w1f(p0);
  l.callableName = '<init>';
  return l;
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.fs(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function *_generator_findNext__stdkn8($this, ignoreMissing, $completion) {
  $this.r1g_1 = new Long(0, 0);
  $l$loop: while (true) {
    var tmp;
    if (!$this.o1g_1.wq()) {
      tmp = true;
    } else {
      var tmp_0 = $this.k1g_1.h1g(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var tmp_1 = advanceToNextPotentialMatch($this, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
    var tmp_2 = checkFullMatch($this, $completion);
    if (tmp_2 === get_COROUTINE_SUSPENDED())
      tmp_2 = yield tmp_2;
    if (tmp_2) {
      return $this.r1g_1;
    }
  }
  if (!ignoreMissing) {
    throw IOException.yt('Expected "' + toSingleLineString($this, $this.l1g_1) + '" but encountered end of input');
  }
  $this.r1g_1 = add($this.r1g_1, $this.q1g_1.zr($this.m1g_1.b1g()));
  var tmp_3 = $this.m1g_1.m1f($completion);
  if (tmp_3 === get_COROUTINE_SUSPENDED())
    tmp_3 = yield tmp_3;
  return $this.r1g_1;
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.l1g_1.i1());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.l1g_1.i1();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.l1g_1.j1(i) === $this.l1g_1.j1(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.l1g_1.j1(i) === $this.l1g_1.j1(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *_generator_advanceToNextPotentialMatch__2ypy7x($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.o1g_1.wq()) {
      tmp = true;
    } else {
      var tmp_0 = $this.k1g_1.h1g(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var nextMatch = indexOf($this.o1g_1, $this.l1g_1.j1(0));
    if (equalsLong(nextMatch, new Long(-1, -1))) {
      var tmp_1 = $this.o1g_1;
      checkBounds($this, (tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE()).i1());
      $this.r1g_1 = add($this.r1g_1, $this.o1g_1.zr($this.m1g_1.b1g()));
      var tmp_2 = flushIfNeeded($this.m1g_1, $completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
    } else {
      checkBounds($this, nextMatch);
      var tmp_3 = $this;
      var tmp_4 = $this.r1g_1;
      var tmp_5 = $this.m1g_1.b1g();
      tmp_3.r1g_1 = add(tmp_4, $this.o1g_1.wr(tmp_5 instanceof Buffer ? tmp_5 : THROW_CCE(), nextMatch));
      var tmp_6 = flushIfNeeded($this.m1g_1, $completion);
      if (tmp_6 === get_COROUTINE_SUSPENDED())
        tmp_6 = yield tmp_6;
      return Unit_instance;
    }
  }
  return Unit_instance;
}
function advanceToNextPotentialMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_advanceToNextPotentialMatch__2ypy7x.bind(VOID, $this), $completion);
}
function *_generator_checkFullMatch__turpx6($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.o1g_1.wq()) {
      tmp = true;
    } else {
      var tmp_0 = $this.k1g_1.h1g(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var byte = $this.o1g_1.zq();
    if ($this.s1g_1 > 0 && !(byte === $this.l1g_1.j1($this.s1g_1))) {
      var oldMatchIndex = $this.s1g_1;
      while ($this.s1g_1 > 0 && !(byte === $this.l1g_1.j1($this.s1g_1))) {
        $this.s1g_1 = $this.p1g_1[$this.s1g_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.s1g_1 | 0);
      checkBounds($this, retained);
      var tmp_1 = $this;
      var tmp_2 = $this.r1g_1;
      var tmp_3 = $this.m1g_1.b1g();
      tmp_1.r1g_1 = add(tmp_2, $this.q1g_1.wr(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), retained));
      if ($this.s1g_1 === 0 && !(byte === $this.l1g_1.j1($this.s1g_1))) {
        var tmp_4 = writeByte($this.m1g_1, byte, $completion);
        if (tmp_4 === get_COROUTINE_SUSPENDED())
          tmp_4 = yield tmp_4;
        var _unary__edvuaz = $this.r1g_1;
        $this.r1g_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.s1g_1 = $this.s1g_1 + 1 | 0;
    if ($this.s1g_1 === $this.l1g_1.i1()) {
      return true;
    }
    $this.q1g_1.os(byte);
  }
  return false;
}
function checkFullMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_checkFullMatch__turpx6.bind(VOID, $this), $completion);
}
function checkBounds($this, extra) {
  if (compare(add($this.r1g_1, extra), $this.n1g_1) > 0) {
    throw IOException.yt('Limit of ' + $this.n1g_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.l1g_1) + '"'));
  }
}
function toSingleLineString($this, _this__u8e3s4) {
  return replace(decodeToString_0(_this__u8e3s4), '\n', '\\n');
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.j1g(IOException.yt('Channel was cancelled'));
}
function *_generator_readRemaining__kd4xx0(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.f1g()) {
    result.ns(_this__u8e3s4.y1f());
    var tmp = _this__u8e3s4.h1g(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  rethrowCloseCauseIfNeeded_0(_this__u8e3s4);
  return result.vq();
}
function readRemaining(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readRemaining__kd4xx0.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_discard__skcevq(_this__u8e3s4, max, $completion) {
  max = max === VOID ? new Long(-1, 2147483647) : max;
  var remaining = max;
  while (compare(remaining, new Long(0, 0)) > 0 && !_this__u8e3s4.f1g()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      var tmp = _this__u8e3s4.h1g(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.y1f());
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    discard_0(_this__u8e3s4.y1f(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? new Long(-1, 2147483647) : max;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_discard__skcevq.bind(VOID, _this__u8e3s4, max), $completion);
}
function *_generator_readAvailable__ki7w73(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  if (_this__u8e3s4.f1g())
    return -1;
  if (_this__u8e3s4.y1f().wq()) {
    var tmp = _this__u8e3s4.h1g(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.f1g())
    return -1;
  return readAvailable_0(_this__u8e3s4.y1f(), buffer, offset, length);
}
function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readAvailable__ki7w73.bind(VOID, _this__u8e3s4, buffer, offset, length), $completion);
}
function *_generator_toByteArray__v3q9dq(_this__u8e3s4, $completion) {
  var tmp = readBuffer(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return readBytes(tmp);
}
function toByteArray(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_toByteArray__v3q9dq.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_copyTo__iu4794(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.f1g() && compare(remaining, new Long(0, 0)) > 0) {
      if (_this__u8e3s4.y1f().wq()) {
        var tmp = _this__u8e3s4.h1g(VOID, $completion);
        if (tmp === get_COROUTINE_SUSPENDED())
          tmp = yield tmp;
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.y1f());
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      _this__u8e3s4.y1f().yr(channel.b1g(), count);
      remaining = subtract(remaining, count);
      var tmp_0 = channel.m1f($completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.j1g(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.m1f($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return subtract(limit, remaining);
}
function copyTo(_this__u8e3s4, channel, limit, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794.bind(VOID, _this__u8e3s4, channel, limit), $completion);
}
function *_generator_skipIfFound__8uzshe(_this__u8e3s4, byteString, $completion) {
  var tmp = peek(_this__u8e3s4, byteString.i1(), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (equals(tmp, byteString)) {
    var tmp_0 = discard(_this__u8e3s4, fromInt(byteString.i1()), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    return true;
  }
  return false;
}
function skipIfFound(_this__u8e3s4, byteString, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_skipIfFound__8uzshe.bind(VOID, _this__u8e3s4, byteString), $completion);
}
function *_generator_readPacket__axk2oa(_this__u8e3s4, packet, $completion) {
  var result = new Buffer();
  $l$loop: while (compare(result.i1(), fromInt(packet)) < 0) {
    if (_this__u8e3s4.y1f().wq()) {
      var tmp = _this__u8e3s4.h1g(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    if (_this__u8e3s4.f1g())
      break $l$loop;
    if (compare(get_remaining(_this__u8e3s4.y1f()), subtract(numberToLong(packet), result.i1())) > 0) {
      _this__u8e3s4.y1f().yr(result, subtract(numberToLong(packet), result.i1()));
    } else {
      _this__u8e3s4.y1f().zr(result);
    }
  }
  if (compare(result.i1(), fromInt(packet)) < 0) {
    throw EOFException.uq('Not enough data available, required ' + packet + ' bytes but only ' + result.i1().toString() + ' available');
  }
  return result;
}
function readPacket(_this__u8e3s4, packet, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readPacket__axk2oa.bind(VOID, _this__u8e3s4, packet), $completion);
}
function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? new Long(-1, 2147483647) : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).t1g(ignoreMissing, $completion);
}
function *_generator_readUTF8LineTo__bg1rci(_this__u8e3s4, out, max, lineEnding, $completion) {
  max = max === VOID ? 2147483647 : max;
  lineEnding = lineEnding === VOID ? Companion_getInstance_1().a1h_1 : lineEnding;
  if (_this__u8e3s4.y1f().wq()) {
    var tmp = _this__u8e3s4.h1g(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.f1g())
    return false;
  // Inline function 'kotlin.use' call
  var this_0 = new Buffer();
  var exception = null;
  try {
    while (!_this__u8e3s4.f1g()) {
      while (!_this__u8e3s4.y1f().wq()) {
        var b = _this__u8e3s4.y1f().zq();
        if (b === 13) {
          if (_this__u8e3s4.y1f().wq()) {
            var tmp_0 = _this__u8e3s4.h1g(VOID, $completion);
            if (tmp_0 === get_COROUTINE_SUSPENDED())
              tmp_0 = yield tmp_0;
          }
          if (_this__u8e3s4.y1f().vq().rr(new Long(0, 0)) === 10) {
            readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().z1g_1);
            discard_0(_this__u8e3s4.y1f(), new Long(1, 0));
          } else {
            readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().x1g_1);
          }
          out.c1(readString(this_0));
          return true;
        } else if (b === 10) {
          readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().y1g_1);
          out.c1(readString(this_0));
          return true;
        } else {
          this_0.os(b);
        }
      }
      if (compare(this_0.i1(), fromInt(max)) >= 0) {
        throw TooLongLineException.g1h('Line exceeds limit of ' + max + ' characters');
      }
      var tmp_1 = _this__u8e3s4.h1g(VOID, $completion);
      if (tmp_1 === get_COROUTINE_SUSPENDED())
        tmp_1 = yield tmp_1;
    }
    // Inline function 'kotlin.also' call
    var this_1 = compare(this_0.i1(), new Long(0, 0)) > 0;
    if (this_1) {
      out.c1(readString(this_0));
    }
    return this_1;
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
      exception = e;
      throw e;
    } else {
      throw $p;
    }
  }
  finally {
    closeFinally(this_0, exception);
  }
}
function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
  max = max === VOID ? 2147483647 : max;
  lineEnding = lineEnding === VOID ? Companion_getInstance_1().a1h_1 : lineEnding;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readUTF8LineTo__bg1rci.bind(VOID, _this__u8e3s4, out, max, lineEnding), $completion);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.d1g();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.d1g();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.y1f().vq().i1());
}
function *_generator_readBuffer__s1sw5u(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.f1g()) {
    result.ns(_this__u8e3s4.y1f());
    var tmp = _this__u8e3s4.h1g(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  var tmp0_safe_receiver = _this__u8e3s4.d1g();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function readBuffer(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readBuffer__s1sw5u.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_peek__qjkkqb(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.f1g())
    return null;
  var tmp = _this__u8e3s4.g1g(count, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (!tmp)
    return null;
  return readByteString(_this__u8e3s4.y1f().as(), count);
}
function peek(_this__u8e3s4, count, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_peek__qjkkqb.bind(VOID, _this__u8e3s4, count), $completion);
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.d1g();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function readUTF8LineTo$checkLineEndingAllowed($lineEnding, lineEndingToCheck) {
  if (!LineEndingMode__contains_impl_q5pr68($lineEnding, lineEndingToCheck)) {
    throw IOException.yt('Unexpected line ending ' + LineEndingMode__toString_impl_j4h76r(lineEndingToCheck) + ', while expected ' + LineEndingMode__toString_impl_j4h76r($lineEnding));
  }
}
function *_generator_flushIfNeeded__xji6le(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.x1f() || get_size(_this__u8e3s4.b1g()) >= 1048576) {
    var tmp = _this__u8e3s4.m1f($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_instance;
}
function flushIfNeeded(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_flushIfNeeded__xji6le.bind(VOID, _this__u8e3s4), $completion);
}
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function *_generator_writeFully__hb5mir(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.b1g().fs(value, startIndex, endIndex);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeFully__hb5mir.bind(VOID, _this__u8e3s4, value, startIndex, endIndex), $completion);
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.j1g(cause);
  }
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.j10().qv(block);
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel));
  this_0.qv(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *_generator_writeByte__k05tl9(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.b1g().os(value);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function writeByte(_this__u8e3s4, value, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeByte__k05tl9.bind(VOID, _this__u8e3s4, value), $completion);
}
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = new ByteWriteChannel$flushAndClose$ref(p0);
  var l = ($completion) => i.kc($completion);
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function *_generator_invoke__zhh2q8($this, $this$launch, $completion) {
  var nested = Job(get_job($this$launch.ou()));
  try {
    var tmp = $this.n1h_1(new WriterScope($this.o1h_1, $this$launch.ou().lj(nested)), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    nested.w10();
    if (get_job($this$launch.ou()).kv()) {
      $this.o1h_1.j1g(get_job($this$launch.ou()).nv());
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      cancel(nested, 'Exception thrown while writing to channel', cause);
      $this.o1h_1.j1g(cause);
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_0 = nested.uv($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      var tmp_2 = $this.o1h_1.i1g($completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
      // Inline function 'kotlin.Companion.success' call
      tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_1 = tmp_3;
    }
  }
  return Unit_instance;
}
function writer$slambda_0($block, $channel) {
  var i = new writer$slambda($block, $channel);
  var l = ($this$launch, $completion) => i.p1h($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.c1g()) {
      $channel.j1g(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
function ClosedByteChannelException$_init_$ref_yjp351() {
  var l = (p0) => ClosedByteChannelException.t1h(p0);
  l.callableName = '<init>';
  return l;
}
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function *_generator_awaitContent__vf28kb_0($this, min, $completion) {
  if (compare($this.y1f().i1(), fromInt(min)) >= 0) {
    return true;
  }
  var tmp = $this.v1h_1.g1g(min, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (tmp) {
    transferFromDelegate($this);
    return true;
  }
  return false;
}
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.w1h_1.ns($this.v1h_1.y1f());
  $this.x1h_1 = add($this.x1h_1, appended);
}
function updateConsumed($this) {
  $this.y1h_1 = add($this.y1h_1, subtract($this.x1h_1, $this.w1h_1.i1()));
  $this.x1h_1 = $this.w1h_1.i1();
}
function counted(_this__u8e3s4) {
  return new CountedByteReadChannel(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_0(_this__u8e3s4);
}
function _LineEndingMode___init__impl__jo5bul(mode) {
  return mode;
}
function _get_mode__dah3bc($this) {
  return $this;
}
function LineEndingMode__contains_impl_q5pr68($this, other) {
  return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
}
function LineEndingMode__plus_impl_ttpz2j($this, other) {
  return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
}
function LineEndingMode__toString_impl_j4h76r($this) {
  var tmp;
  if ($this === Companion_getInstance_1().x1g_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_1().y1g_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_1().z1g_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_1().b1h_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.n1();
    var _iterator__ex2g4s = tmp0.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      var it = element.a1i_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.b1(element);
      }
    }
    tmp = toString_1(destination);
  }
  return tmp;
}
var Companion_instance_2;
function Companion_getInstance_1() {
  if (Companion_instance_2 === VOID)
    new Companion_1();
  return Companion_instance_2;
}
function LineEndingMode__hashCode_impl_2mopm4($this) {
  return $this;
}
function LineEndingMode__equals_impl_qyr4nk($this, other) {
  if (!(other instanceof LineEndingMode))
    return false;
  if (!($this === other.a1i_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.vq().i1();
  var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.oa(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException.u3('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.wq();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.i1()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.fs(buffer, offset, offset + length | 0);
}
function BytePacketBuilder() {
  return new Buffer();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.vq().i1());
}
var ByteReadPacketEmpty;
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.vq().i1();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.wq() && block(_this__u8e3s4.vq())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? new Long(-1, 2147483647) : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.yq(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = compare(count, b) <= 0 ? count : b;
  _this__u8e3s4.vq().tr(countToDiscard);
  return countToDiscard;
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.ur(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().h1i_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().h1i_1)) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.vq().i1();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    return readString_1(_this__u8e3s4, count);
  }
  return decode(charset.k1i(), _this__u8e3s4, max);
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().h1i_1 : charset;
  if (charset.equals(Charsets_getInstance().h1i_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.l1i(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().h1i_1 : charset;
  if (charset === Charsets_getInstance().h1i_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.l1i(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
var Companion_instance_3;
function Companion_getInstance_2() {
  return Companion_instance_3;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.j1i_1;
}
function isSupported(_this__u8e3s4, name) {
  return Companion_instance_3.z1i(name);
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_3.y1i(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.vq().i1();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = compare(tmp0, b) <= 0 ? tmp0 : b;
  var tmp = readByteArray(input, convertToInt(count));
  var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
  var tmp_0;
  try {
    tmp_0 = decoder.c1j(array);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.g1i('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp_0;
  dst.c1(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.u(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().i1i_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().h1i_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.u(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.is(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.a1j_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.b1j_1;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function get_DEVELOPMENT_MODE() {
  return false;
}
function ioDispatcher() {
  return Dispatchers_getInstance().y14_1;
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.os(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.g1i('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
initMetadataForInterface(Task, 'Task');
protoOf(Read).s1e = resume;
protoOf(Read).t1e = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).s1e = resume;
protoOf(Write).t1e = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).h1g = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).h1g = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).h1g = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.t1h);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.r1f);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.w1f);
initMetadataForCompanion(Companion_1);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).h1g = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).z4 = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).z4 = close;
initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
initMetadataForCompanion(Companion_2);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl');
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl');
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl');
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_3 = new Companion_2();
//endregion
//region block: exports
export {
  copyTo as copyTo2vm7vz7rr51or,
  readAvailable as readAvailable22vc1bmbuj93x,
  readPacket as readPacket2q2gamtzwxjd1,
  readRemaining as readRemaining1x8kk1vq7p6gm,
  readUTF8LineTo as readUTF8LineTo3cgartetbq4tk,
  readUntil as readUntil2jtfemvkt7z1f,
  skipIfFound as skipIfFound1yms04v7e3tuk,
  toByteArray as toByteArrayafjflk7yznm4,
  writeFully as writeFully3gv1ab611t04k,
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2j1vdcj3ndf6qez,
  Charsets_getInstance as Charsets_getInstanceqs70pvl4noow,
  Companion_getInstance_0 as Companion_getInstance2ai11rhpust2a,
  Companion_getInstance_1 as Companion_getInstance2zbi981hww1p4,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  isSupported as isSupported2nf870ypy50et,
  get_name as get_name2f11g4r0d5pxp,
  canRead as canRead1guo8vbveth0f,
  discard_0 as discard3ugntd47xyll6,
  readText_0 as readText27783kyxjxi1g,
  get_remaining as get_remaining1lapv95kcmm0y,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  DefaultPool as DefaultPool2gb1fm4epwgu9,
  NoPoolImpl as NoPoolImplgos9n8jphzjp,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel_0 as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel as ByteReadChannel2wzou76jce72d,
  WriterScope as WriterScope3b0bo1enaee6b,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  counted as counted3iniv3aql3f9n,
  invokeOnCompletion as invokeOnCompletion1ziuxzoag0iwj,
  ioDispatcher as ioDispatcher3b9pa3x0duop,
  readText as readText3frapgncbqrcg,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
