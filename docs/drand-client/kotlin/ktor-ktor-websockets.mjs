import {
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  compareTo3ankvs086tmwq as compareTo,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  createThis2j2avj17cvnv2 as createThis,
} from './kotlin-kotlin-stdlib.mjs';
import {
  toByteArray1i3ns5jnoqlv6 as toByteArray,
  writeText19qfzm98fbm4l as writeText,
} from './ktor-ktor-io.mjs';
import {
  Buffergs925ekssbch as Buffer,
  readByteArray1ri21h2rciakw as readByteArray,
} from './kotlinx-io-kotlinx-io-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap.xa(capacity);
    var _iterator__ex2g4s = this_0.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      var tmp$ret$0 = element.p2o_1;
      destination.u2(tmp$ret$0, element);
    }
    tmp.q2o_1 = destination;
    this.r2o_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  s2o(code) {
    return this.q2o_1.b3(code);
  }
}
class Codes extends Enum {
  constructor(name, ordinal, code) {
    super(name, ordinal);
    this.p2o_1 = code;
  }
}
class CloseReason {
  constructor(code, message) {
    this.t2o_1 = code;
    this.u2o_1 = message;
  }
  v2o() {
    return Companion_getInstance().s2o(this.t2o_1);
  }
  toString() {
    var tmp0_elvis_lhs = this.v2o();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.t2o_1 : tmp0_elvis_lhs) + ', message=' + this.u2o_1 + ')';
  }
  hashCode() {
    var result = this.t2o_1;
    result = imul(result, 31) + getStringHashCode(this.u2o_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.t2o_1 === other.t2o_1))
      return false;
    if (!(this.u2o_1 === other.u2o_1))
      return false;
    return true;
  }
}
class NonDisposableHandle {
  tx() {
    return Unit_instance;
  }
  toString() {
    return 'NonDisposableHandle';
  }
  hashCode() {
    return 207988788;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.d1();
      if (!iterator.e1()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.f1();
      if (!iterator.e1()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.z2o_1;
      do {
        var e = iterator.f1();
        var v = e.z2o_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.e1());
      tmp$ret$0 = maxElem;
    }
    tmp.a2p_1 = ensureNotNull(tmp$ret$0).z2o_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.a2p_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.d1();
        while (_iterator__ex2g4s.e1()) {
          var element = _iterator__ex2g4s.f1();
          if (element.z2o_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.b2p_1 = tmp_3;
  }
}
class FrameType extends Enum {
  constructor(name, ordinal, controlFrame, opcode) {
    super(name, ordinal);
    this.y2o_1 = controlFrame;
    this.z2o_1 = opcode;
  }
}
class Frame {
  static r2p(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_1();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    var $this = createThis(this);
    $this.k2p_1 = fin;
    $this.l2p_1 = frameType;
    $this.m2p_1 = data;
    $this.n2p_1 = disposableHandle;
    $this.o2p_1 = rsv1;
    $this.p2p_1 = rsv2;
    $this.q2p_1 = rsv3;
    return $this;
  }
  toString() {
    return 'Frame ' + this.l2p_1.toString() + ' (fin=' + this.k2p_1 + ', buffer len = ' + this.m2p_1.length + ')';
  }
}
class Binary extends Frame {
  static j2p(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.r2p(fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static s2p(fin, data) {
    return this.j2p(fin, data, false, false, false);
  }
}
class Text extends Frame {
  static a2q(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.r2p(fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static b2q(fin, data) {
    return this.a2q(fin, data, false, false, false);
  }
  static c2q(text) {
    return this.b2q(true, toByteArray(text));
  }
}
class Close extends Frame {
  static k2q(data) {
    return this.r2p(true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  static l2q(reason) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.qs(reason.t2o_1);
    writeText(builder, reason.u2o_1);
    return this.m2q(builder);
  }
  static m2q(packet) {
    return this.k2q(readByteArray(packet));
  }
  static n2q() {
    return this.k2q(Companion_getInstance_1().o2q_1);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    this.o2q_1 = new Int8Array(0);
  }
}
//endregion
var Codes_NORMAL_instance;
var Codes_GOING_AWAY_instance;
var Codes_PROTOCOL_ERROR_instance;
var Codes_CANNOT_ACCEPT_instance;
var Codes_CLOSED_ABNORMALLY_instance;
var Codes_NOT_CONSISTENT_instance;
var Codes_VIOLATED_POLICY_instance;
var Codes_TOO_BIG_instance;
var Codes_NO_EXTENSION_instance;
var Codes_INTERNAL_ERROR_instance;
var Codes_SERVICE_RESTART_instance;
var Codes_TRY_AGAIN_LATER_instance;
var Companion_instance;
function Companion_getInstance() {
  Codes_initEntries();
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function values() {
  return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var Codes_entriesInitialized;
function Codes_initEntries() {
  if (Codes_entriesInitialized)
    return Unit_instance;
  Codes_entriesInitialized = true;
  Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
  Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
  Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
  Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
  Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
  Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
  Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
  Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
  Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
  Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
  Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
  Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
  Companion_getInstance();
}
var $ENTRIES;
function Codes_NORMAL_getInstance() {
  Codes_initEntries();
  return Codes_NORMAL_instance;
}
function Codes_GOING_AWAY_getInstance() {
  Codes_initEntries();
  return Codes_GOING_AWAY_instance;
}
function Codes_PROTOCOL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_PROTOCOL_ERROR_instance;
}
function Codes_CANNOT_ACCEPT_getInstance() {
  Codes_initEntries();
  return Codes_CANNOT_ACCEPT_instance;
}
function Codes_CLOSED_ABNORMALLY_getInstance() {
  Codes_initEntries();
  return Codes_CLOSED_ABNORMALLY_instance;
}
function Codes_NOT_CONSISTENT_getInstance() {
  Codes_initEntries();
  return Codes_NOT_CONSISTENT_instance;
}
function Codes_VIOLATED_POLICY_getInstance() {
  Codes_initEntries();
  return Codes_VIOLATED_POLICY_instance;
}
function Codes_TOO_BIG_getInstance() {
  Codes_initEntries();
  return Codes_TOO_BIG_instance;
}
function Codes_NO_EXTENSION_getInstance() {
  Codes_initEntries();
  return Codes_NO_EXTENSION_instance;
}
function Codes_INTERNAL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_INTERNAL_ERROR_instance;
}
function Codes_SERVICE_RESTART_getInstance() {
  Codes_initEntries();
  return Codes_SERVICE_RESTART_instance;
}
function Codes_TRY_AGAIN_LATER_getInstance() {
  Codes_initEntries();
  return Codes_TRY_AGAIN_LATER_instance;
}
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  return NonDisposableHandle_instance;
}
var FrameType_TEXT_instance;
var FrameType_BINARY_instance;
var FrameType_CLOSE_instance;
var FrameType_PING_instance;
var FrameType_PONG_instance;
var Companion_instance_0;
function Companion_getInstance_0() {
  FrameType_initEntries();
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function values_0() {
  return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
}
function get_entries_0() {
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var FrameType_entriesInitialized;
function FrameType_initEntries() {
  if (FrameType_entriesInitialized)
    return Unit_instance;
  FrameType_entriesInitialized = true;
  FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
  FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
  FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
  FrameType_PING_instance = new FrameType('PING', 3, true, 9);
  FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
  Companion_getInstance_0();
}
var $ENTRIES_0;
function FrameType_TEXT_getInstance() {
  FrameType_initEntries();
  return FrameType_TEXT_instance;
}
function FrameType_BINARY_getInstance() {
  FrameType_initEntries();
  return FrameType_BINARY_instance;
}
function FrameType_CLOSE_getInstance() {
  FrameType_initEntries();
  return FrameType_CLOSE_instance;
}
function FrameType_PING_getInstance() {
  FrameType_initEntries();
  return FrameType_PING_instance;
}
function FrameType_PONG_getInstance() {
  FrameType_initEntries();
  return FrameType_PONG_instance;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Codes, 'Codes');
initMetadataForClass(CloseReason, 'CloseReason');
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
initMetadataForCompanion(Companion_0);
initMetadataForClass(FrameType, 'FrameType');
initMetadataForClass(Frame, 'Frame');
initMetadataForClass(Binary, 'Binary');
initMetadataForClass(Text, 'Text');
initMetadataForClass(Close, 'Close', Close.n2q);
initMetadataForCompanion(Companion_1);
//endregion
//region block: init
NonDisposableHandle_instance = new NonDisposableHandle();
//endregion
//region block: exports
export {
  Codes_CLOSED_ABNORMALLY_getInstance as Codes_CLOSED_ABNORMALLY_getInstance36fk4x8bui0mi,
  Codes_NORMAL_getInstance as Codes_NORMAL_getInstance2p2d63s1iongn,
  Companion_getInstance as Companion_getInstance3hj6iykoiauw8,
  CloseReason as CloseReason10cphaqpp3ct7,
  Binary as Binary3tlzyfojm51s4,
  Close as Close3tx65evcwi73t,
  Text as Text3e6ukp9joohql,
};
//endregion

//# sourceMappingURL=ktor-ktor-websockets.mjs.map
