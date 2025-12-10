import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3jjcu7fygcopr as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import {
  NullBody_instance2i6w0hfghwfg0 as NullBody_instance,
  HttpHeaders_getInstanceelogg8fjd54u as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
} from './ktor-ktor-http.mjs';
import {
  Charsets_getInstanceqs70pvl4noow as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  static c3b(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.mc(message, cause);
    captureStack($this, $this.b3b_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  static g3b(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.c3b(message, cause);
    captureStack($this, $this.f3b_1);
    return $this;
  }
}
class Configuration {}
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.h3b(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.h3b.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.s3b_1 = function_0;
  }
  d1a(value, $completion) {
    return this.s3b_1(value, $completion);
  }
  m3() {
    return this.s3b_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m3(), other.m3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.m3());
  }
}
class deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $body) {
    this.j3b_1 = $$this$unsafeFlow;
    this.k3b_1 = $charset;
    this.l3b_1 = $typeInfo;
    this.m3b_1 = $body;
  }
  t3b(value, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, value), $completion);
  }
  ic(p1, $completion) {
    return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  }
}
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.o3b_1 = $this;
    this.p3b_1 = $charset;
    this.q3b_1 = $typeInfo;
    this.r3b_1 = $body;
  }
  e1a(collector, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_collect__dlomyy.bind(VOID, this, collector), $completion);
  }
  f1a(collector, $completion) {
    return this.e1a(collector, $completion);
  }
}
class deserialize$slambda {
  constructor($body) {
    this.u3b_1 = $body;
  }
  t3b(it, $completion) {
    return !(it == null) || this.u3b_1.f1g();
  }
  ic(p1, $completion) {
    return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  }
}
//endregion
function *_generator_deserialize__why6p7(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new deserialize$$inlined$map$1(this_0, charset, typeInfo, body);
  var tmp_0 = firstOrNull(tmp, deserialize$slambda_0(body), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  var result = tmp_0;
  var tmp_1;
  if (!(result == null)) {
    tmp_1 = result;
  } else {
    if (!body.f1g()) {
      tmp_1 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.z29_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fe()) === true) {
        tmp_1 = NullBody_instance;
      } else {
        throw ContentConvertException.c3b('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_1;
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_deserialize__why6p7.bind(VOID, _this__u8e3s4, body, typeInfo, charset), $completion);
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().h1i_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().h1i_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.a25(HttpHeaders_getInstance().i2d_1)).d1();
  while (_iterator__ex2g4s.e1()) {
    var charset = _iterator__ex2g4s.f1().si();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function *_generator_invoke__zhh2q8($this, value, $completion) {
  var $this$transform = $this.j3b_1;
  var tmp = value.n3b($this.k3b_1, $this.l3b_1, $this.m3b_1, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  var tmp$ret$0 = tmp;
  var tmp_0 = $this$transform.d1a(tmp$ret$0, $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function *_generator_collect__dlomyy($this, collector, $completion) {
  var tmp = deserialize$o$collect$slambda_0(collector, $this.p3b_1, $this.q3b_1, $this.r3b_1);
  var tmp_0 = $this.o3b_1.f1a(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body);
  var l = (value, $completion) => i.t3b(value, $completion);
  l.$arity = 1;
  return l;
}
function deserialize$slambda_0($body) {
  var i = new deserialize$slambda($body);
  var l = (it, $completion) => i.t3b(it, $completion);
  l.$arity = 1;
  return l;
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  deserialize as deserialize3kqe4vxpbxz1,
  register$default as register$default3vdkjcc7m2cj0,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
