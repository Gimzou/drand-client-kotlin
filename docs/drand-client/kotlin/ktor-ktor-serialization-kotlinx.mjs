import {
  ArrayList3it5z8td81qkl as ArrayList,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  HashSet2dzve9y63nf0v as HashSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3jjcu7fygcopr as firstOrNull_0,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import {
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  KSerializerzf77vz1967fq as KSerializer,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  readRemaining1x8kk1vq7p6gm as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-serialization.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KotlinxSerializationConverter$serialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
    this.o3n_1 = $$this$unsafeFlow;
    this.p3n_1 = $contentType;
    this.q3n_1 = $charset;
    this.r3n_1 = $typeInfo;
    this.s3n_1 = $value;
  }
  t3b(value, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, value), $completion);
  }
  ic(p1, $completion) {
    return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  }
}
class KotlinxSerializationConverter$deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $content) {
    this.y3n_1 = $$this$unsafeFlow;
    this.z3n_1 = $charset;
    this.a3o_1 = $typeInfo;
    this.b3o_1 = $content;
  }
  t3b(value, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_0.bind(VOID, this, value), $completion);
  }
  ic(p1, $completion) {
    return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  }
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.i3o_1 = function_0;
  }
  d1a(value, $completion) {
    return this.i3o_1(value, $completion);
  }
  m3() {
    return this.i3o_1;
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
class sam$kotlinx_coroutines_flow_FlowCollector$0_0 {
  constructor(function_0) {
    this.j3o_1 = function_0;
  }
  d1a(value, $completion) {
    return this.j3o_1(value, $completion);
  }
  m3() {
    return this.j3o_1;
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
class KotlinxSerializationConverter$serialize$$inlined$map$1 {
  constructor($this, $contentType, $charset, $typeInfo, $value) {
    this.t3n_1 = $this;
    this.u3n_1 = $contentType;
    this.v3n_1 = $charset;
    this.w3n_1 = $typeInfo;
    this.x3n_1 = $value;
  }
  e1a(collector, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_collect__dlomyy.bind(VOID, this, collector), $completion);
  }
  f1a(collector, $completion) {
    return this.e1a(collector, $completion);
  }
}
class KotlinxSerializationConverter$serialize$slambda {
  k3o(it, $completion) {
    return !(it == null);
  }
  ic(p1, $completion) {
    return this.k3o((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  }
}
class KotlinxSerializationConverter$deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $content) {
    this.c3o_1 = $this;
    this.d3o_1 = $charset;
    this.e3o_1 = $typeInfo;
    this.f3o_1 = $content;
  }
  e1a(collector, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_collect__dlomyy_0.bind(VOID, this, collector), $completion);
  }
  f1a(collector, $completion) {
    return this.e1a(collector, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$slambda {
  constructor($content) {
    this.l3o_1 = $content;
  }
  t3b(it, $completion) {
    return !(it == null) || this.l3o_1.f1g();
  }
  ic(p1, $completion) {
    return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  }
}
class KotlinxSerializationConverter {
  constructor(format) {
    this.g3o_1 = format;
    this.h3o_1 = extensions(this.g3o_1);
    var tmp;
    var tmp_0 = this.g3o_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.g3o_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.g3o_1) + ' is not supported.';
      throw IllegalArgumentException.u(toString(message));
    }
  }
  h3c(contentType, charset, typeInfo, value, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_serialize__l2piac.bind(VOID, this, contentType, charset, typeInfo, value), $completion);
  }
  n3b(charset, typeInfo, content, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_deserialize__why6p7.bind(VOID, this, charset, typeInfo, content), $completion);
  }
}
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.n1();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.d1();
  while (_iterator__ex2g4s.e1()) {
    var element = _iterator__ex2g4s.f1();
    var tmp0_safe_receiver = element.n3n(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.b1(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.i3b(contentType, new KotlinxSerializationConverter(format));
}
function *_generator_invoke__zhh2q8($this, value, $completion) {
  var $this$transform = $this.o3n_1;
  var tmp = value.h3c($this.p3n_1, $this.q3n_1, $this.r3n_1, $this.s3n_1, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  var tmp$ret$0 = tmp;
  var tmp_0 = $this$transform.d1a(tmp$ret$0, $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function *_generator_collect__dlomyy($this, collector, $completion) {
  var tmp = KotlinxSerializationConverter$serialize$o$collect$slambda_0(collector, $this.u3n_1, $this.v3n_1, $this.w3n_1, $this.x3n_1);
  var tmp_0 = $this.t3n_1.f1a(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value);
  var l = (value, $completion) => i.t3b(value, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_0($this, value, $completion) {
  var $this$transform = $this.y3n_1;
  var tmp = value.n3b($this.z3n_1, $this.a3o_1, $this.b3o_1, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  var tmp$ret$0 = tmp;
  var tmp_0 = $this$transform.d1a(tmp$ret$0, $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function *_generator_collect__dlomyy_0($this, collector, $completion) {
  var tmp = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(collector, $this.d3o_1, $this.e3o_1, $this.f3o_1);
  var tmp_0 = $this.c3o_1.f1a(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content);
  var l = (value, $completion) => i.t3b(value, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_serialize__l2piac($this, contentType, charset, typeInfo, value, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow($this.h3o_1);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, contentType, charset, typeInfo, value);
  var tmp_0 = firstOrNull_0(tmp, KotlinxSerializationConverter$serialize$slambda_0(), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  var fromExtension = tmp_0;
  if (!(fromExtension == null))
    return fromExtension;
  var tmp_1;
  try {
    tmp_1 = serializerForTypeInfo($this.g3o_1.z1n(), typeInfo);
  } catch ($p) {
    var tmp_2;
    if ($p instanceof SerializationException) {
      var cause = $p;
      tmp_2 = guessSerializer(value, $this.g3o_1.z1n());
    } else {
      throw $p;
    }
    tmp_1 = tmp_2;
  }
  var serializer = tmp_1;
  return serializeContent($this, serializer, $this.g3o_1, value, contentType, charset);
}
function *_generator_deserialize__why6p7($this, charset, typeInfo, content, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow($this.h3o_1);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, charset, typeInfo, content);
  var tmp_0 = firstOrNull_0(tmp, KotlinxSerializationConverter$deserialize$slambda_0(content), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  var fromExtension = tmp_0;
  var tmp_1;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!$this.h3o_1.k1()) {
    tmp_1 = !(fromExtension == null) || content.f1g();
  } else {
    tmp_1 = false;
  }
  if (tmp_1)
    return fromExtension;
  var serializer = serializerForTypeInfo($this.g3o_1.z1n(), typeInfo);
  var tmp_2 = readRemaining(content, $completion);
  if (tmp_2 === get_COROUTINE_SUSPENDED())
    tmp_2 = yield tmp_2;
  var contentPacket = tmp_2;
  try {
    var tmp0_subject = $this.g3o_1;
    var tmp_3;
    if (isInterface(tmp0_subject, StringFormat)) {
      tmp_3 = $this.g3o_1.f1k(serializer, readText(contentPacket, charset));
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        tmp_3 = $this.g3o_1.h1k(serializer, readByteArray(contentPacket));
      } else {
        discard(contentPacket);
        // Inline function 'kotlin.error' call
        var message = 'Unsupported format ' + toString($this.g3o_1);
        throw IllegalStateException.u3(toString(message));
      }
    }
    return tmp_3;
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      throw JsonConvertException.g3b('Illegal input: ' + cause.message, cause);
    } else {
      throw $p;
    }
  }
}
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.e1k(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.g1k(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException.u3(toString(message));
    }
  }
  return tmp;
}
function KotlinxSerializationConverter$serialize$slambda_0() {
  var i = new KotlinxSerializationConverter$serialize$slambda();
  var l = (it, $completion) => i.k3o(it, $completion);
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$slambda_0($content) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content);
  var l = (it, $completion) => i.t3b(it, $completion);
  l.$arity = 1;
  return l;
}
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.z29_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.ee().k1()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.f1l(typeInfo.y29_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.y29_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (isInterface(value, KtList)) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (isArray(value)) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (isInterface(value, KtSet)) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (isInterface(value, KtMap)) {
            var keySerializer = elementSerializer(value.x2(), module_0);
            var valueSerializer = elementSerializer(value.y2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.f1l(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.z29_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fe()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.l1(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.d1();
  while (_iterator__ex2g4s.e1()) {
    var item = _iterator__ex2g4s.f1();
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.b1(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet.w8();
  var list = ArrayList.n1();
  var _iterator__ex2g4s_0 = destination.d1();
  while (_iterator__ex2g4s_0.e1()) {
    var e = _iterator__ex2g4s_0.f1();
    var key = e.k1j().q1l();
    if (set.b1(key)) {
      list.b1(e);
    }
  }
  var serializers = list;
  if (serializers.i1() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.l1(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.d1();
    while (_iterator__ex2g4s_1.e1()) {
      var item_0 = _iterator__ex2g4s_1.f1();
      var tmp$ret$5 = item_0.k1j().q1l();
      destination_0.b1(tmp$ret$5);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException.u3(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.k1j().j1l()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.k1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.d1();
    while (_iterator__ex2g4s_2.e1()) {
      var element = _iterator__ex2g4s_2.f1();
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: post-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization-kotlinx.mjs.map
