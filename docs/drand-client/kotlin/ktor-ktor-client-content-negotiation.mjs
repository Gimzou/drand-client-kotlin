import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList3it5z8td81qkl as ArrayList,
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  captureStack1fzi4aczwc4hg as captureStack,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  emptyList1g2z5xcrvp2zy as emptyList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  toString1pkumu07cwy4m as toString,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  joinToString1cxrrlmo0chqs as joinToString,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  PrimitiveClasses_getInstance2v63zn04dtq03 as PrimitiveClasses_getInstance,
  getKClass3t8tygqu4lcxf as getKClass,
  setOf45ia9pnfhe90 as setOf,
  KtList3hktaavzmj137 as KtList,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstanceq87g3bor693u as Application_getInstance,
  HttpHeaders_getInstanceelogg8fjd54u as HttpHeaders_getInstance,
  Companion_getInstancecf9b3ybko8sp as Companion_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType,
  charset1dribv3ku48b1 as charset,
  NullBody_instance2i6w0hfghwfg0 as NullBody_instance,
  contentType317fn4f991q9a as contentType_0,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
  ContentType1svlpabm9v7iz as ContentType,
} from './ktor-ktor-http.mjs';
import {
  register$default3vdkjcc7m2cj0 as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  deserialize3kqe4vxpbxz1 as deserialize,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
} from './ktor-ktor-serialization.mjs';
import {
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance116ybdh9l8hek as EmptyContent_getInstance,
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  get_request3dwcif5y0fvf1 as get_request,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  ClientSSESession332rusa1q4gim as ClientSSESession,
  ClientSSESessionWithDeserialization37nab8162l18r as ClientSSESessionWithDeserialization,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-core.mjs';
import {
  Charsets_getInstanceqs70pvl4noow as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ConverterRegistration {
  constructor(converter, contentTypeToSend, contentTypeMatcher) {
    this.v3b_1 = converter;
    this.w3b_1 = contentTypeToSend;
    this.x3b_1 = contentTypeMatcher;
  }
}
class ContentNegotiationConfig$defaultMatcher$1 {
  constructor($pattern) {
    this.y3b_1 = $pattern;
  }
  z3b(contentType) {
    return contentType.c2d(this.y3b_1);
  }
}
class ContentNegotiationConfig {
  constructor() {
    this.a3c_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b3c_1 = ArrayList.n1();
    this.c3c_1 = null;
  }
  h3b(contentType, converter, configuration) {
    var matcher = contentType.c2d(Application_getInstance().j2b_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.d3c(contentType, converter, matcher, configuration);
  }
  d3c(contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.b3c_1.b1(registration);
  }
}
class ContentConverterException extends Exception {
  static g3c(message) {
    var $this = this.q3(message);
    captureStack($this, $this.f3c_1);
    return $this;
  }
}
class ContentNegotiation$lambda$slambda {
  constructor($registrations, $this_createClientPlugin, $ignoredTypes) {
    this.i3c_1 = $registrations;
    this.j3c_1 = $this_createClientPlugin;
    this.k3c_1 = $ignoredTypes;
  }
  l3c($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return invoke$convertRequest(this.i3c_1, this.j3c_1, this.k3c_1, request, body, $completion);
  }
  t33(p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.l3c(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  }
}
class ContentNegotiation$lambda$slambda_0 {
  constructor($ignoredTypes, $registrations, $this_createClientPlugin) {
    this.m3c_1 = $ignoredTypes;
    this.n3c_1 = $registrations;
    this.o3c_1 = $this_createClientPlugin;
  }
  s33($this$transformResponseBody, response, body, info, $completion) {
    var tmp0_elvis_lhs = contentType_0(response);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var contentType = tmp;
    var charset = suitableCharset(get_request(response).c2i());
    return invoke$convertResponse(this.m3c_1, this.n3c_1, this.o3c_1, get_request(response).h2w(), info, body, contentType, charset, $completion);
  }
  t33(p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.s33(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  }
}
class JsonContentTypeMatcher {
  z3b(contentType) {
    if (contentType.c2d(Application_getInstance().j2b_1)) {
      return true;
    }
    var value = contentType.b2d().toString();
    return Application_getInstance().d2c(value) && endsWith(value, '+json', true);
  }
}
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ExcludedContentTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ExcludedContentTypes;
}
var ExcludedContentTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = () => new ContentNegotiationConfig();
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.n30_1.b3c_1;
  var ignoredTypes = $this$createClientPlugin.n30_1.a3c_1;
  $this$createClientPlugin.i36(ContentNegotiation$lambda$slambda_1(registrations, $this$createClientPlugin, ignoredTypes));
  $this$createClientPlugin.m33(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin));
  return Unit_instance;
}
function *_generator_invoke$convertRequest__66fw6k(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
  var tmp;
  if (request.k2u_1.r24(get_ExcludedContentTypes())) {
    var excluded = request.k2u_1.p24(get_ExcludedContentTypes());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.n1();
    var _iterator__ex2g4s = registrations.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(excluded, Collection)) {
          tmp_0 = excluded.k1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = excluded.d1();
        while (_iterator__ex2g4s_0.e1()) {
          var element_0 = _iterator__ex2g4s_0.f1();
          if (element.w3b_1.c2d(element_0)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        destination.b1(element);
      }
    }
    tmp = destination;
  } else {
    tmp = registrations;
  }
  var requestRegistrations = tmp;
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = request.h2u_1.j26(HttpHeaders_getInstance().h2d_1);
  var acceptHeaders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s_1 = requestRegistrations.d1();
  while (_iterator__ex2g4s_1.e1()) {
    var element_1 = _iterator__ex2g4s_1.f1();
    var tmp$ret$6;
    $l$block_2: {
      // Inline function 'kotlin.collections.none' call
      var tmp_1;
      if (isInterface(acceptHeaders, Collection)) {
        tmp_1 = acceptHeaders.k1();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$6 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_2 = acceptHeaders.d1();
      while (_iterator__ex2g4s_2.e1()) {
        var element_2 = _iterator__ex2g4s_2.f1();
        if (Companion_getInstance().fo(element_2).c2d(element_1.w3b_1)) {
          tmp$ret$6 = false;
          break $l$block_2;
        }
      }
      tmp$ret$6 = true;
    }
    if (tmp$ret$6) {
      var qValue = $this_createClientPlugin.n30_1.c3c_1;
      var contentTypeToSend = qValue == null ? element_1.w3b_1 : element_1.w3b_1.z2c('q', qValue.toString());
      get_LOGGER().k2a('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + request.f2u_1.toString());
      accept(request, contentTypeToSend);
    }
  }
  var tmp_2;
  if (body instanceof OutgoingContent) {
    tmp_2 = true;
  } else {
    var tmp$ret$10;
    $l$block_4: {
      // Inline function 'kotlin.collections.any' call
      var tmp_3;
      if (isInterface(ignoredTypes, Collection)) {
        tmp_3 = ignoredTypes.k1();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$10 = false;
        break $l$block_4;
      }
      var _iterator__ex2g4s_3 = ignoredTypes.d1();
      while (_iterator__ex2g4s_3.e1()) {
        var element_3 = _iterator__ex2g4s_3.f1();
        if (element_3.qd(body)) {
          tmp$ret$10 = true;
          break $l$block_4;
        }
      }
      tmp$ret$10 = false;
    }
    tmp_2 = tmp$ret$10;
  }
  if (tmp_2) {
    get_LOGGER().k2a('Body type ' + toString(getKClassFromExpression(body)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + request.f2u_1.toString() + '.'));
    return null;
  }
  var tmp0_elvis_lhs_0 = contentType(request);
  var tmp_4;
  if (tmp0_elvis_lhs_0 == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().k2a("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + request.f2u_1.toString() + '.');
    return null;
  } else {
    tmp_4 = tmp0_elvis_lhs_0;
  }
  var contentType_0 = tmp_4;
  if (body instanceof Unit) {
    get_LOGGER().k2a('Sending empty body for ' + request.f2u_1.toString());
    request.h2u_1.q26(HttpHeaders_getInstance().z2d_1);
    return EmptyContent_getInstance();
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.n1();
  var _iterator__ex2g4s_4 = registrations.d1();
  while (_iterator__ex2g4s_4.e1()) {
    var element_4 = _iterator__ex2g4s_4.f1();
    if (element_4.x3b_1.z3b(contentType_0)) {
      destination_0.b1(element_4);
    }
  }
  // Inline function 'kotlin.takeIf' call
  var tmp_5;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.k1()) {
    tmp_5 = destination_0;
  } else {
    tmp_5 = null;
  }
  var tmp1_elvis_lhs = tmp_5;
  var tmp_6;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().k2a('None of the registered converters match request Content-Type=' + contentType_0.toString() + '. ' + ('Skipping ContentNegotiation for ' + request.f2u_1.toString() + '.'));
    return null;
  } else {
    tmp_6 = tmp1_elvis_lhs;
  }
  var matchingRegistrations = tmp_6;
  if (request.b37() == null) {
    get_LOGGER().k2a('Request has unknown body type. Skipping ContentNegotiation for ' + request.f2u_1.toString() + '.');
    return null;
  }
  request.h2u_1.q26(HttpHeaders_getInstance().z2d_1);
  var tmp$ret$23;
  $l$block_5: {
    // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
    var _iterator__ex2g4s_5 = matchingRegistrations.d1();
    while (_iterator__ex2g4s_5.e1()) {
      var element_5 = _iterator__ex2g4s_5.f1();
      var tmp0_elvis_lhs_1 = charset(contentType_0);
      var tmp_7 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().h1i_1 : tmp0_elvis_lhs_1;
      var tmp_8 = ensureNotNull(request.b37());
      // Inline function 'kotlin.takeIf' call
      var tmp_9;
      if (!equals(body, NullBody_instance)) {
        tmp_9 = body;
      } else {
        tmp_9 = null;
      }
      var tmp$ret$21 = tmp_9;
      var tmp_10 = element_5.v3b_1.h3c(contentType_0, tmp_7, tmp_8, tmp$ret$21, $completion);
      if (tmp_10 === get_COROUTINE_SUSPENDED())
        tmp_10 = yield tmp_10;
      var result = tmp_10;
      if (!(result == null)) {
        get_LOGGER().k2a('Converted request body using ' + toString(element_5.v3b_1) + ' for ' + request.f2u_1.toString());
      }
      var result_0 = result;
      if (!(result_0 == null)) {
        tmp$ret$23 = result_0;
        break $l$block_5;
      }
    }
    tmp$ret$23 = null;
  }
  var tmp2_elvis_lhs = tmp$ret$23;
  var tmp_11;
  if (tmp2_elvis_lhs == null) {
    var tmp_12 = "Can't convert " + toString(body) + ' with contentType ' + contentType_0.toString() + ' using converters ';
    throw ContentConverterException.g3c(tmp_12 + joinToString(matchingRegistrations, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
  } else {
    tmp_11 = tmp2_elvis_lhs;
  }
  var serializedContent = tmp_11;
  return serializedContent;
}
function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke$convertRequest__66fw6k.bind(VOID, registrations, $this_createClientPlugin, ignoredTypes, request, body), $completion);
}
function *_generator_invoke$convertResponse__5lbrfk(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().h1i_1 : charset;
  if (!isInterface(body, ByteReadChannel)) {
    get_LOGGER().k2a('Response body is already transformed. Skipping ContentNegotiation for ' + requestUrl.toString() + '.');
    return null;
  }
  if (ignoredTypes.m2(info.y29_1)) {
    get_LOGGER().k2a('Response body type ' + toString(info.y29_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList.n1();
  var _iterator__ex2g4s = registrations.d1();
  while (_iterator__ex2g4s.e1()) {
    var element = _iterator__ex2g4s.f1();
    if (element.x3b_1.z3b(responseContentType)) {
      destination.b1(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.l1(collectionSizeOrDefault(destination, 10));
  var _iterator__ex2g4s_0 = destination.d1();
  while (_iterator__ex2g4s_0.e1()) {
    var item = _iterator__ex2g4s_0.f1();
    var tmp$ret$3 = item.v3b_1;
    destination_0.b1(tmp$ret$3);
  }
  // Inline function 'kotlin.takeIf' call
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!destination_0.k1()) {
    tmp = destination_0;
  } else {
    tmp = null;
  }
  var tmp0_elvis_lhs = tmp;
  var tmp_0;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    get_LOGGER().k2a('None of the registered converters match response with Content-Type=' + responseContentType.toString() + '. ' + ('Skipping ContentNegotiation for ' + requestUrl.toString() + '.'));
    return null;
  } else {
    tmp_0 = tmp0_elvis_lhs;
  }
  var suitableConverters = tmp_0;
  var tmp_1 = deserialize(suitableConverters, body, info, charset, $completion);
  if (tmp_1 === get_COROUTINE_SUSPENDED())
    tmp_1 = yield tmp_1;
  var result = tmp_1;
  if (!isInterface(result, ByteReadChannel)) {
    get_LOGGER().k2a('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + requestUrl.toString() + '.');
  }
  return result;
}
function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().h1i_1 : charset;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke$convertResponse__5lbrfk.bind(VOID, ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset), $completion);
}
function ContentNegotiation$lambda$slambda_1($registrations, $this_createClientPlugin, $ignoredTypes) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes);
  var l = ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) => i.l3c($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin) {
  var i = new ContentNegotiation$lambda$slambda_0($ignoredTypes, $registrations, $this_createClientPlugin);
  var l = ($this$transformResponseBody, response, body, info, $completion) => i.s33($this$transformResponseBody, response, body, info, $completion);
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.v3b_1);
}
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().af(), PrimitiveClasses_getInstance().we(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent), getKClass(ClientSSESession), getKClass(ClientSSESessionWithDeserialization)]);
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'ExcludedContentTypesAttr';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp = getKClass(KtList);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_0;
    try {
      tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$0 = tmp_0;
    var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
    ExcludedContentTypes = new AttributeKey(name, tmp$ret$1);
    var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
  }
}
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet.g1();
  }
}
//region block: post-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
protoOf(ContentNegotiationConfig).i3b = register$default;
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException');
initMetadataForLambda(ContentNegotiation$lambda$slambda, VOID, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_0, VOID, VOID, [4]);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-content-negotiation.mjs.map
