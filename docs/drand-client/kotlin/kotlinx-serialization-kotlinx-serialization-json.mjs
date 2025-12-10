import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance26229tfe4t547 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuildermazzzhj6kkai as StringBuilder,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  KtMap140uvy3s5zad8 as KtMap,
  KtList3hktaavzmj137 as KtList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  toDouble1kn912gjoizjp as toDouble,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt1lka3ktyu79a4 as fromInt,
  _UInt___init__impl__l7qpdltd1eeof8nsuj as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl213fqto411a11p0 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1p6qzv0dh0bvg as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7kivnvhcxkib53 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg2vnfngefiworp as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne2jag2u7194ozm as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee3e5ovvzk9wm4f as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  getKClass3t8tygqu4lcxf as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains,
  plus17rl43at52ays as plus,
  convertToByte1epqhkuyxuz5a as convertToByte,
  equalsLong28bsrfhwvd686 as equalsLong,
  convertToShortvtefcftm709c as convertToShort,
  convertToIntofdoxh9bstof as convertToInt,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw13y1a2xkii3dn as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245hlms5v6vgvnl as _UShort___get_data__impl__g0245,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains_0,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  enumEntries20mr21zbe3az4 as enumEntries,
  toNumberlmbpvqo27r53 as toNumber,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Long2qws0ah9gnpki as Long,
  Char__minus_impl_a2frrh3548ixwefqxih as Char__minus_impl_a2frrh,
  multiply18i3gv3wlmcjg as multiply,
  add85si75olwt6n as add,
  subtract16cg4lfi29fq9 as subtract,
  compare2uud5j30pw5xc as compare,
  numberToLong345n6tb1n1i71 as numberToLong,
  negate12tprdg5pyd5t as negate,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap1a0ld5kgwhmhv as HashMap,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Json {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.p3c_1 = configuration;
    this.q3c_1 = serializersModule;
    this.r3c_1 = new DescriptorSchemaCache();
  }
  z1n() {
    return this.q3c_1;
  }
  e1k(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.j1c();
    }
  }
  f1k(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.k1j(), null);
    var result = input.j1n(deserializer);
    lexer.f3d();
    return result;
  }
}
class Default extends Json {
  constructor() {
    Default_instance = null;
    super(new JsonConfiguration(), EmptySerializersModule());
    Default_instance = this;
  }
}
class JsonBuilder {
  constructor(json) {
    this.g3d_1 = json.p3c_1.z3d_1;
    this.h3d_1 = json.p3c_1.e3e_1;
    this.i3d_1 = json.p3c_1.a3e_1;
    this.j3d_1 = json.p3c_1.b3e_1;
    this.k3d_1 = json.p3c_1.d3e_1;
    this.l3d_1 = json.p3c_1.f3e_1;
    this.m3d_1 = json.p3c_1.g3e_1;
    this.n3d_1 = json.p3c_1.i3e_1;
    this.o3d_1 = json.p3c_1.p3e_1;
    this.p3d_1 = json.p3c_1.k3e_1;
    this.q3d_1 = json.p3c_1.l3e_1;
    this.r3d_1 = json.p3c_1.m3e_1;
    this.s3d_1 = json.p3c_1.n3e_1;
    this.t3d_1 = json.p3c_1.o3e_1;
    this.u3d_1 = json.p3c_1.j3e_1;
    this.v3d_1 = json.p3c_1.c3e_1;
    this.w3d_1 = json.p3c_1.h3e_1;
    this.x3d_1 = json.z1n();
  }
  y3d() {
    if (this.w3d_1) {
      // Inline function 'kotlin.require' call
      if (!(this.n3d_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.u(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.o3d_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.u(toString(message_0));
      }
    }
    if (!this.k3d_1) {
      // Inline function 'kotlin.require' call
      if (!(this.l3d_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.u(toString(message_1));
      }
    } else if (!(this.l3d_1 === '    ')) {
      var tmp0 = this.l3d_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.l3d_1;
        throw IllegalArgumentException.u(toString(message_2));
      }
    }
    return new JsonConfiguration(this.g3d_1, this.i3d_1, this.j3d_1, this.v3d_1, this.k3d_1, this.h3d_1, this.l3d_1, this.m3d_1, this.w3d_1, this.n3d_1, this.u3d_1, this.p3d_1, this.q3d_1, this.r3d_1, this.s3d_1, this.t3d_1, this.o3d_1);
  }
}
class JsonImpl extends Json {
  constructor(configuration, module_0) {
    super(configuration, module_0);
    validateConfiguration(this);
  }
}
class JsonClassDiscriminator {}
class JsonIgnoreUnknownKeys {}
class JsonNames {}
class JsonConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.z3d_1 = encodeDefaults;
    this.a3e_1 = ignoreUnknownKeys;
    this.b3e_1 = isLenient;
    this.c3e_1 = allowStructuredMapKeys;
    this.d3e_1 = prettyPrint;
    this.e3e_1 = explicitNulls;
    this.f3e_1 = prettyPrintIndent;
    this.g3e_1 = coerceInputValues;
    this.h3e_1 = useArrayPolymorphism;
    this.i3e_1 = classDiscriminator;
    this.j3e_1 = allowSpecialFloatingPointValues;
    this.k3e_1 = useAlternativeNames;
    this.l3e_1 = namingStrategy;
    this.m3e_1 = decodeEnumsCaseInsensitive;
    this.n3e_1 = allowTrailingComma;
    this.o3e_1 = allowComments;
    this.p3e_1 = classDiscriminatorMode;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.z3d_1 + ', ignoreUnknownKeys=' + this.a3e_1 + ', isLenient=' + this.b3e_1 + ', ' + ('allowStructuredMapKeys=' + this.c3e_1 + ', prettyPrint=' + this.d3e_1 + ', explicitNulls=' + this.e3e_1 + ', ') + ("prettyPrintIndent='" + this.f3e_1 + "', coerceInputValues=" + this.g3e_1 + ', useArrayPolymorphism=' + this.h3e_1 + ', ') + ("classDiscriminator='" + this.i3e_1 + "', allowSpecialFloatingPointValues=" + this.j3e_1 + ', ') + ('useAlternativeNames=' + this.k3e_1 + ', namingStrategy=' + toString_0(this.l3e_1) + ', decodeEnumsCaseInsensitive=' + this.m3e_1 + ', ') + ('allowTrailingComma=' + this.n3e_1 + ', allowComments=' + this.o3e_1 + ', classDiscriminatorMode=' + this.p3e_1.toString() + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class Companion_0 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.s3e();
  }
}
class Companion_1 {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.t3e_1 = content;
  }
  equals(other) {
    return equals(this.t3e_1, other);
  }
  hashCode() {
    return hashCode(this.t3e_1);
  }
  toString() {
    var tmp = this.t3e_1.q1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  k1() {
    return this.t3e_1.k1();
  }
  z24(key) {
    return this.t3e_1.z2(key);
  }
  z2(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.z24((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  a25(key) {
    return this.t3e_1.b3(key);
  }
  b3(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.a25((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  i1() {
    return this.t3e_1.i1();
  }
  x2() {
    return this.t3e_1.x2();
  }
  y2() {
    return this.t3e_1.y2();
  }
  q1() {
    return this.t3e_1.q1();
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.u3e_1 = content;
  }
  equals(other) {
    return equals(this.u3e_1, other);
  }
  hashCode() {
    return hashCode(this.u3e_1);
  }
  toString() {
    return joinToString(this.u3e_1, ',', '[', ']');
  }
  k1() {
    return this.u3e_1.k1();
  }
  v3e(element) {
    return this.u3e_1.m2(element);
  }
  m2(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.v3e(element instanceof JsonElement ? element : THROW_CCE());
  }
  d1() {
    return this.u3e_1.d1();
  }
  w3e(elements) {
    return this.u3e_1.n2(elements);
  }
  n2(elements) {
    return this.w3e(elements);
  }
  j1(index) {
    return this.u3e_1.j1(index);
  }
  o2(fromIndex, toIndex) {
    return this.u3e_1.o2(fromIndex, toIndex);
  }
  i1() {
    return this.u3e_1.i1();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.x3e_1 = 'null';
  }
  s3e() {
    return this.x3e_1;
  }
  y3e() {
    return JsonNullSerializer_getInstance();
  }
  c1w(typeParamsSerializers) {
    return this.y3e();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.z3e_1 = isString;
    this.a3f_1 = coerceToInlineType;
    this.b3f_1 = toString(body);
    if (!(this.a3f_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.a3f_1.s1l()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.u(toString(message));
      }
    }
  }
  s3e() {
    return this.b3f_1;
  }
  toString() {
    var tmp;
    if (this.z3e_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.w();
      printQuoted(this_0, this.b3f_1);
      tmp = this_0.toString();
    } else {
      tmp = this.b3f_1;
    }
    return tmp;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.z3e_1 === other.z3e_1))
      return false;
    if (!(this.b3f_1 === other.b3f_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.z3e_1);
    result = imul(31, result) + getStringHashCode(this.b3f_1) | 0;
    return result;
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.i3f_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  k1j() {
    return this.i3f_1;
  }
  j3f(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.d1p(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.d1p(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.d1p(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  l1j(encoder, value) {
    return this.j3f(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  m1j(decoder) {
    var input = asJsonDecoder(decoder);
    return input.r3e();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.d3f_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  k1j() {
    return this.d3f_1;
  }
  k3f(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.d1p(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.d1p(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  l1j(encoder, value) {
    return this.k3f(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  m1j(decoder) {
    var result = asJsonDecoder(decoder).r3e();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.e3f_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  k1j() {
    return this.e3f_1;
  }
  l3f(encoder, value) {
    verify(encoder);
    encoder.g1o();
  }
  l1j(encoder, value) {
    return this.l3f(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  m1j(decoder) {
    verify_0(decoder);
    if (decoder.v1m()) {
      throw JsonDecodingException.s3f("Expected 'null' literal");
    }
    decoder.w1m();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.f3f_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  k1j() {
    return this.f3f_1;
  }
  t3f(encoder, value) {
    verify(encoder);
    if (value.z3e_1) {
      return encoder.p1o(value.b3f_1);
    }
    if (!(value.a3f_1 == null)) {
      return encoder.r1o(value.a3f_1).p1o(value.b3f_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.b3f_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.l1o(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.b3f_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).kp_1;
      var tmp_1 = encoder.r1o(serializer_0(Companion_getInstance()).k1j());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.l1o(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.b3f_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.n1o(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.b3f_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.h1o(tmp3_safe_receiver);
    }
    encoder.p1o(value.b3f_1);
  }
  l1j(encoder, value) {
    return this.t3f(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  m1j(decoder) {
    var result = asJsonDecoder(decoder).r3e();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.u3f_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).k1j();
    this.v3f_1 = 'kotlinx.serialization.json.JsonObject';
  }
  q1l() {
    return this.v3f_1;
  }
  v1l(index) {
    return this.u3f_1.v1l(index);
  }
  w1l(name) {
    return this.u3f_1.w1l(name);
  }
  x1l(index) {
    return this.u3f_1.x1l(index);
  }
  y1l(index) {
    return this.u3f_1.y1l(index);
  }
  z1l(index) {
    return this.u3f_1.z1l(index);
  }
  r1l() {
    return this.u3f_1.r1l();
  }
  j1l() {
    return this.u3f_1.j1l();
  }
  s1l() {
    return this.u3f_1.s1l();
  }
  t1l() {
    return this.u3f_1.t1l();
  }
  u1l() {
    return this.u3f_1.u1l();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.g3f_1 = JsonObjectDescriptor_getInstance();
  }
  k1j() {
    return this.g3f_1;
  }
  w3f(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).l1j(encoder, value);
  }
  l1j(encoder, value) {
    return this.w3f(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  m1j(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).m1j(decoder));
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.x3f_1 = ListSerializer(JsonElementSerializer_getInstance()).k1j();
    this.y3f_1 = 'kotlinx.serialization.json.JsonArray';
  }
  q1l() {
    return this.y3f_1;
  }
  v1l(index) {
    return this.x3f_1.v1l(index);
  }
  w1l(name) {
    return this.x3f_1.w1l(name);
  }
  x1l(index) {
    return this.x3f_1.x1l(index);
  }
  y1l(index) {
    return this.x3f_1.y1l(index);
  }
  z1l(index) {
    return this.x3f_1.z1l(index);
  }
  r1l() {
    return this.x3f_1.r1l();
  }
  j1l() {
    return this.x3f_1.j1l();
  }
  s1l() {
    return this.x3f_1.s1l();
  }
  t1l() {
    return this.x3f_1.t1l();
  }
  u1l() {
    return this.x3f_1.u1l();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.h3f_1 = JsonArrayDescriptor_getInstance();
  }
  k1j() {
    return this.h3f_1;
  }
  z3f(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).l1j(encoder, value);
  }
  l1j(encoder, value) {
    return this.z3f(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  m1j(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).m1j(decoder));
  }
}
class defer$1 {
  constructor($deferred) {
    this.a3g_1 = lazy($deferred);
  }
  q1l() {
    return _get_original__l7ku1m(this).q1l();
  }
  r1l() {
    return _get_original__l7ku1m(this).r1l();
  }
  t1l() {
    return _get_original__l7ku1m(this).t1l();
  }
  v1l(index) {
    return _get_original__l7ku1m(this).v1l(index);
  }
  w1l(name) {
    return _get_original__l7ku1m(this).w1l(name);
  }
  x1l(index) {
    return _get_original__l7ku1m(this).x1l(index);
  }
  y1l(index) {
    return _get_original__l7ku1m(this).y1l(index);
  }
  z1l(index) {
    return _get_original__l7ku1m(this).z1l(index);
  }
}
class JsonEncoder {}
class Composer {
  constructor(writer) {
    this.b3g_1 = writer;
    this.c3g_1 = true;
  }
  d3g() {
    this.c3g_1 = true;
  }
  e3g() {
    return Unit_instance;
  }
  f3g() {
    this.c3g_1 = false;
  }
  g3g() {
    this.c3g_1 = false;
  }
  h3g() {
    return Unit_instance;
  }
  i3g(v) {
    return this.b3g_1.j3g(v);
  }
  k3g(v) {
    return this.b3g_1.l3g(v);
  }
  m3g(v) {
    return this.b3g_1.l3g(v.toString());
  }
  n3g(v) {
    return this.b3g_1.l3g(v.toString());
  }
  o3g(v) {
    return this.b3g_1.p3g(fromInt(v));
  }
  q3g(v) {
    return this.b3g_1.p3g(fromInt(v));
  }
  r3g(v) {
    return this.b3g_1.p3g(fromInt(v));
  }
  s3g(v) {
    return this.b3g_1.p3g(v);
  }
  t3g(v) {
    return this.b3g_1.l3g(v.toString());
  }
  u3g(value) {
    return this.b3g_1.v3g(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.y3g_1 = forceQuoting;
  }
  r3g(v) {
    if (this.y3g_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.u3g(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.k3g(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  s3g(v) {
    if (this.y3g_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.u3g(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.k3g(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  o3g(v) {
    if (this.y3g_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.u3g(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.k3g(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  q3g(v) {
    if (this.y3g_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.u3g(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.k3g(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.b3h_1 = forceQuoting;
  }
  u3g(value) {
    if (this.b3h_1) {
      super.u3g(value);
    } else {
      super.k3g(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.e3h_1 = json;
    this.f3h_1 = 0;
  }
  d3g() {
    this.c3g_1 = true;
    this.f3h_1 = this.f3h_1 + 1 | 0;
  }
  e3g() {
    this.f3h_1 = this.f3h_1 - 1 | 0;
  }
  f3g() {
    this.c3g_1 = false;
    this.k3g('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.f3h_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.k3g(this.e3h_1.p3c_1.f3e_1);
      }
       while (inductionVariable < times);
  }
  g3g() {
    if (this.c3g_1)
      this.c3g_1 = false;
    else {
      this.f3g();
    }
  }
  h3g() {
    this.i3g(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.g3h_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.h3h_1 = false;
  }
  i3h(index) {
    this.g3h_1.t1t(index);
  }
  j3h() {
    return this.g3h_1.u1t();
  }
}
class JsonException extends SerializationException {
  static p3h(message) {
    var $this = this.s1k(message);
    captureStack($this, $this.o3h_1);
    return $this;
  }
}
class JsonDecodingException extends JsonException {
  static s3f(message) {
    var $this = this.p3h(message);
    captureStack($this, $this.r3f_1);
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  static y3h(message) {
    var $this = this.p3h(message);
    captureStack($this, $this.x3h_1);
    return $this;
  }
}
class Tombstone {}
class JsonPath {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d3i_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.e3i_1 = tmp_2;
    this.f3i_1 = -1;
  }
  g3i(sd) {
    this.f3i_1 = this.f3i_1 + 1 | 0;
    var depth = this.f3i_1;
    if (depth === this.d3i_1.length) {
      resize(this);
    }
    this.d3i_1[depth] = sd;
  }
  h3i(index) {
    this.e3i_1[this.f3i_1] = index;
  }
  i3i(key) {
    var tmp;
    if (!(this.e3i_1[this.f3i_1] === -2)) {
      this.f3i_1 = this.f3i_1 + 1 | 0;
      tmp = this.f3i_1 === this.d3i_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.d3i_1[this.f3i_1] = key;
    this.e3i_1[this.f3i_1] = -2;
  }
  j3i() {
    if (this.e3i_1[this.f3i_1] === -2) {
      this.d3i_1[this.f3i_1] = Tombstone_instance;
    }
  }
  k3i() {
    var depth = this.f3i_1;
    if (this.e3i_1[depth] === -2) {
      this.e3i_1[depth] = -1;
      this.f3i_1 = this.f3i_1 - 1 | 0;
    }
    if (!(this.f3i_1 === -1)) {
      this.f3i_1 = this.f3i_1 - 1 | 0;
    }
  }
  l3i() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.w();
    this_0.la('$');
    // Inline function 'kotlin.repeat' call
    var times = this.f3i_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.d3i_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.r1l(), LIST_getInstance())) {
            if (!(this.e3i_1[index] === -1)) {
              this_0.la('[');
              this_0.of(this.e3i_1[index]);
              this_0.la(']');
            }
          } else {
            var idx = this.e3i_1[index];
            if (idx >= 0) {
              this_0.la('.');
              this_0.la(element.v1l(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.la('[');
            this_0.la("'");
            this_0.ka(element);
            this_0.la("'");
            this_0.la(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.l3i();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.m3i_1 = configuration.i3e_1;
    this.n3i_1 = configuration.h3e_1;
    this.o3i_1 = !configuration.p3e_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  e24(kClass, provider) {
  }
  h24(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.k1j();
    checkKind(this, descriptor, actualClass);
    if (!this.n3i_1 && this.o3i_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  }
  i24(baseClass, defaultSerializerProvider) {
  }
  j24(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader$readDeepRecursive$slambda {
  constructor(this$0) {
    this.d3j_1 = this$0;
  }
  l3j($this$DeepRecursiveFunction, it, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$DeepRecursiveFunction, it), $completion);
  }
  jc(p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.l3j(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.z3i_1 = lexer;
    this.a3j_1 = configuration.b3e_1;
    this.b3j_1 = configuration.n3e_1;
    this.c3j_1 = 0;
  }
  j3j() {
    var token = this.z3i_1.e3j();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.c3j_1 = this.c3j_1 + 1 | 0;
      if (this.c3j_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.c3j_1 = this.c3j_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.z3i_1.r3h('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.z3h_1 = createMapForCache(16);
  }
  n3j(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z3h_1;
    var value_0 = this_0.b3(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.u2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.u2(tmp2, value_1);
  }
  a3i(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.o3j(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.n3j(descriptor, key, value);
    return value;
  }
  o3j(descriptor, key) {
    var tmp0_safe_receiver = this.z3h_1.b3(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.b3(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.p3j_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.t3c_1 = json;
    this.u3c_1 = mode;
    this.v3c_1 = lexer;
    this.w3c_1 = this.t3c_1.z1n();
    this.x3c_1 = -1;
    this.y3c_1 = discriminatorHolder;
    this.z3c_1 = this.t3c_1.p3c_1;
    this.a3d_1 = this.z3c_1.e3e_1 ? null : new JsonElementMarker(descriptor);
  }
  q3e() {
    return this.t3c_1;
  }
  z1n() {
    return this.w3c_1;
  }
  r3e() {
    return (new JsonTreeReader(this.t3c_1.p3c_1, this.v3c_1)).j3j();
  }
  j1n(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t3c_1.p3c_1.h3e_1;
      }
      if (tmp) {
        return deserializer.m1j(this);
      }
      var discriminator = classDiscriminator(deserializer.k1j(), this.t3c_1);
      var tmp0_elvis_lhs = this.v3c_1.y3j(discriminator, this.z3c_1.b3e_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.q3e().p3c_1.h3e_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.m1j(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.k1j(), this.q3e());
          var tmp0 = this.r3e();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.k1j().q1l();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).pd();
            var tmp_3 = getKClassFromExpression(tmp0).pd();
            var tmp$ret$1 = this.v3c_1.c3d_1.l3i();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.a25(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.q3e(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.v3c_1.r3h(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.y3c_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.m1j(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw MissingFieldException.a1l(e.y1k_1, plus(e.message, ' at path: ') + this.v3c_1.c3d_1.l3i(), e);
      } else {
        throw $p;
      }
    }
  }
  k1n(descriptor) {
    var newMode = switchMode(this.t3c_1, descriptor);
    this.v3c_1.c3d_1.g3i(descriptor);
    this.v3c_1.q3j(newMode.b3k_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.d3_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.t3c_1, newMode, this.v3c_1, descriptor, this.y3c_1);
        break;
      default:
        var tmp_0;
        if (this.u3c_1.equals(newMode) && this.t3c_1.p3c_1.e3e_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.t3c_1, newMode, this.v3c_1, descriptor, this.y3c_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  l1n(descriptor) {
    if (descriptor.t1l() === 0 && ignoreUnknownKeys(descriptor, this.t3c_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.v3c_1.r3j() && !this.t3c_1.p3c_1.n3e_1) {
      invalidTrailingComma(this.v3c_1, '');
    }
    this.v3c_1.q3j(this.u3c_1.c3k_1);
    this.v3c_1.c3d_1.k3i();
  }
  v1m() {
    var tmp;
    var tmp0_safe_receiver = this.a3d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3h_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.v3c_1.d3k();
    } else {
      tmp = false;
    }
    return tmp;
  }
  w1m() {
    return null;
  }
  w1n(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.u3c_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.v3c_1.c3d_1.j3i();
    }
    var value = super.w1n(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.v3c_1.c3d_1.i3i(value);
    }
    return value;
  }
  b1o(descriptor) {
    var index;
    switch (this.u3c_1.d3_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.u3c_1.equals(WriteMode_MAP_getInstance())) {
      this.v3c_1.c3d_1.h3i(index);
    }
    return index;
  }
  x1m() {
    return this.v3c_1.e3k();
  }
  y1m() {
    var value = this.v3c_1.f3k();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.v3c_1.r3h("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  z1m() {
    var value = this.v3c_1.f3k();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.v3c_1.r3h("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  a1n() {
    var value = this.v3c_1.f3k();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.v3c_1.r3h("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  b1n() {
    return this.v3c_1.f3k();
  }
  c1n() {
    var tmp0 = this.v3c_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.t3c_1.p3c_1.j3e_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v3c_1, result);
  }
  d1n() {
    var tmp0 = this.v3c_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.t3c_1.p3c_1.j3e_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v3c_1, result);
  }
  e1n() {
    var string = this.v3c_1.i3j();
    if (!(string.length === 1)) {
      this.v3c_1.r3h("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  f1n() {
    var tmp;
    if (this.z3c_1.b3e_1) {
      tmp = this.v3c_1.x3j();
    } else {
      tmp = this.v3c_1.h3j();
    }
    return tmp;
  }
  h1n(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.v3c_1, this.t3c_1) : super.h1n(descriptor);
  }
  g1n(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.t3c_1, this.f1n(), ' at path ' + this.v3c_1.c3d_1.l3i());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.g3k_1 = lexer;
    this.h3k_1 = json.z1n();
  }
  z1n() {
    return this.h3k_1;
  }
  b1o(descriptor) {
    var message = 'unsupported';
    throw IllegalStateException.u3(toString(message));
  }
  a1n() {
    var tmp0 = this.g3k_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  b1n() {
    var tmp0 = this.g3k_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  y1m() {
    var tmp0 = this.g3k_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  z1m() {
    var tmp0 = this.g3k_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.i3j();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3h("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  static i3k(composer, json, mode, modeReuseCache) {
    var $this = this.d1o();
    $this.p3i_1 = composer;
    $this.q3i_1 = json;
    $this.r3i_1 = mode;
    $this.s3i_1 = modeReuseCache;
    $this.t3i_1 = $this.q3i_1.z1n();
    $this.u3i_1 = $this.q3i_1.p3c_1;
    $this.v3i_1 = false;
    $this.w3i_1 = null;
    $this.x3i_1 = null;
    var i = $this.r3i_1.d3_1;
    if (!($this.s3i_1 == null)) {
      if (!($this.s3i_1[i] === null) || !($this.s3i_1[i] === $this)) {
        $this.s3i_1[i] = $this;
      }
    }
    return $this;
  }
  q3e() {
    return this.q3i_1;
  }
  static y3i(output, json, mode, modeReuseCache) {
    return this.i3k(Composer_0(output, json), json, mode, modeReuseCache);
  }
  z1n() {
    return this.t3i_1;
  }
  i1p(descriptor, index) {
    return this.u3i_1.z3d_1;
  }
  d1p(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.q3e().p3c_1.h3e_1) {
        serializer.l1j(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.q3e().p3c_1.p3e_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.q3e().p3c_1.p3e_1.d3_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.k1j().r1l();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.k1j(), this.q3e()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.k1j()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.u(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.k1j().r1l());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.k1j().q1l();
        this.w3i_1 = baseClassDiscriminator;
        this.x3i_1 = serialName;
      }
      actualSerializer.l1j(this, value);
    }
  }
  k1n(descriptor) {
    var newMode = switchMode(this.q3i_1, descriptor);
    if (!(newMode.b3k_1 === _Char___init__impl__6a9atx(0))) {
      this.p3i_1.i3g(newMode.b3k_1);
      this.p3i_1.d3g();
    }
    var discriminator = this.w3i_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.x3i_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.q1l() : tmp0_elvis_lhs);
      this.w3i_1 = null;
      this.x3i_1 = null;
    }
    if (this.r3i_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.s3i_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.d3_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.i3k(this.p3i_1, this.q3i_1, newMode, this.s3i_1) : tmp2_elvis_lhs;
  }
  l1n(descriptor) {
    if (!(this.r3i_1.c3k_1 === _Char___init__impl__6a9atx(0))) {
      this.p3i_1.e3g();
      this.p3i_1.g3g();
      this.p3i_1.i3g(this.r3i_1.c3k_1);
    }
  }
  e1o(descriptor, index) {
    switch (this.r3i_1.d3_1) {
      case 1:
        if (!this.p3i_1.c3g_1) {
          this.p3i_1.i3g(_Char___init__impl__6a9atx(44));
        }

        this.p3i_1.f3g();
        break;
      case 2:
        if (!this.p3i_1.c3g_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.p3i_1.i3g(_Char___init__impl__6a9atx(44));
            this.p3i_1.f3g();
            tmp_0 = true;
          } else {
            this.p3i_1.i3g(_Char___init__impl__6a9atx(58));
            this.p3i_1.h3g();
            tmp_0 = false;
          }
          tmp.v3i_1 = tmp_0;
        } else {
          this.v3i_1 = true;
          this.p3i_1.f3g();
        }

        break;
      case 3:
        if (index === 0)
          this.v3i_1 = true;
        if (index === 1) {
          this.p3i_1.i3g(_Char___init__impl__6a9atx(44));
          this.p3i_1.h3g();
          this.v3i_1 = false;
        }

        break;
      default:
        if (!this.p3i_1.c3g_1) {
          this.p3i_1.i3g(_Char___init__impl__6a9atx(44));
        }

        this.p3i_1.f3g();
        this.p1o(getJsonElementName(descriptor, this.q3i_1, index));
        this.p3i_1.i3g(_Char___init__impl__6a9atx(58));
        this.p3i_1.h3g();
        break;
    }
    return true;
  }
  e1p(descriptor, index, serializer, value) {
    if (!(value == null) || this.u3i_1.e3e_1) {
      super.e1p(descriptor, index, serializer, value);
    }
  }
  r1o(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.p3i_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.p3i_1;
      } else {
        var tmp0 = this.p3i_1.b3g_1;
        var p1 = this.v3i_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = StreamingJsonEncoder.i3k(tmp$ret$1, this.q3i_1, this.r3i_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.p3i_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.p3i_1;
      } else {
        var tmp0_0 = this.p3i_1.b3g_1;
        var p1_0 = this.v3i_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = StreamingJsonEncoder.i3k(tmp$ret$3, this.q3i_1, this.r3i_1, null);
    } else if (!(this.w3i_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.x3i_1 = descriptor.q1l();
      tmp = this;
    } else {
      tmp = super.r1o(descriptor);
    }
    return tmp;
  }
  g1o() {
    this.p3i_1.k3g('null');
  }
  h1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.t3g(value);
    }
  }
  i1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.o3g(value);
    }
  }
  j1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.q3g(value);
    }
  }
  k1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.r3g(value);
    }
  }
  l1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.s3g(value);
    }
  }
  m1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.m3g(value);
    }
    if (!this.u3i_1.j3e_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.p3i_1.b3g_1));
    }
  }
  n1o(value) {
    if (this.v3i_1) {
      this.p1o(value.toString());
    } else {
      this.p3i_1.n3g(value);
    }
    if (!this.u3i_1.j3e_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.p3i_1.b3g_1));
    }
  }
  o1o(value) {
    this.p1o(toString_1(value));
  }
  p1o(value) {
    return this.p3i_1.u3g(value);
  }
  q1o(enumDescriptor, index) {
    this.p1o(enumDescriptor.v1l(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.l3k_1 = json;
    this.m3k_1 = value;
    this.n3k_1 = polymorphicDiscriminator;
    this.o3k_1 = this.q3e().p3c_1;
  }
  q3e() {
    return this.l3k_1;
  }
  s1() {
    return this.m3k_1;
  }
  z1n() {
    return this.q3e().z1n();
  }
  q3k() {
    var tmp0_safe_receiver = this.u21();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.r3k(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.s1() : tmp1_elvis_lhs;
  }
  p3k(currentTag) {
    return this.w21() + ('.' + currentTag);
  }
  r3e() {
    return this.q3k();
  }
  j1n(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.q3e().p3c_1.h3e_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.m1j(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.k1j(), this.q3e());
      var tmp0 = this.r3e();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.k1j().q1l();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).pd();
        var tmp_1 = getKClassFromExpression(tmp0).pd();
        var tmp$ret$1 = this.w21();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.a25(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.q3e(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  v21(parentName, childName) {
    return childName;
  }
  k1n(descriptor) {
    var currentObject = this.q3k();
    var tmp0_subject = descriptor.r1l();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.q3e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.q1l();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).pd();
        var tmp_3 = getKClassFromExpression(currentObject).pd();
        var tmp$ret$0 = this.w21();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.q3e();
        var keyDescriptor = carrierDescriptor(descriptor.y1l(0), this_0.z1n());
        var keyKind = keyDescriptor.r1l();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.q3e();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.q1l();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).pd();
            var tmp_8 = getKClassFromExpression(currentObject).pd();
            var tmp$ret$3 = this.w21();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.p3c_1.c3e_1) {
            var tmp_9 = this.q3e();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.q1l();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).pd();
              var tmp_11 = getKClassFromExpression(currentObject).pd();
              var tmp$ret$7 = this.w21();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.q3e();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.q1l();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).pd();
          var tmp_14 = getKClassFromExpression(currentObject).pd();
          var tmp$ret$12 = this.w21();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.n3k_1);
      }
    }
    return tmp;
  }
  l1n(descriptor) {
  }
  v1m() {
    var tmp = this.q3k();
    return !(tmp instanceof JsonNull);
  }
  s3k(tag, enumDescriptor) {
    var tmp = this.q3e();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.r3k(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.q1l();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).pd();
      var tmp_1 = getKClassFromExpression(tmp2).pd();
      var tmp$ret$0 = this.p3k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.s3e());
  }
  i22(tag, enumDescriptor) {
    return this.s3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  t3k(tag) {
    return !(this.r3k(tag) === JsonNull_getInstance());
  }
  y21(tag) {
    return this.t3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  u3k(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  z21(tag) {
    return this.u3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  v3k(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  a22(tag) {
    return this.v3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  w3k(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  b22(tag) {
    return this.w3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  x3k(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  c22(tag) {
    return this.x3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  y3k(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  d22(tag) {
    return this.y3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  z3k(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.q3e().p3c_1.j3e_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.q3k()));
  }
  e22(tag) {
    return this.z3k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  a3l(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.q3e().p3c_1.j3e_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.q3k()));
  }
  f22(tag) {
    return this.a3l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b3l(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.r3k(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).pd();
        var tmp_0 = getKClassFromExpression(value).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.s3e()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.a2_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  g22(tag) {
    return this.b3l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  c3l(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.r3k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).pd();
      var tmp_0 = getKClassFromExpression(value).pd();
      var tmp$ret$0 = this.p3k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.p3k(tag), toString(this.q3k()));
    if (!value_0.z3e_1 && !this.q3e().p3c_1.b3e_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.p3k(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.q3k()));
    }
    return value_0.b3f_1;
  }
  h22(tag) {
    return this.c3l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  d3l(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.q3e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.r3k(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.q1l();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).pd();
        var tmp_2 = getKClassFromExpression(tmp2).pd();
        var tmp$ret$0 = this.p3k(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.s3e());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.q3e());
    } else {
      tmp = super.j22(tag, inlineDescriptor);
    }
    return tmp;
  }
  j22(tag, inlineDescriptor) {
    return this.d3l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  h1n(descriptor) {
    return !(this.u21() == null) ? super.h1n(descriptor) : (new JsonPrimitiveDecoder(this.q3e(), this.s1(), this.n3k_1)).h1n(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.k3l_1 = value;
    this.l3l_1 = polyDescriptor;
    this.m3l_1 = 0;
    this.n3l_1 = false;
  }
  s1() {
    return this.k3l_1;
  }
  b1o(descriptor) {
    $l$loop: while (this.m3l_1 < descriptor.t1l()) {
      var _unary__edvuaz = this.m3l_1;
      this.m3l_1 = _unary__edvuaz + 1 | 0;
      var name = this.p21(descriptor, _unary__edvuaz);
      var index = this.m3l_1 - 1 | 0;
      this.n3l_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.s1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).z2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.o3k_1.g3e_1)
          return index;
        var tmp0 = this.q3e();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.z1l(index);
          var elementDescriptor = descriptor.y1l(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.j1l()) {
            var tmp_1 = this.o3l(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.r1l(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.j1l()) {
              var tmp_3 = this.o3l(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.o3l(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.p3c_1.e3e_1 && elementDescriptor.j1l();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  v1m() {
    return !this.n3l_1 && super.v1m();
  }
  q21(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.q3e());
    var baseName = descriptor.v1l(index);
    if (strategy == null) {
      if (!this.o3k_1.k3e_1)
        return baseName;
      if (this.s1().x2().m2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.q3e(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.s1().x2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.d1();
      while (_iterator__ex2g4s.e1()) {
        var element = _iterator__ex2g4s.f1();
        if (deserializationNamesMap_0.b3(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.c3i(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  r3k(tag) {
    return getValue(this.s1(), tag);
  }
  o3l(tag) {
    return this.s1().a25(tag);
  }
  k1n(descriptor) {
    if (descriptor === this.l3l_1) {
      var tmp = this.q3e();
      var tmp2 = this.q3k();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.l3l_1.q1l();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).pd();
        var tmp_1 = getKClassFromExpression(tmp2).pd();
        var tmp$ret$0 = this.w21();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.n3k_1, this.l3l_1);
    }
    return super.k1n(descriptor);
  }
  l1n(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.q3e())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.r1l();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.q3e());
    var tmp_1;
    if (strategy == null && !this.o3k_1.k3e_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.q3e(), descriptor).x2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.q3e()).o3j(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.s1().x2().d1();
    while (_iterator__ex2g4s.e1()) {
      var key = _iterator__ex2g4s.f1();
      if (!names.m2(key) && !(key === this.n3k_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.w21() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.s1().toString()))));
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.v3l_1 = value;
    this.w3l_1 = this.v3l_1.i1();
    this.x3l_1 = -1;
  }
  s1() {
    return this.v3l_1;
  }
  q21(descriptor, index) {
    return index.toString();
  }
  r3k(tag) {
    return this.v3l_1.j1(toInt(tag));
  }
  b1o(descriptor) {
    while (this.x3l_1 < (this.w3l_1 - 1 | 0)) {
      this.x3l_1 = this.x3l_1 + 1 | 0;
      return this.x3l_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.e3m_1 = value;
    this.k22('primitive');
  }
  s1() {
    return this.e3m_1;
  }
  b1o(descriptor) {
    return 0;
  }
  r3k(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.u(toString(message));
    }
    return this.e3m_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.p3m_1 = value;
    this.q3m_1 = toList(this.p3m_1.x2());
    this.r3m_1 = imul(this.q3m_1.i1(), 2);
    this.s3m_1 = -1;
  }
  s1() {
    return this.p3m_1;
  }
  q21(descriptor, index) {
    var i = index / 2 | 0;
    return this.q3m_1.j1(i);
  }
  b1o(descriptor) {
    while (this.s3m_1 < (this.r3m_1 - 1 | 0)) {
      this.s3m_1 = this.s3m_1 + 1 | 0;
      return this.s3m_1;
    }
    return -1;
  }
  r3k(tag) {
    return (this.s3m_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.p3m_1, tag);
  }
  l1n(descriptor) {
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.b3k_1 = begin;
    this.c3k_1 = end;
  }
}
class AbstractJsonLexer {
  constructor() {
    this.b3d_1 = 0;
    this.c3d_1 = new JsonPath();
    this.d3d_1 = null;
    this.e3d_1 = StringBuilder.w();
  }
  w3m() {
  }
  r3j() {
    var current = this.x3m();
    var source = this.u3m();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.b3d_1 = this.b3d_1 + 1 | 0;
      return true;
    }
    return false;
  }
  y3m(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  f3d() {
    var nextToken = this.k3j();
    if (!(nextToken === 10)) {
      this.r3h('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.u3m(), this.b3d_1 - 1 | 0)) + ' instead');
    }
  }
  f3j(expected) {
    var token = this.k3j();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.b3d_1 - 1 | 0 : this.b3d_1;
      var s = this.b3d_1 === charSequenceLength(this.u3m()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u3m(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.r3h(tmp$ret$0, position);
    }
    return token;
  }
  z3m(expected) {
    if (this.b3d_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.b3d_1;
        try {
          this.b3d_1 = this.b3d_1 - 1 | 0;
          tmp$ret$1 = this.i3j();
          break $l$block;
        }finally {
          this.b3d_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.q3h("Expected string literal but 'null' literal was found", this.b3d_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.b3d_1 - 1 | 0 : this.b3d_1;
    var s = this.b3d_1 === charSequenceLength(this.u3m()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u3m(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.r3h(tmp$ret$2, position);
  }
  e3j() {
    var source = this.u3m();
    var cpos = this.b3d_1;
    $l$loop_0: while (true) {
      cpos = this.v3m(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.b3d_1 = cpos;
      return charToTokenClass(ch);
    }
    this.b3d_1 = cpos;
    return 10;
  }
  s3j(doConsume) {
    var current = this.x3m();
    current = this.v3m(current);
    var len = charSequenceLength(this.u3m()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.u3m(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.u3m(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.b3d_1 = current + 4 | 0;
    }
    return true;
  }
  d3k(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.s3j(doConsume) : $super.s3j.call(this, doConsume);
  }
  t3j(isLenient) {
    var token = this.e3j();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.i3j();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.h3j();
    }
    var string = tmp;
    this.d3d_1 = string;
    return string;
  }
  a3n() {
    this.d3d_1 = null;
  }
  jq(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.u3m();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  h3j() {
    if (!(this.d3d_1 == null)) {
      return takePeeked(this);
    }
    return this.w3j();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.v3m(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.r3h('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.t3m(lastPosition, currentPosition);
          currentPosition = this.v3m(currentPosition);
          if (currentPosition === -1) {
            this.r3h('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.jq(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.b3d_1 = currentPosition + 1 | 0;
    return string;
  }
  x3j() {
    var result = this.i3j();
    if (result === 'null' && wasUnquotedString(this)) {
      this.r3h("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  i3j() {
    if (!(this.d3d_1 == null)) {
      return takePeeked(this);
    }
    var current = this.x3m();
    if (current >= charSequenceLength(this.u3m()) || current === -1) {
      this.r3h('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.u3m(), current));
    if (token === 1) {
      return this.h3j();
    }
    if (!(token === 0)) {
      this.r3h('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.u3m(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.u3m(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.u3m())) {
        usedAppend = true;
        this.t3m(this.b3d_1, current);
        var eof = this.v3m(current);
        if (eof === -1) {
          this.b3d_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.jq(this.b3d_1, current);
    } else {
      tmp = decodedString(this, this.b3d_1, current);
    }
    var result = tmp;
    this.b3d_1 = current;
    return result;
  }
  t3m(fromIndex, toIndex) {
    this.e3d_1.lf(this.u3m(), fromIndex, toIndex);
  }
  v3j(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.n1();
    var lastToken = this.e3j();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.i3j();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.e3j();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.i3j();
        else
          this.w3j();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.b3d_1, 'found ] instead of } at path: ' + this.c3d_1.toString(), this.u3m());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.b3d_1, 'found } instead of ] at path: ' + this.c3d_1.toString(), this.u3m());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.r3h('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.k3j();
      if (tokenStack.i1() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.u3m()) + "', currentPosition=" + this.b3d_1 + ')';
  }
  u3j(key) {
    var processed = this.jq(0, this.b3d_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw JsonDecodingException.s3f("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.c3d_1.l3i() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.u3m(), lastIndexOf_0))));
  }
  q3h(message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.c3d_1.l3i() + hintMessage, this.u3m());
  }
  r3h(message, position, hint, $super) {
    position = position === VOID ? this.b3d_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.q3h(message, position, hint) : $super.q3h.call(this, message, position, hint);
  }
  f3k() {
    var current = this.x3m();
    current = this.v3m(current);
    if (current >= charSequenceLength(this.u3m()) || current === -1) {
      this.r3h('EOF');
    }
    var tmp;
    if (charSequenceGet(this.u3m(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.u3m())) {
        this.r3h('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.u3m()))) {
      var ch = charSequenceGet(this.u3m(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.r3h('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.r3h("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.r3h("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.r3h("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.r3h("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.r3h('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.r3h('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.r3h('EOF');
      }
      if (!(charSequenceGet(this.u3m(), current) === _Char___init__impl__6a9atx(34))) {
        this.r3h('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.b3d_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.r3h('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.r3h("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.r3h('Numeric value overflow');
    }
    return tmp_0;
  }
  c3f() {
    var result = this.f3k();
    var next = this.k3j();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.b3d_1 - 1 | 0 : this.b3d_1;
      var s = this.b3d_1 === charSequenceLength(this.u3m()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u3m(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.r3h(tmp$ret$0, position);
    }
    return result;
  }
  e3k() {
    var current = this.x3m();
    if (current === charSequenceLength(this.u3m())) {
      this.r3h('EOF');
    }
    var tmp;
    if (charSequenceGet(this.u3m(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.b3d_1 === charSequenceLength(this.u3m())) {
        this.r3h('EOF');
      }
      if (!(charSequenceGet(this.u3m(), this.b3d_1) === _Char___init__impl__6a9atx(34))) {
        this.r3h('Expected closing quotation mark');
      }
      this.b3d_1 = this.b3d_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.b3n_1 = charArray(117);
    this.c3n_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source) {
    super();
    this.m3n_1 = source;
  }
  u3m() {
    return this.m3n_1;
  }
  v3m(position) {
    return position < this.u3m().length ? position : -1;
  }
  k3j() {
    var source = this.u3m();
    var cpos = this.b3d_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.b3d_1 = cpos;
      return charToTokenClass(c);
    }
    this.b3d_1 = source.length;
    return 10;
  }
  g3j() {
    var current = this.b3d_1;
    if (current === -1)
      return false;
    var source = this.u3m();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.b3d_1 = current;
      return this.y3m(c);
    }
    this.b3d_1 = current;
    return false;
  }
  x3m() {
    var current = this.b3d_1;
    if (current === -1)
      return current;
    var source = this.u3m();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.b3d_1 = current;
    return current;
  }
  q3j(expected) {
    if (this.b3d_1 === -1) {
      this.z3m(expected);
    }
    var source = this.u3m();
    var cpos = this.b3d_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.b3d_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.z3m(expected);
    }
    this.b3d_1 = -1;
    this.z3m(expected);
  }
  w3j() {
    this.q3j(_Char___init__impl__6a9atx(34));
    var current = this.b3d_1;
    var closingQuote = indexOf_0(this.u3m(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.i3j();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.b3d_1 - 1 | 0 : this.b3d_1;
      var s = this.b3d_1 === charSequenceLength(this.u3m()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u3m(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.r3h(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.u3m(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.u3m(), this.b3d_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.b3d_1 = closingQuote + 1 | 0;
    return substring(this.u3m(), current, closingQuote);
  }
  y3j(keyToMatch, isLenient) {
    var positionSnapshot = this.b3d_1;
    try {
      if (!(this.k3j() === 6))
        return null;
      var firstKey = this.t3j(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.a3n();
      if (!(this.k3j() === 5))
        return null;
      return this.t3j(isLenient);
    }finally {
      this.b3d_1 = positionSnapshot;
      this.a3n();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  k3j() {
    var source = this.u3m();
    var cpos = this.x3m();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.b3d_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  g3j() {
    var current = this.x3m();
    if (current >= this.u3m().length || current === -1)
      return false;
    return this.y3m(charCodeAt(this.u3m(), current));
  }
  q3j(expected) {
    var source = this.u3m();
    var current = this.x3m();
    if (current >= source.length || current === -1) {
      this.b3d_1 = -1;
      this.z3m(expected);
    }
    var c = charCodeAt(source, current);
    this.b3d_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.z3m(expected);
    }
  }
  e3j() {
    var source = this.u3m();
    var cpos = this.x3m();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.b3d_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  x3m() {
    var current = this.b3d_1;
    if (current === -1)
      return current;
    var source = this.u3m();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.b3d_1 = source.length;
            this.r3h('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.b3d_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.s3c_1 = StringBuilder.oa(128);
  }
  p3g(value) {
    this.s3c_1.pf(value);
  }
  j3g(char) {
    this.s3c_1.ma(char);
  }
  l3g(text) {
    this.s3c_1.la(text);
  }
  v3g(text) {
    printQuoted(this.s3c_1, text);
  }
  j1c() {
    this.s3c_1.sf();
  }
  toString() {
    return this.s3c_1.toString();
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.y3d();
  return new JsonImpl(conf, builder.x3d_1);
}
function validateConfiguration($this) {
  if (equals($this.z1n(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.p3c_1);
  $this.z1n().v23(collector);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.r1();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.s1();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.w();
  printQuoted(this_0, k);
  this_0.ma(_Char___init__impl__6a9atx(58));
  this_0.ka(v);
  return this_0.toString();
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.s3e());
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return (new StringJsonLexer(_this__u8e3s4.s3e())).c3f();
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.s3e();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.s3e());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.s3e();
  }
  return tmp;
}
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.u('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.y1j('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.y1j('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.y1j('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.y1j('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.y1j('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().d3f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().e3f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().f3f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().g3f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().h3f_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance === VOID)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance === VOID)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance === VOID)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance === VOID)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance === VOID)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance === VOID)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance === VOID)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.u3('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.u3('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.a3g_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.s1();
}
function defer$o$_get_original_$ref_3cje7k() {
  return (p0) => _get_original__l7ku1m(p0);
}
function Composer_0(sb, json) {
  return json.p3c_1.d3e_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.h3h_1 = (!descriptor.z1l(index) && descriptor.y1l(index).j1l());
  return $this.h3h_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = (_this__u8e3s4, p0_0) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function JsonDecodingException_1(offset, message) {
  return JsonDecodingException.s3f(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.q3h('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.b3d_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.r3h('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, output) {
  return JsonEncodingException.y3h('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.y3h("Value of type '" + keyDescriptor.q1l() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.r1l().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.p3c_1.a3e_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.u1l();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.k1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.d1();
      while (_iterator__ex2g4s.e1()) {
        var element = _iterator__ex2g4s.f1();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.w1l(name);
  if (!(index === -3))
    return index;
  if (!json.p3c_1.k3e_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.s1k(_this__u8e3s4.q1l() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.v1l(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.r1l(), CLASS_getInstance()) ? json.p3c_1.l3e_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.a3i(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.p3c_1.m3e_1 && equals(descriptor.r1l(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).b3(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.a3i(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.wa();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.t1l();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.x1l(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.n1();
      var _iterator__ex2g4s = tmp0.d1();
      while (_iterator__ex2g4s.e1()) {
        var element = _iterator__ex2g4s.f1();
        if (element instanceof JsonNames) {
          destination.b1(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3i_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.v1l(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.c3i(_this__u8e3s4, i, _this__u8e3s4.v1l(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.k1()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.r1l(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).z2(name)) {
    throw JsonException.p3h("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.v1l(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.v1l(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.u2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return () => {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.t1l();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.v1l(tmp_2);
      tmp_1[tmp_2] = $strategy.c3i($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
function resize($this) {
  var newSize = imul($this.f3i_1, 2);
  $this.d3i_1 = copyOf($this.d3i_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.e3i_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.e3i_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.r1l();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.u('Serializer for ' + actualClass.pd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.n3i_1)
    return Unit_instance;
  if (!$this.o3i_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException.u('Serializer for ' + actualClass.pd() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.t1l();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.v1l(i);
      if (name === $this.m3i_1) {
        throw IllegalArgumentException.u('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().i1();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.y3i(writer, json, tmp, tmp$ret$0);
  encoder.d1p(serializer, value);
}
function *_generator_invoke__zhh2q8($this, $this$DeepRecursiveFunction, it, $completion) {
  var tmp0_subject = $this.d3j_1.z3i_1.e3j();
  var tmp;
  if (tmp0_subject === 1) {
    tmp = readValue($this.d3j_1, true);
  } else if (tmp0_subject === 0) {
    tmp = readValue($this.d3j_1, false);
  } else if (tmp0_subject === 6) {
    var tmp_0 = readObject_0($this.d3j_1, $this$DeepRecursiveFunction, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    tmp = tmp_0;
  } else if (tmp0_subject === 8) {
    tmp = readArray($this.d3j_1);
  } else {
    $this.d3j_1.z3i_1.r3h("Can't begin reading element, unexpected token");
  }
  return tmp;
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.z3i_1.f3j(6);
  if ($this.z3i_1.e3j() === 4) {
    $this.z3i_1.r3h('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.wa();
  $l$loop: while ($this.z3i_1.g3j()) {
    var key = $this.a3j_1 ? $this.z3i_1.i3j() : $this.z3i_1.h3j();
    $this.z3i_1.f3j(5);
    var element = $this.j3j();
    // Inline function 'kotlin.collections.set' call
    result.u2(key, element);
    lastToken = $this.z3i_1.k3j();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.z3i_1.r3h('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.z3i_1.f3j(7);
  } else if (lastToken === 4) {
    if (!$this.b3j_1) {
      invalidTrailingComma($this.z3i_1);
    }
    $this.z3i_1.f3j(7);
  }
  return new JsonObject(result);
}
function *_generator_readObject__361wel($this, _this__u8e3s4, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.z3i_1.f3j(6);
  if ($this.z3i_1.e3j() === 4) {
    $this.z3i_1.r3h('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.wa();
  $l$loop: while ($this.z3i_1.g3j()) {
    var key = $this.a3j_1 ? $this.z3i_1.i3j() : $this.z3i_1.h3j();
    $this.z3i_1.f3j(5);
    var tmp = _this__u8e3s4.qn(Unit_instance, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    var element = tmp;
    // Inline function 'kotlin.collections.set' call
    result.u2(key, element);
    lastToken = $this.z3i_1.k3j();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.z3i_1.r3h('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.z3i_1.f3j(7);
  } else if (lastToken === 4) {
    if (!$this.b3j_1) {
      invalidTrailingComma($this.z3i_1);
    }
    $this.z3i_1.f3j(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readObject__361wel.bind(VOID, $this, _this__u8e3s4), $completion);
}
function readArray($this) {
  var lastToken = $this.z3i_1.k3j();
  if ($this.z3i_1.e3j() === 4) {
    $this.z3i_1.r3h('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.n1();
  while ($this.z3i_1.g3j()) {
    var element = $this.j3j();
    result.b1(element);
    lastToken = $this.z3i_1.k3j();
    if (!(lastToken === 4)) {
      var tmp0 = $this.z3i_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.b3d_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.r3h(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.z3i_1.f3j(9);
  } else if (lastToken === 4) {
    if (!$this.b3j_1) {
      invalidTrailingComma($this.z3i_1, 'array');
    }
    $this.z3i_1.f3j(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.a3j_1 || !isString) {
    tmp = $this.z3i_1.i3j();
  } else {
    tmp = $this.z3i_1.h3j();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda_0(this$0) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0);
  var l = ($this$DeepRecursiveFunction, it, $completion) => i.l3j($this$DeepRecursiveFunction, it, $completion);
  l.$arity = 2;
  return l;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.u1l().d1();
  while (_iterator__ex2g4s.e1()) {
    var annotation = _iterator__ex2g4s.f1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.m3j_1;
  }
  return json.p3c_1.i3e_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.k1j()).m2(classDiscriminator)) {
    var baseName = serializer.k1j().q1l();
    var actualName = actualSerializer.k1j().q1l();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException.u3(toString(message));
  }
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.u3(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.u3(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException.u3(toString(message_1));
  }
}
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.p3j_1 === unknownKey) {
    _this__u8e3s4.p3j_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.b1o(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.v3c_1.e3j() === 4) {
    $this.v3c_1.r3h('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.x3c_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.x3c_1 === -1)) {
      hasComma = $this.v3c_1.r3j();
    }
  } else {
    $this.v3c_1.q3j(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.v3c_1.g3j()) {
    if (decodingKey) {
      if ($this.x3c_1 === -1) {
        var tmp0 = $this.v3c_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.b3d_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.r3h(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.v3c_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.b3d_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.r3h(tmp$ret$2, position_0);
        }
      }
    }
    $this.x3c_1 = $this.x3c_1 + 1 | 0;
    tmp = $this.x3c_1;
  } else {
    if (hasComma && !$this.t3c_1.p3c_1.n3e_1) {
      invalidTrailingComma($this.v3c_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.t3c_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.z1l(index);
    var elementDescriptor = descriptor.y1l(index);
    var tmp;
    if (isOptional && !elementDescriptor.j1l()) {
      tmp = $this.v3c_1.s3j(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.r1l(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.j1l()) {
        tmp_0 = $this.v3c_1.s3j(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.v3c_1.t3j($this.z3c_1.b3e_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.p3c_1.e3e_1 && elementDescriptor.j1l();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.v3c_1.h3j();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.v3c_1.r3j();
  while ($this.v3c_1.g3j()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.v3c_1.q3j(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.t3c_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.z3c_1.g3e_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.v3c_1.r3j();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.a3d_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.i3h(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.t3c_1.p3c_1.n3e_1) {
    invalidTrailingComma($this.v3c_1);
  }
  var tmp1_safe_receiver = $this.a3d_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j3h();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.t3c_1) || trySkip($this, $this.y3c_1, key)) {
    $this.v3c_1.v3j($this.z3c_1.b3e_1);
  } else {
    $this.v3c_1.c3d_1.k3i();
    $this.v3c_1.u3j(key);
  }
  return $this.v3c_1.r3j();
}
function decodeListIndex($this) {
  var hasComma = $this.v3c_1.r3j();
  var tmp;
  if ($this.v3c_1.g3j()) {
    if (!($this.x3c_1 === -1) && !hasComma) {
      $this.v3c_1.r3h('Expected end of the array or comma');
    }
    $this.x3c_1 = $this.x3c_1 + 1 | 0;
    tmp = $this.x3c_1;
  } else {
    if (hasComma && !$this.t3c_1.p3c_1.n3e_1) {
      invalidTrailingComma($this.v3c_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.z3c_1.b3e_1) {
    tmp = $this.v3c_1.x3j();
  } else {
    tmp = $this.v3c_1.w3j();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.p3i_1.f3g();
  $this.p1o(discriminator);
  $this.p3i_1.i3g(_Char___init__impl__6a9atx(58));
  $this.p3i_1.h3g();
  $this.p1o(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.s1l() && get_unsignedNumberDescriptors().m2(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.s1l() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).k1j(), serializer_0(Companion_getInstance()).k1j(), serializer_2(Companion_getInstance_1()).k1j(), serializer_3(Companion_getInstance_2()).k1j()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.ma(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.lf(value, lastPos, i);
        _this__u8e3s4.la(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.lf(value, lastPos, value.length);
  else
    _this__u8e3s4.la(value);
  _this__u8e3s4.ma(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
    ESCAPE_MARKERS = this_7;
  }
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.p3k(tag), toString($this.q3k()));
}
function setForceNull($this, descriptor, index) {
  $this.n3l_1 = (!$this.q3e().p3c_1.e3e_1 && !descriptor.z1l(index) && descriptor.y1l(index).j1l());
  return $this.n3l_1;
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.k1j())).j1n(deserializer);
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.r1l();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.y1l(0), _this__u8e3s4.z1n());
        var keyKind = keyDescriptor.r1l();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.p3c_1.c3e_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.r1l(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.s1l()) {
    tmp = carrierDescriptor(_this__u8e3s4.y1l(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.t3m(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.t3m(lastPosition, currentPosition);
  var result = $this.e3d_1.toString();
  $this.e3d_1.rf(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.d3d_1);
  $this.d3d_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.u3m(), $this.b3d_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.v3m(currentPosition);
  if (currentPosition === -1) {
    $this.r3h('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.u3m();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.u3m(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.r3h("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.e3d_1.ma(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.b3d_1 = startPos;
    $this.w3m();
    if (($this.b3d_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.r3h('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.b3d_1);
  }
  $this.e3d_1.ma(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.r3h("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.v3m(start);
  if (current >= charSequenceLength($this.u3m()) || current === -1) {
    $this.r3h('EOF');
  }
  var tmp = $this.u3m();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.r3h("Expected valid boolean literal prefix, but had '" + $this.i3j() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.u3m()) - current | 0) < literalSuffix.length) {
    $this.r3h('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.u3m(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.r3h("Expected valid boolean literal prefix, but had '" + $this.i3j() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.b3d_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().c3n_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().b3n_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.b3n_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.c3n_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance === VOID)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer_0(json, source) {
  return !json.p3c_1.o3e_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.r3c_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.u7(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json', VOID, VOID, [StringFormat]);
initMetadataForObject(Default, 'Default');
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl');
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).j1l = get_isNullable;
protoOf(defer$1).s1l = get_isInline;
protoOf(defer$1).u1l = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
protoOf(JsonSerializersModuleValidator).g24 = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(WriteMode, 'WriteMode');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
//endregion
//region block: exports
export {
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
