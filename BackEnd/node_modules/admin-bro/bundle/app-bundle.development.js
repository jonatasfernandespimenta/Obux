var AdminBro = (function (React, reactRedux, reactRouterDom, styled, reactI18next, i18n, DesignSystem, reactRouter, axios, flat$1, Select, Select$1, reactDom, redux) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
	var DesignSystem__namespace = /*#__PURE__*/_interopNamespace(DesignSystem);
	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
	var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
	var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Base Params for a any function
	 * @alias ActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    var _globalAny$REDUX_STAT;

	    return options || ((_globalAny$REDUX_STAT = globalAny.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths);
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }
	  /**
	   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  editUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'edit',
	      search
	    });
	  }
	  /**
	   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  showUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'show',
	      search
	    });
	  }
	  /**
	   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  deleteUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'delete',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  newUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'new',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  listUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'list',
	      search
	    });
	  }
	  /**
	   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {Array<string>} recordIds   separated by comma records
	   * @param {string} [search]        optional query string
	   */


	  bulkDeleteUrl(resourceId, recordIds, search) {
	    return this.bulkActionUrl({
	      resourceId,
	      recordIds,
	      actionName: 'bulkDelete',
	      search
	    });
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   * @param   {string}  [options.search]        optional query string
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {Array<string>}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @return {string}
	   */


	  assetPath(asset) {
	    if (this.options.assetsCDN) {
	      const url = new URL(asset, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	/**
	 * @private
	 *
	 * @classdesc
	 * Overrides one of the component form AdminBro core when user pass its name to
	 * {@link AdminBro.bundle} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * AdminBro.bundle('./path/to/component', 'SidebarFooter')
	 */
	function allowOverride(OriginalComponent, name) {
	  // ssr
	  if (typeof window === 'undefined') {
	    return OriginalComponent;
	  }

	  const WrapperComponent = props => {
	    let globalAny = window;
	    globalAny = window;
	    let Component = OriginalComponent;

	    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
	      Component = globalAny.AdminBro.UserComponents[name];
	      return /*#__PURE__*/React__default['default'].createElement(Component, _extends_1({}, props, {
	        OriginalComponent: OriginalComponent
	      }));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Component, props);
	  };

	  return WrapperComponent;
	}

	const StyledLogo = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__StyledLogo",
	  componentId: "sc-1ozeetj-0"
	})(["text-align:center;display:flex;align-content:center;justify-content:center;flex-shrink:0;padding:", " ", " ", ";text-decoration:none;& > h1{text-decoration:none;font-weight:", ";font-size:", ";color:", ";font-size:", ";line-height:", ";}& > img{max-width:170px;}&:hover h1{color:", ";}"], DesignSystem.themeGet('space', 'lg'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('colors', 'grey80'), DesignSystem.themeGet('fontSizes', 'xl'), DesignSystem.themeGet('lineHeights', 'xl'), DesignSystem.themeGet('colors', 'primary100'));
	const h = new ViewHelpers();

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  return /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
	    className: DesignSystem.cssClass('Logo'),
	    to: h.dashboardUrl()
	  }, logo ? /*#__PURE__*/React__default['default'].createElement("img", {
	    src: logo,
	    alt: companyName
	  }) : /*#__PURE__*/React__default['default'].createElement("h1", null, companyName));
	};

	var SidebarBranding$1 = allowOverride(SidebarBranding, 'SidebarBranding');

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$1 = '[' + rsComboRange$1 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$2 + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = _createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst_1(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  var _realOptions$defaultV;

	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return (_realOptions$defaultV = realOptions.defaultValue) !== null && _realOptions$defaultV !== void 0 ? _realOptions$defaultV : startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'admin-bro'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * @classdesc
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 * @returns {UseTranslationResponse}
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = reactI18next.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	const h$1 = new ViewHelpers();

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();

	  if (!pages || !pages.length) {
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
	  }

	  const isActive = page => !!location.pathname.match(`/pages/${page.name}`);

	  const elements = pages.map(page => ({
	    id: page.name,
	    label: page.name,
	    isSelected: isActive(page),
	    icon: page.icon,
	    href: h$1.pageUrl(page.name),
	    onClick: (event, element) => {
	      event.preventDefault();

	      if (element.href) {
	        history.push(element.href);
	      }
	    }
	  }));
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('pages'),
	    elements: elements
	  });
	};

	const SidebarFooter = () => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	  mt: "lg"
	}, /*#__PURE__*/React__default['default'].createElement(DesignSystem.SoftwareBrothers, null));

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminBro API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'admin-bro'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 * @hideconstructor
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios__default['default'].create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    var _globalAny$REDUX_STAT;

	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, (_globalAny$REDUX_STAT = globalAny$1.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
	   * @param   {String}  options.query       query string
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', (recordIds || []).join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<any>}             response from the handler function defined in
	   *                                     {@link AdminBroOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<any>}                    response from the handler of given page
	   *                                            defined in {@link AdminBroOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const FORM_VALUE_NULL = '__FORM_VALUE_NULL__';
	const FORM_VALUE_EMPTY_OBJECT = '__FORM_VALUE_EMPTY_OBJECT__';
	const FORM_VALUE_EMPTY_ARRAY = '__FORM_VALUE_EMPTY_ARRAY__';

	const isObjectOrArray = value => typeof value === 'object' && value.constructor !== File && !(value instanceof Date);
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * FormData is required because we are sending files via the wire. But it has limitations.
	 * Namely it can only transport files and strings. That is why we have to convert some
	 * standard types like NULL to constants so they can be property converted back by the backend.
	 * And thus properly handled.
	 *
	 * @private
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */


	function paramsToFormData(params) {
	  const formData = new FormData(); // Assume that params are flatted

	  Object.entries(params).forEach(([key, value]) => {
	    // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
	    // them changed to "[object Object]" we have to set them to empty strings.
	    if (value === null) {
	      return formData.set(key, FORM_VALUE_NULL);
	    } // File objects has to go through because they are handled by FormData


	    if (isObjectOrArray(value)) {
	      if (Array.isArray(value)) {
	        return formData.set(key, FORM_VALUE_EMPTY_ARRAY);
	      }

	      return formData.set(key, FORM_VALUE_EMPTY_OBJECT);
	    } // Rest goes as a standard value


	    return formData.set(key, value);
	  });
	  return formData;
	}

	const ADD_NOTICE = 'ADD_NOTICE';
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: ADD_NOTICE,
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});

	/**
	 * @classdesc
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```javascript
	 * import { useNotice, Button } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 */
	const useNotice = () => {
	  const dispatch = reactRedux.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	const DELIMITER = '.';

	// this is the regex used to find all existing properties starting with a key
	const propertyKeyRegex = (propertyPath, options) => {
	  const delimiter = new RegExp(`\\${DELIMITER}`, 'g');
	  const escapedDelimiter = `\\${DELIMITER}`; // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
	  // and this is intentional because user can give an one index in property path for with deeply
	  // nested arrays

	  const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
	  const path = (options === null || options === void 0 ? void 0 : options.includeAllSiblings) ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
	  return new RegExp(`^${path}($|${escapedDelimiter})`, '');
	};

	/**
	 * @load ./select-params.doc.md
	 * @memberof flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @param {GetOptions} [options]
	 * @returns {FlattenParams}
	 */
	const selectParams = (params, properties, options) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath, options);
	    const filtered = Object.keys(params) // filter all keys which starts with property path
	    .filter(key => key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	    return { ...globalMemo,
	      ...filtered
	    };
	  }, {});
	  return selected;
	};

	/**
	 * @load ./filter-out-params.doc.md
	 * @memberof flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @returns {FlattenParams}
	 */
	const filterOutParams = (params, properties) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath);
	    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	  }, params);
	};

	/**
	 * @memberof flat
	 * @alias PathToPartsOptions
	 */

	/**
	 * @load ./path-to-parts.doc.md
	 * @param   {string}              propertyPath
	 * @param   {PathToPartsOptions}  options
	 * @returns  {PathParts}
	 *
	 * @memberof flat
	 * @alias pathToParts
	 */
	const pathToParts = (propertyPath, options = {}) => {
	  let allParts = propertyPath.split('.');

	  if (options.skipArrayIndexes) {
	    // eslint-disable-next-line no-restricted-globals
	    allParts = allParts.filter(part => isNaN(+part));
	  }

	  return allParts.reduce((memo, part) => {
	    if (memo.length) {
	      return [...memo, [memo[memo.length - 1], part].join('.')];
	    }

	    return [part];
	  }, []);
	};

	const isObject = value => {
	  // Node environment
	  if (typeof File === 'undefined') {
	    return typeof value === 'object' && value !== null;
	  } // Window environment


	  return typeof value === 'object' && !(value instanceof File) && value !== null;
	};
	/**
	 * @load ./set.doc.md
	 * @memberof flat
	 * @param {FlattenParams} params
	 * @param {string} propertyPath
	 * @param {any} [value]       if not give function will only try to remove old keys
	 * @returns {FlattenParams}
	 */


	const set = (params = {}, propertyPath, value) => {
	  const regex = propertyKeyRegex(propertyPath); // remove all existing keys

	  const paramsCopy = Object.keys(params).filter(key => !key.match(regex)).reduce((memo, key) => {
	    memo[key] = params[key];
	    return memo;
	  }, {});

	  if (typeof value !== 'undefined') {
	    if (isObject(value) && !(value instanceof Date)) {
	      const flattened = flat$1.flatten(value);

	      if (Object.keys(flattened).length) {
	        Object.keys(flattened).forEach(key => {
	          paramsCopy[`${propertyPath}${DELIMITER}${key}`] = flattened[key];
	        });
	      } else if (Array.isArray(value)) {
	        paramsCopy[propertyPath] = [];
	      } else {
	        paramsCopy[propertyPath] = {};
	      }
	    } else {
	      paramsCopy[propertyPath] = value;
	    } // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
	    // nested should be removed


	    const parts = pathToParts(propertyPath).slice(0, -1);

	    if (parts.length) {
	      return Object.keys(paramsCopy).filter(key => !parts.includes(key)).reduce((memo, key) => {
	        memo[key] = paramsCopy[key];
	        return memo;
	      }, {});
	    }
	  }

	  return paramsCopy;
	};

	const TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
	/**
	 * @load ./get.doc.md
	 * @memberof flat
	 * @param {FlattenParams}   params      flatten params from which property has to be taken
	 * @param {string}          [propertyPath]  name of the property
	 * @param {GetOptions}      options     options
	 * @returns {any}                       when property key exists directly it returns what is inside,
	 *                                      otherwise it tries to find any nested objects and returns
	 *                                      them
	 */

	const get = (params = {}, propertyPath, options) => {
	  if (!propertyPath) {
	    return flat$1.unflatten(params);
	  } // when object has this key - simply return it
	  // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
	  // undefined and in such case if would pass and function would return [undefined]


	  if (Object.keys(params).find(key => key === propertyPath)) {
	    return params[propertyPath];
	  }

	  const regex = propertyKeyRegex(propertyPath, options);
	  const selectedParams = selectParams(params, propertyPath, options);
	  const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index) => {
	    let newKey = key.replace(regex, `${TEMP_HOLDING_KEY}${DELIMITER}`); // when user wants to take allSiblings we have to fix the indexes so nested items from
	    // different siblings don't overlap
	    //
	    // Example for key `nested.1.el`:
	    //  'nested.0.el.0.value': 'val0.0',
	    //  'nested.0.el.1.value': 'val0.1',
	    //  'nested.1.el.0.value': 'val1',
	    //  'nested.1.el.1.value': 'val2',
	    //
	    // has to be changed to:
	    //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
	    //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
	    //  'TEMP_HOLDING_KEY.2.value': 'val1',
	    //  'TEMP_HOLDING_KEY.3.value': 'val2',

	    if (options === null || options === void 0 ? void 0 : options.includeAllSiblings) {
	      newKey = newKey.replace(new RegExp(`${TEMP_HOLDING_KEY}\\${DELIMITER}(\\d+)`), `${TEMP_HOLDING_KEY}.${index}`);
	    }

	    memo[newKey] = selectedParams[key];
	    return memo;
	  }, {});

	  if (Object.keys(nestedProperties).length) {
	    return flat$1.unflatten(nestedProperties)[TEMP_HOLDING_KEY];
	  }

	  return undefined;
	};

	/**
	 * Merges params together and returns flatten result
	 *
	 * @param {any} params
	 * @param {Array<any>} ...mergeParams
	 * @returns {FlattenParams}
	 * @memberof flat
	 */

	const merge = (params = {}, ...mergeParams) => {
	  const flattenParams = flat$1.flatten(params); // reverse because we merge from right

	  return mergeParams.reverse().reduce((globalMemo, mergeParam) => Object.keys(mergeParam).reduce((memo, key) => set(memo, key, mergeParam[key]), globalMemo), flattenParams);
	};

	/**
	 * @load ./remove-path.doc.md
	 * @memberof flat
	 * @param {FlattenParams} params
	 * @param {...string} properties
	 * @returns {FlattenParams}
	 */

	const removePath = (params, path) => {
	  // by default simply filter out elements from the object
	  let filtered = filterOutParams(params, path); // reverse means that we iterate from the closes parent

	  const parentPaths = pathToParts(path).reverse(); // but if one of the parent is an array

	  parentPaths.find((parentPath, parentIndex) => {
	    const parent = get(params, parentPath);

	    if (Array.isArray(parent)) {
	      // previous element is stringified index like 'property.1'
	      const previousPaths = parentPaths[parentIndex - 1].split(DELIMITER); // so this is the index: 1

	      const previousPathIndex = previousPaths[previousPaths.length - 1];
	      parent.splice(+previousPathIndex, 1);
	      filtered = set(params, parentPath, parent); // this works just for the firstly found array item, because in case of removing the last one
	      // it leaves `[]` as a value.

	      return true;
	    }

	    return false;
	  });
	  return filtered;
	};

	/**
	 * @namespace flat
	 * @name flat
	 * @new in version 3.3
	 * @load ./flat.doc.md
	 */
	const flat = {
	  /**
	   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  flatten: flat$1.flatten,

	  /**
	   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  unflatten: flat$1.unflatten,
	  set,
	  get,
	  selectParams,
	  filterOutParams,
	  removePath,
	  DELIMITER,
	  pathToParts,
	  merge
	};

	/**
	 * HOF returning a function which takes a record and returns an updated record.
	 * This way we can pass this to setState in react, which takes old state
	 * (in our case previousRecord) as an argument.
	 *
	 * Function is used when to the {@link OnPropertyChange} callback, user passes
	 * key (property name) and the value (followed by an optional selectedRecord).
	 *
	 * The responsibility of the function is to:
	 * - clear old values under passed key: so when user passes property === `some.key`
	 *   function removes `some.key.1`, `some.key.2` etc
	 * - sets new value under the passed key for primitive types
	 * - in case of objects - it flattens them first and then sets all the resulted values
	 *   under the path provided in the property argument
	 * - it fills value in RecordJSON#populated when selectedRecord is given
	 * - finally it invalidates populated for given property
	 *
	 *
	 * @param {string}      property        property that must be updated, supports nesting
	 *                                      with dots
	 * @param {any}         value           value that must be set, undefined or null if
	 *                                      deleting, will be flattened
	 * @param {RecordJSON}  selectedRecord  if value is reference ID, this must be a record
	 *                                      it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, selectedRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = flat.set(previousRecord.params, property, value);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  }

	  if (selectedRecord) {
	    populatedCopy[property] = selectedRecord;
	    populatedModified = true;
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined' // user can pass property and omit value. This makes sense when
	// third argument of the function (selectedRecord) is passed to onChange
	// callback
	&& !(typeof propertyOrRecord === 'string') // we assume that only params has to be given
	&& propertyOrRecord.params);

	const filterRecordParams = function (record, options = {}) {
	  if (options.includeParams && record) {
	    return { ...record,
	      params: flat.selectParams(record.params || {}, options.includeParams)
	    };
	  }

	  return record;
	};
	const isPropertyPermitted = (propertyName, options = {}) => {
	  const {
	    includeParams
	  } = options;

	  if (includeParams) {
	    const parts = flat.pathToParts(propertyName, {
	      skipArrayIndexes: true
	    });
	    return parts.some(part => includeParams.includes(part));
	  }

	  return true;
	};

	const api = new ApiClient();
	/**
	 * @load ./use-record.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {RecordJSON} [initialRecord],
	 * @param {string} resourceId
	 * @param {UseRecordOptions} [options]
	 * @return {UseRecordResult}
	 */

	const useRecord = (initialRecord, resourceId, options) => {
	  var _filteredRecord$param, _initialRecord$errors, _initialRecord$popula;

	  // setting up state
	  const [loading, setLoading] = React.useState(false);
	  const [isSynced, setIsSynced] = React.useState(true);
	  const [progress, setProgress] = React.useState(0);
	  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
	  const [record, setRecord] = React.useState({ ...filteredRecord,
	    params: (_filteredRecord$param = filteredRecord === null || filteredRecord === void 0 ? void 0 : filteredRecord.params) !== null && _filteredRecord$param !== void 0 ? _filteredRecord$param : {},
	    errors: (_initialRecord$errors = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && _initialRecord$errors !== void 0 ? _initialRecord$errors : {},
	    populated: (_initialRecord$popula = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && _initialRecord$popula !== void 0 ? _initialRecord$popula : {}
	  }); // it keeps the same format as useState function which can take either value or function

	  const setFilteredRecord = React.useCallback(value => {
	    const newRecord = value instanceof Function ? value(record) : value;
	    setRecord(filterRecordParams(newRecord, options));
	  }, [options, record]);
	  const onNotice = useNotice();
	  const handleChange = React.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (isEntireRecordGiven(propertyOrRecord, value)) {
	      setFilteredRecord(propertyOrRecord);
	    } else if (isPropertyPermitted(propertyOrRecord, options)) {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    } else {
	      // eslint-disable-next-line no-console
	      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
	    }

	    setIsSynced(false);
	  }, [setRecord, options]);
	  const handleSubmit = React.useCallback((customParams = {}, submitOptions) => {
	    setLoading(true);
	    const mergedParams = flat.merge(record.params, customParams);
	    const formData = paramsToFormData(mergedParams);
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = record.id ? api.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if ((submitOptions === null || submitOptions === void 0 ? void 0 : submitOptions.updateOnSave) !== false) {
	        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
	      }

	      setProgress(0);
	      setLoading(false);
	      setIsSynced(true);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress, setRecord]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress,
	    setRecord: setFilteredRecord,
	    isSynced
	  };
	};

	const actionHasComponent = action => typeof action.component !== 'undefined' && action.component === false;

	const h$2 = new ViewHelpers();
	const actionHref = (action, params) => {
	  const actionName = action.name;

	  if (!action.component && !action.hasHandler) {
	    return null;
	  }

	  const hrefMap = {
	    record: () => h$2.recordActionUrl({ ...params,
	      actionName
	    }),
	    resource: () => h$2.resourceActionUrl({
	      resourceId: params.resourceId,
	      actionName
	    }),
	    bulk: () => h$2.bulkActionUrl({ ...params,
	      actionName
	    })
	  };

	  if (hrefMap[action.actionType]) {
	    return hrefMap[action.actionType]();
	  }

	  throw new Error('"actionType" should be either record, resource or bulk');
	};

	const api$1 = new ApiClient();
	function callActionApi(action, params, search) {
	  let promise;
	  const {
	    recordId,
	    recordIds,
	    resourceId
	  } = params;

	  switch (action.actionType) {
	    case 'record':
	      if (!recordId) {
	        throw new Error('You have to specify "recordId" for record action');
	      }

	      promise = api$1.recordAction({
	        resourceId,
	        actionName: action.name,
	        recordId,
	        search
	      });
	      break;

	    case 'resource':
	      promise = api$1.resourceAction({
	        resourceId,
	        actionName: action.name
	      });
	      break;

	    case 'bulk':
	      if (!recordIds) {
	        throw new Error('You have to specify "recordIds" for bulk action');
	      }

	      promise = api$1.bulkAction({
	        resourceId,
	        actionName: action.name,
	        recordIds,
	        search
	      });
	      break;

	    default:
	      throw new Error('"actionType" should be either record, resource or bulk');
	  }

	  return promise;
	}

	/* eslint-disable arrow-parens */
	const buildActionCallApiTrigger = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    search
	  } = options;

	  const callApi = () => {
	    const promise = callActionApi(action, params, search);
	    promise.then(actionResponseHandler).catch(error => {
	      throw error;
	    });
	    return promise;
	  };

	  return callApi;
	};

	const buildActionTestId = action => `action-${action.name}`;

	/* eslint-disable no-restricted-globals */
	const buildActionClickHandler = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    push
	  } = options;

	  const handleActionClick = event => {
	    event.preventDefault();
	    event.stopPropagation();
	    const href = actionHref(action, params);
	    const callApi = buildActionCallApiTrigger({
	      params,
	      action,
	      actionResponseHandler
	    });

	    if (action.guard && !confirm(action.guard)) {
	      return;
	    }

	    if (actionHasComponent(action)) {
	      callApi();
	    } else if (href) {
	      push(href);
	    }
	  };

	  return handleActionClick;
	};

	const REFRESH_KEY = 'refresh';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  const params = new URLSearchParams(search !== null && search !== void 0 ? search : window.location.search);
	  params.set(REFRESH_KEY, 'true');
	  return `${url}?${params}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const useActionResponseHandler = onActionCall => {
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  return response => {
	    const {
	      data
	    } = response;

	    if (data.notice) {
	      addNotice(data.notice);
	    }

	    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	      const appended = appendForceRefresh(data.redirectUrl);
	      history.push(appended);
	    }

	    if (onActionCall) {
	      onActionCall(data);
	    }
	  };
	};

	/**
	 * @load ./use-action.doc.md
	 * @subcategory Hooks
	 *
	 * @param {ActionJSON}   action      action object
	 * @param {ActionParams} params
	 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
	 * @return {UseActionResult}
	 * @new In version 3.3
	 * @class
	 * @hideconstructor
	 */

	function useAction(action, params, onActionCall) {
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(onActionCall);
	  const href = actionHref(action, params);
	  const callApi = buildActionCallApiTrigger({
	    action,
	    params,
	    actionResponseHandler
	  });
	  const handleClick = buildActionClickHandler({
	    action,
	    params,
	    actionResponseHandler,
	    push: history.push
	  });
	  return {
	    href,
	    callApi,
	    handleClick
	  };
	}

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';
	const setCurrentAdmin = (data = null) => ({
	  type: SESSION_INITIALIZE,
	  data
	});

	/**
	 * @classdesc
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ### Usage
	 *
	 * ```javascript
	 * import { useCurrentAdmin } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @returns {UseCurrentAdminResponse}
	 * @hideconstructor
	 */
	function useCurrentAdmin() {
	  const currentAdmin = reactRedux.useSelector(state => state.session);
	  const dispatch = reactRedux.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	}
	/**
	 * Result of the {@link useCurrentAdmin}.
	 * It is a tuple containing value and the setter
	 *
	 * @typedef {Array} UseCurrentAdminResponse
	 * @memberof useCurrentAdmin
	 * @alias UseCurrentAdminResponse
	 * @property {CurrentAdmin | null} [0]    current admin
	 * @property {React.Dispatch<React.SetStateAction<CurrentAdmin>>} [1]    value setter compatible
	 *                                                                       with react useState
	 */

	/* eslint-disable no-console */

	/**
	 * @load ./use-local-storage.doc.md
	 * @subcategory Hooks
	 * @class
	 * @see https://usehooks.com/useLocalStorage
	 *
	 * @param {string} key          key under which hook will store the data
	 * @param {T}      initialValue    value which will be stringified and stored
	 * @return {UseLocalStorageResult<T>}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useLocalStorage(key, initialValue) {
	  // State to store our value
	  // Pass initial state function to useState so logic is only executed once
	  const [storedValue, setStoredValue] = React.useState(() => {
	    try {
	      // Get from local storage by key
	      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

	      return item ? JSON.parse(item) : initialValue;
	    } catch (error) {
	      // If error also return initialValue
	      console.log(error);
	      return initialValue;
	    }
	  }); // Return a wrapped version of useState's setter function that ...
	  // ... persists the new value to localStorage.

	  const setValue = value => {
	    try {
	      // Allow value to be a function so we have same API as useState
	      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

	      setStoredValue(valueToStore); // Save to local storage

	      window.localStorage.setItem(key, JSON.stringify(valueToStore));
	    } catch (error) {
	      // A more advanced implementation would handle the error case
	      console.log(error);
	    }
	  };

	  return [storedValue, setValue];
	}

	const isSelected = (href, location) => {
	  const regExp = new RegExp(`${href}($|/)`);
	  return !!location.pathname.match(regExp);
	};

	function useNavigationResources(resources) {
	  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
	  const history = reactRouter.useHistory();
	  const location = reactRouter.useLocation();
	  const enrichResource = React.useMemo(() => (resource, icon) => ({
	    href: resource.href || undefined,
	    icon,
	    isSelected: isSelected(resource.href, location),
	    label: resource.name,
	    id: resource.id,
	    onClick: event => {
	      if (resource.href) {
	        event.preventDefault();
	        history.push(resource.href);
	      }
	    }
	  }), [location, history]); // grouping resources into parents

	  const map = resources.filter(res => res.href) // first filter out resource which are not visible
	  .reduce((memo, resource) => {
	    var _resource$navigation, _resource$navigation3;

	    // in case resource has the same name as parent we namespace it wit "resource-""
	    const key = ((_resource$navigation = resource.navigation) === null || _resource$navigation === void 0 ? void 0 : _resource$navigation.name) || ['resource', resource.name].join('-');

	    if (!resource.navigation || resource.navigation.name === null) {
	      var _resource$navigation2;

	      memo[key] = enrichResource(resource, (_resource$navigation2 = resource.navigation) === null || _resource$navigation2 === void 0 ? void 0 : _resource$navigation2.icon);
	    } else if (memo[key] && memo[key].elements && ((_resource$navigation3 = resource.navigation) === null || _resource$navigation3 === void 0 ? void 0 : _resource$navigation3.name)) {
	      memo[key].elements.push(enrichResource(resource));
	    } else {
	      var _resource$navigation4, _resource$navigation5;

	      memo[key] = {
	        elements: [enrichResource(resource)],
	        label: (_resource$navigation4 = resource.navigation) === null || _resource$navigation4 === void 0 ? void 0 : _resource$navigation4.name,
	        icon: (_resource$navigation5 = resource.navigation) === null || _resource$navigation5 === void 0 ? void 0 : _resource$navigation5.icon,
	        onClick: () => setOpenElements({ ...openElements,
	          [key]: !openElements[key]
	        }),
	        isOpen: !!openElements[key]
	      };
	    }

	    return memo;
	  }, {});
	  return Object.values(map);
	}

	const api$2 = new ApiClient();
	/**
	 * @load ./use-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 *
	 * @param {string} resourceId      id of a resource for which you want to fetch records
	 * @return {UseRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */

	function useRecords(resourceId) {
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const [perPage, setPerPage] = React.useState(10);
	  const [page, setPage] = React.useState(1);
	  const [total, setTotal] = React.useState(0);
	  const [direction, setDirection] = React.useState('asc');
	  const [sortBy, setSortBy] = React.useState();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$2.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        history.push(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      history.replace([location.pathname, removeForceRefresh(location.search).toString()].join('?'));
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	}

	/**
	 * @load ./use-selected-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
	 * @return {UseSelectedRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useSelectedRecords(records) {
	  const [selectedRecords, setSelectedRecords] = React.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	}

	/**
	 * @load ./use-resource.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @new in version 3.3
	 * @bundle
	 * @param {string} resourceId    Id of a resource you want to get
	 */
	const useResource = resourceId => {
	  const resources = reactRedux.useSelector(state => state.resources);
	  const foundResource = resources.find(resource => resource.id === resourceId);
	  return foundResource;
	};

	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useRecord: useRecord,
		isEntireRecordGiven: isEntireRecordGiven,
		FORM_VALUE_NULL: FORM_VALUE_NULL,
		FORM_VALUE_EMPTY_OBJECT: FORM_VALUE_EMPTY_OBJECT,
		FORM_VALUE_EMPTY_ARRAY: FORM_VALUE_EMPTY_ARRAY,
		paramsToFormData: paramsToFormData,
		updateRecord: updateRecord,
		useAction: useAction,
		useActionResponseHandler: useActionResponseHandler,
		useCurrentAdmin: useCurrentAdmin,
		useLocalStorage: useLocalStorage,
		useNavigationResources: useNavigationResources,
		useNotice: useNotice,
		useRecords: useRecords,
		useSelectedRecords: useSelectedRecords,
		useTranslation: useTranslation,
		useResource: useResource
	});

	/**
	 * @alias SidebarResourceSectionProps
	 * @memberof SidebarResourceSection
	 */

	/**
	 * Groups resources by sections and renders the list in {@link Sidebar}
	 *
	 * ### Usage
	 *
	 * ```
	 * import { SidebarResourceSection } from 'admin-bro`
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @name SidebarResourceSection
	 */
	const SidebarResourceSectionOriginal = ({
	  resources
	}) => {
	  const elements = useNavigationResources(resources);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('navigation'),
	    elements: elements
	  });
	}; // Rollup cannot handle type exports well - that is why we need to do this hack with
	// exporting default and named SidebarResourceSection


	const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');

	const StyledSidebar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "sidebar__StyledSidebar",
	  componentId: "z5zut0-0"
	})(["transition:left 0.3s;top:0;bottom:0;flex-shrink:0;overflow-y:auto;&.hidden{left:-", ";}&.visible{left:0;}"], DesignSystem.themeGet('sizes', 'sidebarWidth'));
	StyledSidebar.defaultProps = {
	  position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
	  width: 'sidebarWidth',
	  borderRight: 'default',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 50,
	  bg: 'white'
	};

	const Sidebar = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = reactRedux.useSelector(state => [state.branding, state.resources, state.pages]);
	  return /*#__PURE__*/React__default['default'].createElement(StyledSidebar, {
	    className: isVisible ? 'visible' : 'hidden'
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarBranding$1, {
	    branding: branding
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Resources')
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarResourceSection, {
	    resources: resources
	  })), /*#__PURE__*/React__default['default'].createElement(SidebarPages, {
	    pages: pages
	  }), (branding === null || branding === void 0 ? void 0 : branding.softwareBrothers) && /*#__PURE__*/React__default['default'].createElement(SidebarFooter$1, null));
	};

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const dropActions = [{
	    label: translateButton('logout'),
	    onClick: event => {
	      event.preventDefault();
	      window.location.href = paths.logoutPath;
	    },
	    icon: 'Logout'
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CurrentUserNav, {
	    name: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl,
	    dropActions: dropActions
	  }));
	};

	const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default['default'](DesignSystem.Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "rgspw3-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};
	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: DesignSystem.cssClass('Version')
	  }, admin && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const NavBar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-1qk1nql-0"
	})(["height:", ";border-bottom:", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, DesignSystem.themeGet('borders', 'default'), ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: DesignSystem.cssClass('NavBar')
	};
	const TopBar = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = reactRedux.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default['default'].createElement(NavBar, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default['default'].createElement(Version, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default['default'].createElement(OverridableLoggedIn, {
	    session: session,
	    paths: paths
	  }) : '');
	};

	const DROP_NOTICE = 'DROP_NOTICE';
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';
	const setNoticeProgress = data => ({
	  type: SET_NOTICE_PROGRESS,
	  data
	});

	const TIME_TO_DISAPPEAR = 3;
	class NoticeElement extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      "data-testid": "notice-wrapper"
	    }, /*#__PURE__*/React__default['default'].createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement("div", null);
	};

	const mapStateToProps = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	const ConnectedNoticeBox = reactRedux.connect(mapStateToProps, mapDispatchToProps)(NoticeBox);

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;
	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "relative",
	    overflow: "hidden"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    opacity: 0.8
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminbro.com/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminbro.com/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminbro.com/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminbro.com/tutorial-rbac.html'
	}];

	const Card = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "y6jxa9-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};
	const Dashboard = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(DashboardHeader, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default['default'].createElement(DesignSystem.Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    href: box.href
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, box.subtitle))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('community_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/admin-bro/issues"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SoftwareBrothersLogo"
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    as: "a",
	    variant: "primary",
	    href: "https://softwarebrothers.co/services"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, error.toString()), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard$1 extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminBro.UserComponents[dashboard.component]) {
	      Component = AdminBro.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$1 = state => ({
	  dashboard: state.dashboard
	});

	var Dashboard$2 = reactRedux.connect(mapStateToProps$1)(Dashboard$1);

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), label);
	};

	const PropertyLabel = props => {
	  const {
	    property,
	    props: labelProps
	  } = props;

	  if (property.hideLabel) {
	    return null;
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, _extends_1({
	    htmlFor: property.path,
	    required: property.isRequired
	  }, labelProps), property.label);
	};

	/**
	 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
	 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
	 * ,because it was already handled, so that itemRenderer can render property as a regular one
	 *
	 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
	 * @param {Number}        index         index under which sub-property should be placed
	 * @private
	 * @hide
	 */
	const convertToSubProperty = (arrayProperty, index) => ({ ...arrayProperty,
	  path: [arrayProperty.path, index].join(DELIMITER),
	  label: `[${index + 1}]`,
	  isArray: false
	});

	/**
	 * Removes selected array item from given record. It performs following tasks:
	 * 1. removes array item from the array
	 * 2. reorders keys in new array item
	 * 3. if property has populated fields it also reorders them
	 * it uses {@link flat } module and its removePath method
	 *
	 * @param {RecordJSON} record
	 * @param {string}     subPropertyPath            which has to be removed. It has to be flattened
	 *                                                in notation, and ending with array index
	 * @private
	 * @hide
	 */
	const removeSubProperty = (record, subPropertyPath) => {
	  // by default populated is flatten just to the path level - object itself is not flatten. That is
	  // why we have to retrieve the original state. That is why we have to replace record.populated to
	  // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
	  // then remove keys, and refill back some.nested.1.key to the value from the original populated
	  // object.
	  const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey) => ({ ...memo,
	    [propertyKey]: propertyKey
	  }), {});
	  const newPopulatedKeyMap = flat.removePath(populatedKeyMap, subPropertyPath);
	  const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey]) => ({ ...memo,
	    [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey === null || oldPropertyKey === void 0 ? void 0 : oldPropertyKey.toString()]
	  }), {});
	  return { ...record,
	    params: flat.removePath(record.params, subPropertyPath),
	    populated: newPopulated
	  };
	};

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    onDelete
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center",
	    "data-testid": property.path
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(ItemComponent, props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    ml: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "default",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event, property),
	    variant: "danger"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  }))));
	};

	const InputsInSection = props => {
	  const {
	    property,
	    record,
	    resource,
	    onChange
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  const addNew = React.useCallback(event => {
	    const newItems = [...items, property.subProperties.length ? {} : ''];
	    onChange(property.path, newItems);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const removeItem = React.useCallback((event, subProperty) => {
	    const newRecord = removeSubProperty(record, subProperty.path);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, {
	    mt: "xl"
	  }, items.map((item, i) => {
	    const itemProperty = convertToSubProperty(props.property, i);
	    return /*#__PURE__*/React__default['default'].createElement(ItemRenderer, _extends_1({}, props, {
	      property: itemProperty,
	      key: itemProperty.path,
	      onDelete: removeItem
	    }));
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    onClick: addNew,
	    type: "button",
	    rounded: true
	  }, /*#__PURE__*/React__default['default'].createElement(AddNewItemButton, {
	    resource: resource,
	    property: property
	  })));
	};

	const Edit = props => {
	  const {
	    property,
	    record,
	    testId
	  } = props;
	  const error = record.errors && record.errors[property.propertyPath];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(InputsInSection, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const List = props => {
	  const {
	    property,
	    record
	  } = props;
	  const values = flat.get(record.params, property.path) || [];
	  return /*#__PURE__*/React__default['default'].createElement("span", null, `length: ${values.length}`);
	};

	class Show extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record,
	      ItemComponent
	    } = this.props;
	    const items = flat.get(record.params, property.path) || [];
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, (items || []).map((item, i) => {
	      const itemProperty = convertToSubProperty(property, i);
	      return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, this.props, {
	        key: itemProperty.path,
	        property: itemProperty
	      }));
	    })));
	  }

	}

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show,
		edit: Edit,
		list: List
	});

	function convertToSubProperty$1(property, subProperty) {
	  return { ...subProperty,
	    path: [property.path, subProperty.name].join(DELIMITER)
	  };
	}

	const Edit$1 = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const Show$1 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })));
	};

	// TODO: define ItemComponent interface
	class List$1 extends React__default['default'].PureComponent {
	  renderItems() {
	    const {
	      property,
	      ItemComponent
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	      const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	      return /*#__PURE__*/React__default['default'].createElement("div", {
	        key: subPropertyWithPath.path
	      }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	        inline: true
	      }, `${subProperty.label}: `), /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, this.props, {
	        property: subPropertyWithPath
	      })));
	    }));
	  }

	  render() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const showAction = record.recordActions.find(a => a.name === 'show');

	    if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
	      const h = new ViewHelpers();
	      const href = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: 'show'
	      });
	      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
	        to: href
	      }, this.renderItems());
	    }

	    return this.renderItems();
	  }

	}

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$1,
		edit: Edit$1,
		list: List$1
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, null, (option === null || option === void 0 ? void 0 : option.label) || rawValue);
	  }

	  return rawValue;
	};

	class Show$2 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props));
	  }

	}

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.path];
	  const nextValue = nextProps.record.params[nextProps.property.path];
	  const prevError = prevProps.record.errors[prevProps.property.path];
	  const nextError = nextProps.record.errors[nextProps.property.path];
	  return prevValue === nextValue && prevError === nextError;
	};

	const Edit$2 = props => {
	  var _record$errors;

	  const {
	    property,
	    record
	  } = props;
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), property.availableValues ? /*#__PURE__*/React__default['default'].createElement(SelectEdit, props) : /*#__PURE__*/React__default['default'].createElement(TextEdit, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const SelectEdit = props => {
	  var _record$params$proper, _record$params;

	  const {
	    theme,
	    record,
	    property,
	    onChange
	  } = props;

	  if (!property.availableValues) {
	    return null;
	  }

	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const styles = DesignSystem.selectStyles(theme);
	  const selected = property.availableValues.find(av => av.value === propValue);
	  return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], _extends_1({
	    isClearable: true,
	    styles: styles,
	    value: selected,
	    options: property.availableValues,
	    onChange: s => {
	      var _s$value;

	      return onChange(property.path, (_s$value = s === null || s === void 0 ? void 0 : s.value) !== null && _s$value !== void 0 ? _s$value : '');
	    },
	    isDisabled: property.isDisabled
	  }, property.props));
	};

	const TextEdit = props => {
	  var _record$params$proper2, _record$params2;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = (_record$params$proper2 = (_record$params2 = record.params) === null || _record$params2 === void 0 ? void 0 : _record$params2[property.path]) !== null && _record$params$proper2 !== void 0 ? _record$params$proper2 : '';
	  const [value, setValue] = React.useState(propValue);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value) // handle clicking ENTER
	    ,
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props));
	};

	var edit = styled.withTheme( /*#__PURE__*/React.memo(Edit$2, recordPropertyIsEqual));

	class Filter extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  renderInput() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const filterKey = `filter-${property.path}`;
	    const value = filter[property.path] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        styles: DesignSystem.filterStyles(theme),
	        onChange: this.handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, {
	      name: filterKey,
	      onChange: this.handleInputChange,
	      value: value
	    });
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	      variant: "filter"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), this.renderInput());
	  }

	}

	var filter = styled.withTheme(Filter);

	class List$2 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props);
	  }

	}

	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$2,
		edit: edit,
		filter: filter,
		list: List$2
	});

	const parseValue = value => !(!value || value === 'false');

	const Edit$3 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.path]);
	  const error = record.errors && record.errors[property.path];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.path, !value);
	    }
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, _extends_1({
	    id: property.path,
	    name: property.path,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property,
	    props: {
	      inline: true
	    }
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$1 = /*#__PURE__*/React.memo(Edit$3, recordPropertyIsEqual);

	var mapValue = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue(rawValue);
	  const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	class Show$3 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props));
	  }

	}

	class List$3 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props);
	  }

	}

	class Filter$1 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  render() {
	    const {
	      property,
	      filter = {},
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const options = [{
	      value: true,
	      label: mapValue(true)
	    }, {
	      value: false,
	      label: mapValue(false)
	    }];
	    const selected = options.find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      options: options,
	      styles: DesignSystem.filterStyles(theme),
	      onChange: this.handleChange
	    }));
	  }

	}

	var filter$1 = styled.withTheme(Filter$1);

	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$1,
		show: Show$3,
		list: List$3,
		filter: filter$1
	});

	const Edit$4 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.path] || '';
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, _extends_1({
	    value: value,
	    disabled: property.isDisabled,
	    onChange: data => onChange(property.path, data),
	    propertyType: property.type
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$2 = /*#__PURE__*/React.memo(Edit$4, recordPropertyIsEqual);

	var mapValue$1 = ((value, propertyType) => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);

	  if (date) {
	    return DesignSystem.formatDateProperty(date, propertyType);
	  }

	  return '';
	});

	class Show$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value);
	  }

	}

	class List$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	  }

	}

	const PARAM_SEPARATOR = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$2 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat$1.unflatten(flat$1.flatten(filters), {
	      delimiter: PARAM_SEPARATOR
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$2.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => {
	      memo[path] = {
	        path,
	        property: this.resource.property(path),
	        value: normalized[path]
	      };
	      return memo;
	    }, {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate() {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      var _this$resource$decora;

	      const key = keys[index];
	      const referenceResource = (_this$resource$decora = this.resource.decorate().getPropertyByKey(key)) === null || _this$resource$decora === void 0 ? void 0 : _this$resource$decora.reference();

	      if (referenceResource) {
	        this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR,
		Filter: Filter$2,
		'default': Filter$2
	});

	const {
	  PARAM_SEPARATOR: PARAM_SEPARATOR$1
	} = BackendFilter;

	const Filter$3 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const fromKey = `${property.path}${PARAM_SEPARATOR$1}from`;
	  const toKey = `${property.path}${PARAM_SEPARATOR$1}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, "- From: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: fromValue,
	    onChange: data => onChange(fromKey, data),
	    propertyType: property.type
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	    mt: "default"
	  }, "- To: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: toValue,
	    onChange: data => onChange(toKey, data),
	    propertyType: property.type
	  })));
	};

	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: Show$4,
		list: List$4,
		filter: Filter$3
	});

	const Edit$5 = props => {
	  var _record$params$proper, _record$params;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const error = record.errors && record.errors[property.path];
	  const {
	    props: propertyProps
	  } = property;
	  const {
	    quill = {},
	    ...customProps
	  } = propertyProps || {};
	  quill.theme = quill.theme || 'snow';
	  quill.modules = {
	    toolbar: DesignSystem.DefaultQuillToolbarOptions,
	    ...(quill.modules || {})
	  };
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.RichText, _extends_1({}, customProps, {
	    value: value,
	    onChange: content => onChange(property.path, content),
	    quill: quill
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$3 = /*#__PURE__*/React.memo(Edit$5, recordPropertyIsEqual);

	class Show$5 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.contentRef = /*#__PURE__*/React__default['default'].createRef();
	  }

	  componentDidMount() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path];
	    this.contentRef.current.innerHTML = value;
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      variant: "grey",
	      border: "default"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	      ref: this.contentRef
	    })));
	  }

	}

	const List$5 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const original = record.params[property.path] || '';
	  const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		show: Show$5,
		list: List$5
	});

	const Edit$6 = props => {
	  var _record$populated$pro;

	  const {
	    onChange,
	    property,
	    record,
	    theme
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.path}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.path, selected.value, selected.record);
	    } else {
	      onChange(property.path, null);
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record === null || record === void 0 ? void 0 : record.errors[property.path];
	  const selectedId = record === null || record === void 0 ? void 0 : record.params[property.path];
	  const [loadedRecord, setLoadedRecord] = React.useState();
	  const [loadingRecord, setLoadingRecord] = React.useState(0);
	  const selectedValue = (_record$populated$pro = record === null || record === void 0 ? void 0 : record.populated[property.path]) !== null && _record$populated$pro !== void 0 ? _record$populated$pro : loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  const styles = DesignSystem.selectStyles(theme);
	  React.useEffect(() => {
	    if (!selectedValue && selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedValue, selectedId, resourceId]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], _extends_1({
	    cacheOptions: true,
	    value: selectedOption,
	    styles: styles,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isClearable: true,
	    isDisabled: property.isDisabled,
	    isLoading: loadingRecord
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$4 = styled.withTheme(Edit$6);

	const StyledLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "flgaqr-0"
	})(["", ";padding-left:", ";padding-right:", ";"], DesignSystem.ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.path];
	  const populated = record.populated[property.path];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.path}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default['default'].createElement(StyledLink, {
	      variant: "text",
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	class Show$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    }));
	  }

	}

	class List$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    });
	  }

	}

	class Filter$4 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.api = new ApiClient();
	    this.options = [];
	    this.loadOptions = this.loadOptions.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, selected ? selected.value : '');
	  }

	  async loadOptions(inputValue) {
	    const {
	      property
	    } = this.props;
	    const records = await this.api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    this.options = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    return this.options;
	  }

	  render() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const selected = (this.options || []).find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      cacheOptions: true,
	      styles: DesignSystem.filterStyles(theme),
	      loadOptions: this.loadOptions,
	      onChange: this.handleChange,
	      defaultOptions: true
	    }));
	  }

	}

	var filter$2 = styled.withTheme(Filter$4);

	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$4,
		show: Show$6,
		list: List$6,
		filter: filter$2
	});

	class Show$7 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path] || '';
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	    /*#__PURE__*/
	    // eslint-disable-next-line react/no-array-index-key
	    React__default['default'].createElement(React__default['default'].Fragment, {
	      key: i
	    }, line, /*#__PURE__*/React__default['default'].createElement("br", null))));
	  }

	}

	const Edit$7 = props => {
	  var _record$params$proper, _record$params, _record$errors;

	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const [value, setValue] = React.useState(propValue);
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$5 = /*#__PURE__*/React.memo(Edit$7, recordPropertyIsEqual);

	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$7,
		edit: edit$5
	});

	const Edit$8 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params[property.path];
	  const [value, setValue] = React.useState(propValue);
	  const error = record.errors && record.errors[property.path];
	  const [isInput, setIsInput] = React.useState(false);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.InputGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.path,
	    name: property.path,
	    onChange: event => setValue(event.target.value),
	    onBlur: () => onChange(property.path, value),
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value !== null && value !== void 0 ? value : '',
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$6 = /*#__PURE__*/React.memo(Edit$8, recordPropertyIsEqual);

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$6
	});

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  mixed: null
	};
	/**
	 * @load ./base-property-component.doc.md
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @class
	 * @hideconstructor
	 */

	const BasePropertyComponent = props => {
	  const {
	    property: baseProperty,
	    resource,
	    record,
	    filter,
	    where,
	    onChange
	  } = props;
	  const property = React.useMemo(() => ({ ...baseProperty,
	    // we fill the path if it is not there. That is why all the actual Component Renderers are
	    // called with the path set to this root path. Next mixed and array components adds to this
	    // path either index (for array) or subProperty name.
	    path: baseProperty.path || baseProperty.propertyPath
	  }), [baseProperty]);
	  const testId = `property-${where}-${property.path}`;
	  let Component = types[property.type] && types[property.type][where] || defaultType[where];

	  if (property.components && property.components[where]) {
	    const component = property.components[where];

	    if (!component) {
	      throw new Error(`there is no "${property.path}.components.${where}"`);
	    }

	    Component = globalAny$2.AdminBro.UserComponents[component];
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      "data-testid": testId
	    }, /*#__PURE__*/React__default['default'].createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	  const Array = ArrayType[where];
	  const Mixed = MixedType[where];

	  if (baseProperty.isArray) {
	    if (!Array) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Array, _extends_1({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'mixed') {
	    if (!Mixed) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Mixed, _extends_1({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(Component, {
	    property: property,
	    resource: resource,
	    record: record,
	    filter: filter,
	    onChange: onChange,
	    where: where
	  })));
	};

	let globalAny$3 = {};

	try {
	  globalAny$3 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	const BasePropertyComponentExtended = Object.assign(BasePropertyComponent, {
	  DefaultType: camelizePropertyType(defaultType),
	  Boolean: camelizePropertyType(boolean),
	  DateTime: camelizePropertyType(datetime),
	  RichText: camelizePropertyType(richtext),
	  Reference: camelizePropertyType(reference),
	  TextArea: camelizePropertyType(textarea),
	  Password: camelizePropertyType(password)
	});

	const BreadcrumbLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "yjyesi-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Breadcrumbs')
	  }, /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, "Dashboard"), /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name), action && action.name !== 'list' && /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label));
	};

	const actionsToButtonGroup = options => {
	  const {
	    actions,
	    params,
	    handleClick
	  } = options;
	  const buttons = actions.map(action => {
	    const href = actionHref(action, params);
	    return {
	      icon: action.icon,
	      label: action.label,
	      variant: action.variant,
	      source: action,
	      href: href || undefined,
	      // when href is not defined - handle click should also be not defined
	      // This prevents from "cursor: pointer;"
	      onClick: href ? handleClick : undefined,
	      'data-testid': buildActionTestId(action),
	      buttons: []
	    };
	  }); // nesting buttons

	  const buttonsMap = buttons.reduce((memo, button) => {
	    const action = button.source;

	    if (action.parent) {
	      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
	        label: action.parent
	      };
	      parent.buttons = parent.buttons || [];
	      parent.buttons.push(button);
	      return { ...memo,
	        [action.parent]: parent
	      };
	    }

	    return { ...memo,
	      [button.source.name]: button
	    };
	  }, {});
	  return Object.values(buttonsMap);
	};

	const StyledLink$1 = styled__default['default'](({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "styled-back-button__StyledLink",
	  componentId: "uyhg9d-0"
	})(["", ""], DesignSystem.ButtonCSS);
	const h$3 = new ViewHelpers();
	const StyledBackButton = props => {
	  const {
	    resourceId,
	    showInDrawer
	  } = props;
	  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  return /*#__PURE__*/React__default['default'].createElement(StyledLink$1, {
	    size: "icon",
	    to: h$3.resourceUrl({
	      resourceId,
	      search: window.location.search
	    }),
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: cssCloseIcon
	  }));
	};

	/* eslint-disable jsx-a11y/anchor-is-valid */
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeader = props => {
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(actionPerformed);

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const params = {
	    resourceId,
	    recordId: record === null || record === void 0 ? void 0 : record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const actionButtons = actionsToButtonGroup({
	    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
	    params,
	    handleClick: handleActionClick
	  });

	  if (toggleFilter) {
	    actionButtons.push({
	      label: translateButton('filter', resource.id),
	      onClick: toggleFilter,
	      icon: 'SettingsAdjust'
	    });
	  } // list and new actions are special and are are always


	  const customResourceButtons = actionsToButtonGroup({
	    actions: resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)),
	    params: {
	      resourceId
	    },
	    handleClick: handleActionClick
	  });
	  const title = action ? action.label : resource.name;
	  const isList = action && action.name === 'list';
	  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? DesignSystem.H3 : DesignSystem.H2;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass('ActionHeader')
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(Breadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: customResourceButtons
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(CssHComponent, {
	    mb: "lg"
	  }, !isList && listAction ? /*#__PURE__*/React__default['default'].createElement(StyledBackButton, {
	    resourceId: resourceId,
	    showInDrawer: action.showInDrawer
	  }) : '', title, tag ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: actionButtons
	  }))));
	};

	const LayoutElementRenderer = props => {
	  const {
	    layoutElement,
	    resource,
	    where,
	    record,
	    onChange
	  } = props;
	  const {
	    props: layoutProps,
	    properties: propertyNames,
	    layoutElements: innerLayoutElements,
	    component
	  } = layoutElement;
	  const {
	    children,
	    ...other
	  } = layoutProps;
	  const properties = propertyNames.map(name => resource.properties[name]);
	  const Component = DesignSystem__namespace[component];

	  if (!Component) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      size: "sm",
	      message: "Javascript Error",
	      variant: "danger",
	      py: "xl"
	    }, "There is no component by the name of", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, component), "in @admin-bro/design-system. Change", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, `@${component}`), "to available component like @Header");
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Component, other, properties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    key: property.propertyPath
	  }, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: where,
	    property: property,
	    resource: resource,
	    record: record,
	    onChange: onChange
	  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer, _extends_1({}, props, {
	    // eslint-disable-next-line react/no-array-index-key
	    key: i,
	    layoutElement: innerLayoutElement
	  }))), children);
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const Edit$9 = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show$8 = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "show"
	  }))) : properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React.useState(recordFromProps);
	  const history = reactRouterDom.useHistory();
	  const handleActionCallback = React.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed, record]);
	  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
	  React.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const action = show || edit;

	  const handleClick = event => {
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      buildActionClickHandler({
	        action,
	        params: {
	          resourceId: resource.id,
	          recordId: record.id
	        },
	        actionResponseHandler,
	        push: history.push
	      })(event);
	    }
	  };

	  const actionParams = {
	    resourceId: resource.id,
	    recordId: record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params: actionParams,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const buttons = [{
	    icon: 'OverflowMenuHorizontal',
	    variant: 'light',
	    label: undefined,
	    'data-testid': 'actions-dropdown',
	    buttons: actionsToButtonGroup({
	      actions: recordActions,
	      params: actionParams,
	      handleClick: handleActionClick
	    })
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    onClick: handleClick,
	    "data-id": record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    style: {
	      cursor: 'pointer'
	    },
	    key: property.propertyPath,
	    "data-property-name": property.propertyPath,
	    display: display(property.isTitle)
	  }, isLoading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Placeholder, {
	    style: {
	      height: 14
	    }
	  }) : /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "list",
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: buttons
	  }) : ''));
	};

	class SortLink extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.isActive = this.isActive.bind(this);
	  }

	  isActive() {
	    const {
	      sortBy,
	      property
	    } = this.props;
	    return sortBy === property.propertyPath;
	  }

	  render() {
	    const {
	      property,
	      location,
	      direction
	    } = this.props;
	    const query = new URLSearchParams(location.search);
	    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
	    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	    query.set('direction', oppositeDirection);
	    query.set('sortBy', property.propertyPath);
	    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
	      to: {
	        search: query.toString()
	      },
	      className: DesignSystem.cssClass('SortLink')
	    }, property.label, this.isActive() ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	      icon: sortedByIcon,
	      color: "primary100",
	      ml: "default"
	    }) : '');
	  }

	}

	var SortLink$1 = reactRouterDom.withRouter(SortLink);

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.propertyPath === titleProperty.propertyPath;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default['default'].createElement(SortLink$1, props) : property.label);
	};

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeaderProps
	 */

	/**
	 * Prints `thead` section for table with records.
	 *
	 * ```
	 * import { RecordsTableHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */
	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableHead, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, onSelectAll ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default['default'].createElement(PropertyHeader, {
	    display: display(property.isTitle),
	    key: property.propertyPath,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	/**
	 * Renders Button which redirects to given action
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionButton } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */
	const ActionButton = props => {
	  const {
	    children,
	    action,
	    actionPerformed,
	    resourceId,
	    recordId,
	    recordIds
	  } = props;
	  const {
	    href,
	    handleClick
	  } = useAction(action, {
	    resourceId,
	    recordId,
	    recordIds
	  }, actionPerformed);

	  if (!action) {
	    return null;
	  }

	  const firstChild = React__default['default'].Children.toArray(children)[0];

	  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
	    throw new Error('ActionButton has to have one child');
	  }

	  const WrappedElement = /*#__PURE__*/React__default['default'].cloneElement(firstChild, {
	    onClick: handleClick,
	    'data-testid': buildActionTestId(action),
	    href
	  });
	  return WrappedElement;
	}; // TODO - remove this hack

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.InfoBox, {
	    title: translateMessage('noRecords', resource.id)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mb: "xxl"
	  }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default['default'].createElement(ActionButton, {
	    action: canCreate,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const params = {
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const bulkButtons = actionsToButtonGroup({
	    actions: getBulkActionsFromRecords(selectedRecords),
	    params,
	    handleClick: handleActionClick
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCaption, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    py: "sm",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Title, {
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: bulkButtons
	  })));
	};

	/**
	 * @classdesc
	 * Renders an entire records table. To fill the data you might need:
	 *
	 * - {@link useRecords} and
	 * - {@link useSelectedRecords} hooks
	 *
	 * so make sure to see at the documentation pages for both of them
	 *
	 * @component
	 * @class
	 * @hideconstructor
	 * @subcategory Application
	 * @new in version 3.3
	 */
	const RecordsTable = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(SelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords
	  }), /*#__PURE__*/React__default['default'].createElement(RecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(RecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const List$7 = ({
	  resource,
	  setTag
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    history.push({
	      search: search.toString()
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(RecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps$1 = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * Higher Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'admin-bro/core'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => reactRedux.connect(null, mapDispatchToProps$1)(Component);

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice,
	    history
	  } = props;
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        history.push(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, _extends_1({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	const FormattedBulkDelete = withNotice(reactRouter.withRouter(BulkDelete));

	const actions = {
	  new: New,
	  edit: Edit$9,
	  show: Show$8,
	  list: List$7,
	  bulkDelete: FormattedBulkDelete
	};

	const DOCS = 'https://adminbro.com';
	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  loginPath: '/admin/login',
	};

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminBro options
	 * const AdminBroOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: AdminBro.bundle('./my-new-action'),
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'admin-bro'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminBro.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag
	    }));
	  }

	  return Action || /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default['default'].createElement(reactI18next.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @memberof ErrorMessageBox
	 * @alias ErrorMessageBoxProps
	 */

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapper = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "gd2y70-0"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    ...rest
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, _extends_1({}, rest, {
	    variant: "grey",
	    mx: "auto"
	  }), children);
	};

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { DrawerPortal } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React.useState(window.document.getElementById(DRAWER_PORTAL_ID));

	  if (!drawerElement && window) {
	    const innerWrapper = window.document.createElement('div');
	    const DrawerWrapper = /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	      theme: window.THEME
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	      id: DRAWER_PORTAL_ID,
	      className: "hidden"
	    }));
	    window.document.body.appendChild(innerWrapper);
	    reactDom.render(DrawerWrapper, innerWrapper, () => {
	      setDrawerElement(window.document.getElementById(DRAWER_PORTAL_ID));
	    });
	  }

	  React.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DesignSystem.DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/reactDom.createPortal(children, drawerElement);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterDrawer = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React.useState(parseQuery(location));
	  const match = reactRouterDom.useRouteMatch();
	  const history = reactRouterDom.useHistory();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  React.useEffect(() => setFilter({}), [match.params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    search.set('page', '1');
	    history.push(`${history.location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    history.push(history.location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H3, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg"
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white"
	  }, translateButton('resetFilter', resource.id))));
	};

	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SortLink: SortLink$1,
		NoRecords: NoRecords,
		PropertyHeader: PropertyHeader,
		RecordInList: RecordInList,
		RecordsTableHeader: RecordsTableHeader,
		RecordsTable: RecordsTable,
		SelectedRecords: SelectedRecords,
		SidebarResourceSection: SidebarResourceSection,
		Sidebar: Sidebar,
		ActionButton: ActionButton,
		ActionHeader: ActionHeader,
		BaseActionComponent: BaseActionComponent,
		BreadcrumbLink: BreadcrumbLink,
		Breadcrumbs: Breadcrumbs,
		DashboardHeader: DashboardHeader,
		Dashboard: Dashboard,
		ErrorBoundary: ErrorBoundary,
		DrawerPortal: DrawerPortal,
		NoResourceError: NoResourceError,
		NoActionError: NoActionError,
		NoRecordError: NoRecordError,
		ErrorMessageBox: ErrorMessageBox,
		FilterDrawer: FilterDrawer,
		LoggedIn: OverridableLoggedIn,
		NoticeElement: NoticeElement,
		NoticeBox: ConnectedNoticeBox,
		TopBar: TopBar,
		Version: Version
	});

	const api$3 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React.useState();
	  const [loading, setLoading] = React.useState(true);
	  const match = reactRouter.useRouteMatch();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = match.params;
	  const resource = useResource(resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$3.recordAction(match.params).then(response => {
	      setLoading(false);
	      setRecord(response.data.record);
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  } // When the user visits this route (record action) from a different, than the current one, record.
	  // It renders everything with a new resource. The old record remains until useEffect fetches data
	  // from the API. that is why we have to check if the current record has correct record.id.
	  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
	  // we cannot be sure that the component wont be rendered (it will be at least once) with the
	  // wrong data.


	  const hasDifferentRecord = record && record.id.toString() !== recordId;

	  if (loading || hasDifferentRecord) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return (actionFromResource === null || actionFromResource === void 0 ? void 0 : actionFromResource.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default['default'].createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record
	  }));
	};

	const ResourceAction = props => {
	  const {
	    resources,
	    match
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource
	  }));
	};

	const mapStateToProps$2 = state => ({
	  resources: state.resources
	});

	var ResourceAction$1 = reactRedux.connect(mapStateToProps$2)(ResourceAction);

	const api$4 = new ApiClient();

	const BulkAction = () => {
	  const match = reactRouter.useRouteMatch();
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = useResource(resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api$4.bulkAction({
	      resourceId,
	      recordIds,
	      actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecords();
	  }, [match.params.resourceId, match.params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default['default'].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return (actionFromResource === null || actionFromResource === void 0 ? void 0 : actionFromResource.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, !(action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	class Page extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      pages,
	      match
	    } = this.props;
	    const {
	      params
	    } = match;
	    const {
	      pageName
	    } = params;
	    const {
	      isClient
	    } = this.state;
	    const currentPage = pages.find(page => page.name === pageName);

	    if (!currentPage) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "There is no page of given name"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "Page:", /*#__PURE__*/React__default['default'].createElement("b", null, ` "${pageName}" `), "does not exist."));
	    }

	    const Component = AdminBro.UserComponents[currentPage.component];

	    if (!Component || !isClient) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "No component specified"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "You have to specify component which will render this Page"));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$3 = state => ({
	  pages: state.pages
	});

	var Page$1 = reactRedux.connect(mapStateToProps$3)(Page);

	var queryHasFilter = (queryString => {
	  const query = new URLSearchParams(queryString);

	  for (const key of query.keys()) {
	    if (key.match('filters.')) {
	      return true;
	    }
	  }

	  return false;
	});

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouterDom.useRouteMatch(resourceActionUrl);
	  const recordActionMatch = reactRouterDom.useRouteMatch(recordActionUrl);
	  const bulkActionMatch = reactRouterDom.useRouteMatch(bulkActionUrl);
	  const action = (resourceActionMatch === null || resourceActionMatch === void 0 ? void 0 : resourceActionMatch.params.actionName) || (recordActionMatch === null || recordActionMatch === void 0 ? void 0 : recordActionMatch.params.actionName) || (bulkActionMatch === null || bulkActionMatch === void 0 ? void 0 : bulkActionMatch.params.actionName);
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction$2 = props => {
	  const {
	    resources,
	    match,
	    location
	  } = props;
	  const {
	    resourceId
	  } = match.params;
	  const [filterVisible, setFilerVisible] = React.useState(queryHasFilter(location.search));
	  const [tag, setTag] = React.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilerVisible(!filterVisible) : undefined;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "grey",
	    width: listAction.containerWidth,
	    mx: "auto"
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default['default'].createElement(FilterDrawer, {
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilerVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps$4 = state => ({
	  resources: state.resources
	});

	var Resource = reactRedux.connect(mapStateToProps$4)(ResourceAction$2);

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${({
  theme
}) => theme.colors.grey100}
  }
`;
	const h$4 = new ViewHelpers();

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React.useState(false);
	  const location = reactRouter.useLocation();
	  React.useEffect(() => {
	    if (sidebarVisible) {
	      toggleSidebar(false);
	    }
	  }, [location]);
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const recordActionUrl = h$4.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h$4.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h$4.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h$4.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h$4.pageUrl(pageName);
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Reset, null), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    height: "100%",
	    flex: true
	  }, sidebarVisible ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default['default'].createElement(Sidebar, {
	    isVisible: sidebarVisible
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg"
	  }, /*#__PURE__*/React__default['default'].createElement(TopBar, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 0,
	    zIndex: "2000"
	  }, /*#__PURE__*/React__default['default'].createElement(ConnectedNoticeBox, null)), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: h$4.dashboardUrl(),
	    exact: true,
	    component: Dashboard$2
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceUrl,
	    component: Resource
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    exact: true,
	    component: Page$1
	  })), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: recordActionUrl,
	    component: RecordAction
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceActionUrl,
	    component: ResourceAction$1
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: bulkActionUrl,
	    component: BulkAction
	  })))));
	};

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case RESOURCES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case PAGES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case LOCALE_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case BRANDING_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const assetsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case ASSETS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case PATHS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case DASHBOARD_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case SESSION_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case VERSIONS_INITIALIZE:
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case ADD_NOTICE:
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case DROP_NOTICE:
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case SET_NOTICE_PROGRESS:
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = redux.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  assets: assetsReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer
	});
	var createStore = ((initialState = {}) => redux.createStore(reducer, initialState));

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const {
	  locale
	} = window.REDUX_STATE;
	i18n__default['default'].use(reactI18next.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
	  store: store
	}, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(App, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  BasePropertyComponent: BasePropertyComponentExtended,
	  env,
	  ...AppComponents,
	  ...Hooks,
	  flat,
	  // TODO: remove this from the next release
	  flatten: flat.flatten,
	  unflatten: flat.unflatten
	};

	return bundleEntry;

}(React, ReactRedux, ReactRouterDOM, styled, ReactI18Next, i18n, AdminBroDesignSystem, ReactRouter, axios, flat, ReactSelect, ReactSelectAsync, ReactDOM, Redux));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycy50cyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWJyYW5kaW5nLnRzeCIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCIuLi8uLi8uLi91dGlscy90cmFuc2xhdGUtZnVuY3Rpb25zLmZhY3RvcnkudHMiLCIuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24udHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcGFnZXMudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWZvb3Rlci50c3giLCIuLi8uLi91dGlscy9hcGktY2xpZW50LnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9wYXJhbXMtdG8tZm9ybS1kYXRhLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5vdGljZS50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3Byb3BlcnR5LWtleS1yZWdleC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvc2VsZWN0LXBhcmFtcy50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZmlsdGVyLW91dC1wYXJhbXMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3BhdGgtdG8tcGFydHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3NldC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZ2V0LnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9tZXJnZS50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvcmVtb3ZlLXBhdGgudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L2ZsYXQtbW9kdWxlLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91cGRhdGUtcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9maWx0ZXItcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkLnRzeCIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1oYXMtY29tcG9uZW50LnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9jYWxsLWFjdGlvbi1hcGkudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9idWlsZC1hY3Rpb24tYXBpLWNhbGwtdHJpZ2dlci50cyIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2J1aWxkLWFjdGlvbi10ZXN0LWlkLnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYnVpbGQtYWN0aW9uLWNsaWNrLWhhbmRsZXIudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gudHMiLCIuLi8uLi9ob29rcy91c2UtYWN0aW9uL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlci50cyIsIi4uLy4uL2hvb2tzL3VzZS1hY3Rpb24vdXNlLWFjdGlvbi50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4udHMiLCIuLi8uLi9ob29rcy91c2UtY3VycmVudC1hZG1pbi50cyIsIi4uLy4uL2hvb2tzL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5hdmlnYXRpb24tcmVzb3VyY2VzLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMudHMiLCIuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZXNvdXJjZS91c2UtcmVzb3VyY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbG9nZ2VkLWluLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3ZlcnNpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvdG9wLWJhci50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbm90aWNlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2RlZmF1bHQtZGFzaGJvYXJkLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL2Rhc2hib2FyZC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS91dGlscy9wcm9wZXJ0eS1sYWJlbC9wcm9wZXJ0eS1sYWJlbC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvY29udmVydC10by1zdWItcHJvcGVydHkudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2FycmF5L3JlbW92ZS1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvY29udmVydC10by1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2RlZmF1bHQtcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9maWx0ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vbWFwLXZhbHVlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYm9vbGVhbi9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvbWFwLXZhbHVlLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2xpc3QudHN4IiwiLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9yZWZlcmVuY2UtdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWZlcmVuY2UvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2luZGV4LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2JyZWFkY3J1bWJzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL3N0eWxlZC1iYWNrLWJ1dHRvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9uZXcudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9kaXNwbGF5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3JkLWluLWxpc3QudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc29ydC1saW5rLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcHJvcGVydHktaGVhZGVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvbm8tcmVjb3Jkcy50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS9zZWxlY3RlZC1yZWNvcmRzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS50c3giLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvbGlzdC50c3giLCIuLi8uLi9ob2Mvd2l0aC1ub3RpY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYnVsay1kZWxldGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2luZGV4LnRzIiwiLi4vLi4vLi4vY29uc3RhbnRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLW1lc3NhZ2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvdXRpbHMvd3JhcHBlci50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9kcmF3ZXItcG9ydGFsLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2ZpbHRlci1kcmF3ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVjb3JkLWFjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9yZXNvdXJjZS1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvYnVsay1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcGFnZS50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy91dGlscy9xdWVyeS1oYXMtZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVzb3VyY2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtYXNzZXRzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWJyYW5kaW5nLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWRhc2hib2FyZC50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5pdGlhbGl6ZS1sb2NhbGUudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGFnZXMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGF0aHMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcmVzb3VyY2VzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLXZlcnNpb25zLnRzIiwiLi4vLi4vc3RvcmUvc3RvcmUudHMiLCIuLi8uLi9idW5kbGUtZW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFkbWluQnJvT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vLi4vLi4vZnJvbnRlbmQvc3RvcmUvc3RvcmUnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgUGFyYW1zIGZvciBhIGFueSBmdW5jdGlvblxuICogQGFsaWFzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvblBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBSZXNvdXJjZSBJRFxuICAgKi9cbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAvKipcbiAgICogQWN0aW9uIG5hbWVcbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHF1ZXJ5IHN0cmluZzogPy4uLi5cbiAgICovXG4gIHNlYXJjaD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGFyYW1zIGZvciBhIHJlY29yZCBhY3Rpb25cbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtcyAmIHtcbiAgLyoqXG4gICAqIFJlY29yZCBJRFxuICAgKi9cbiAgcmVjb3JkSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgYnVsayBhY3Rpb25cbiAqIEBhbGlhcyBCdWxrQWN0aW9uUGFyYW1zXG4gKiBAZXh0ZW5kcyBBY3Rpb25QYXJhbXNcbiAqIEBtZW1iZXJvZiBWaWV3SGVscGVyc1xuICovXG5leHBvcnQgdHlwZSBCdWxrQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zICYge1xuICAvKipcbiAgICogQXJyYXkgb2YgUmVjb3JkcyBJRFxuICAgKi9cbiAgcmVjb3JkSWRzPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgcmVzb3VyY2UgYWN0aW9uXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zXG5cbmNvbnN0IHJ1bkRhdGUgPSBuZXcgRGF0ZSgpXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBoZWxwZXIgbWV0aG9kcyBhdmFpbGFibGUgaW4gdGhlIHZpZXdzXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3SGVscGVycyB7XG4gIHB1YmxpYyBvcHRpb25zOiBQYXRoc1xuXG4gIGNvbnN0cnVjdG9yKHsgb3B0aW9ucyB9OiB7IG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMgfSA9IHt9KSB7XG4gICAgbGV0IG9wdHM6IFBhdGhzID0gVmlld0hlbHBlcnMuZ2V0UGF0aHMob3B0aW9ucylcblxuICAgIG9wdHMgPSBvcHRzIHx8IHtcbiAgICAgIHJvb3RQYXRoOiAnL2FkbWluJyxcbiAgICB9XG5cbiAgICAvLyB3aGVuIFZpZXdIZWxwZXJzIGFyZSB1c2VkIG9uIHRoZSBmcm9udGVuZCwgcGF0aHMgYXJlIHRha2VuIGZyb20gZ2xvYmFsIFJlZHV4IFN0YXRlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0c1xuICB9XG5cbiAgc3RhdGljIGdldFBhdGhzKG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMpOiBQYXRocyB7XG4gICAgcmV0dXJuIG9wdGlvbnMgfHwgKGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMpXG4gIH1cblxuICAvKipcbiAgICogVG8gZWFjaCByZWxhdGVkIHBhdGggYWRkcyByb290UGF0aCBwYXNzZWQgYnkgdGhlIHVzZXIsIGFzIHdlbGwgYXMgYSBxdWVyeSBzdHJpbmdcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gW3BhdGhzXSAgICAgIGxpc3Qgb2YgcGFydHMgb2YgdGhlIHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIHBhdGhcbiAgICogQHJldHVybiB7cXVlcnl9ICAgICAgICBbc2VhcmNoPScnXSBxdWVyeSBzdHJpbmcgd2hpY2ggY2FuIGJlIGZldGNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBgbG9jYXRpb24uc2VhcmNoYFxuICAgKi9cbiAgdXJsQnVpbGRlcihwYXRoczogQXJyYXk8c3RyaW5nPiA9IFtdLCBzZWFyY2ggPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJy8nXG4gICAgY29uc3QgcmVwbGFjZSA9IG5ldyBSZWdFeHAoYCR7c2VwYXJhdG9yfXsxLH1gLCAnZycpXG5cbiAgICBsZXQgeyByb290UGF0aCB9ID0gdGhpcy5vcHRpb25zXG4gICAgaWYgKCFyb290UGF0aC5zdGFydHNXaXRoKHNlcGFyYXRvcikpIHsgcm9vdFBhdGggPSBgJHtzZXBhcmF0b3J9JHtyb290UGF0aH1gIH1cblxuICAgIGNvbnN0IHBhcnRzID0gW3Jvb3RQYXRoLCAuLi5wYXRoc11cbiAgICByZXR1cm4gYCR7cGFydHMuam9pbihzZXBhcmF0b3IpLnJlcGxhY2UocmVwbGFjZSwgc2VwYXJhdG9yKX0ke3NlYXJjaH1gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dpbiBVUkxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG9naW5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbG9nb3V0IFVSTFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ291dFBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBmb3IgdGhlIGRhc2hib2FyZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBkYXNoYm9hcmRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJvb3RQYXRoXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgZm9yIGdpdmVuIHBhZ2UgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgICAgICAgcGFnZSBuYW1lIHdoaWNoIGlzIGEgdW5pcXVlIGtleSBzcGVjaWZpZWQgaW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnN9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHBhZ2VVcmwocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3BhZ2VzJywgcGFnZU5hbWVdKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBlZGl0YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZWRpdFVybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWU6ICdlZGl0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYHNob3dgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgcmVjb3JkQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCAgICBpZCB0byB0aGUgcmVjb3JkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBzaG93VXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ3Nob3cnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgZGVsZXRlYCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ2RlbGV0ZScsIHNlYXJjaCB9KVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYG5ld2AgYWN0aW9uIGluIGdpdmVuIFJlc291cmNlLiBVc2VzIHtAbGluayByZXNvdXJjZUFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgbmV3VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICduZXcnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgbmV3YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlc291cmNlQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBsaXN0VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICdsaXN0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYGJ1bGtEZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgYnVsa0FjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHJlY29yZElkcyAgIHNlcGFyYXRlZCBieSBjb21tYSByZWNvcmRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBidWxrRGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWRzOiBBcnJheTxzdHJpbmc+LCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWU6ICdidWxrRGVsZXRlJywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZXNvdXJjZUFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uUGFyYW1zfSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcbiAgICogQHBhcmFtICAge3N0cmluZ30gIFtvcHRpb25zLnNlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgcmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lLCBzZWFyY2ggfTogUmVzb3VyY2VBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkLCAnYWN0aW9ucycsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICByZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaCB9OiBPbWl0PFJlc291cmNlQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZSc+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyKFsncmVzb3VyY2VzJywgcmVzb3VyY2VJZF0sIHNlYXJjaClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlY29yZEFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZWNvcmRJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5hY3Rpb25OYW1lXG4gICAqXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAqL1xuICByZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgc2VhcmNoIH06IFJlY29yZEFjdGlvblBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3Jlc291cmNlcycsIHJlc291cmNlSWQsICdyZWNvcmRzJywgcmVjb3JkSWQsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBidWxrQWN0aW9uIHVybFxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7QXJyYXk8c3RyaW5nPn0gIFtvcHRpb25zLnJlY29yZElkc11cbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMuYWN0aW9uTmFtZVxuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkcywgYWN0aW9uTmFtZSwgc2VhcmNoIH06IEJ1bGtBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsQnVpbGRlcihbXG4gICAgICAncmVzb3VyY2VzJywgcmVzb3VyY2VJZCwgJ2J1bGsnLCBhY3Rpb25OYW1lLFxuICAgIF0pXG4gICAgaWYgKHJlY29yZElkcyAmJiByZWNvcmRJZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICAgICAgcXVlcnkuc2V0KCdyZWNvcmRJZHMnLCByZWNvcmRJZHMuam9pbignLCcpKVxuICAgICAgcmV0dXJuIGAke3VybH0/JHtxdWVyeS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcmV0dXJuIGAke3VybH0ke3NlYXJjaCB8fCAnJ31gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhYnNvbHV0ZSBwYXRoIHRvIGEgZ2l2ZW4gYXNzZXQuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXNzZXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgYXNzZXRQYXRoKGFzc2V0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGFzc2V0LCB0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKS5ocmVmXG5cbiAgICAgIC8vIGFkZGluZyB0aW1lc3RhbXAgdG8gdGhlIGhyZWYgaW52YWxpZGF0ZXMgdGhlIENETiBjYWNoZVxuICAgICAgcmV0dXJuIGAke3VybH0/ZGF0ZT0ke3J1bkRhdGUuZ2V0VGltZSgpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ2Zyb250ZW5kJywgJ2Fzc2V0cycsIGFzc2V0XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3SGVscGVyc1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPdmVycmlkYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3V0aWxzL292ZXJyaWRhYmxlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBjbGFzc2Rlc2NcbiAqIE92ZXJyaWRlcyBvbmUgb2YgdGhlIGNvbXBvbmVudCBmb3JtIEFkbWluQnJvIGNvcmUgd2hlbiB1c2VyIHBhc3MgaXRzIG5hbWUgdG9cbiAqIHtAbGluayBBZG1pbkJyby5idW5kbGV9IG1ldGhvZC5cbiAqXG4gKiBJZiBjYXNlIG9mIGJlaW5nIG92ZXJyaWRkZW4sIGNvbXBvbmVudCByZWNlaXZlcyBhZGRpdGlvbmFsIHByb3A6IGBPcmlnaW5hbENvbXBvbmVudGBcbiAqXG4gKiBAZXhhbXBsZVxuICogQWRtaW5Ccm8uYnVuZGxlKCcuL3BhdGgvdG8vY29tcG9uZW50JywgJ1NpZGViYXJGb290ZXInKVxuICovXG5mdW5jdGlvbiBhbGxvd092ZXJyaWRlPFA+KFxuICBPcmlnaW5hbENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPixcbiAgbmFtZTogT3ZlcnJpZGFibGVDb21wb25lbnQsXG4pOiBDb21wb25lbnRUeXBlPFAgJiB7T3JpZ2luYWxDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFA+fT4ge1xuICAvLyBzc3JcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIE9yaWdpbmFsQ29tcG9uZW50XG4gIH1cblxuICBjb25zdCBXcmFwcGVyQ29tcG9uZW50OiBSZWFjdC5GQzxQPiA9IChwcm9wcykgPT4ge1xuICAgIGxldCBnbG9iYWxBbnk6IGFueSA9IHdpbmRvd1xuICAgIGdsb2JhbEFueSA9IHdpbmRvd1xuXG4gICAgbGV0IENvbXBvbmVudCA9IE9yaWdpbmFsQ29tcG9uZW50XG5cbiAgICBpZiAoZ2xvYmFsQW55LkFkbWluQnJvXG4gICAgICAmJiBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNcbiAgICAgICYmIGdsb2JhbEFueS5BZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tuYW1lXVxuICAgICkge1xuICAgICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IE9yaWdpbmFsQ29tcG9uZW50PXtPcmlnaW5hbENvbXBvbmVudH0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gV3JhcHBlckNvbXBvbmVudFxufVxuXG5leHBvcnQge1xuICBhbGxvd092ZXJyaWRlIGFzIGRlZmF1bHQsXG4gIGFsbG93T3ZlcnJpZGUsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgdGhlbWVHZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGJyYW5kaW5nOiBCcmFuZGluZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAke3RoZW1lR2V0KCdzcGFjZScsICdsZycpfSAke3RoZW1lR2V0KCdzcGFjZScsICd4eGwnKX0gJHt0aGVtZUdldCgnc3BhY2UnLCAneHhsJyl9O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJiA+IGgxIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzJywgJ2dyZXk4MCcpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcycsICd4bCcpfTtcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZUdldCgnbGluZUhlaWdodHMnLCAneGwnKX07XG4gIH1cblxuICAmID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICB9XG5cbiAgJjpob3ZlciBoMSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycycsICdwcmltYXJ5MTAwJyl9O1xuICB9XG5gXG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyQnJhbmRpbmc6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGJyYW5kaW5nIH0gPSBwcm9wc1xuICBjb25zdCB7IGxvZ28sIGNvbXBhbnlOYW1lIH0gPSBicmFuZGluZ1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRMb2dvXG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzKCdMb2dvJyl9XG4gICAgICB0bz17aC5kYXNoYm9hcmRVcmwoKX1cbiAgICA+XG4gICAgICB7bG9nbyA/IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICBhbHQ9e2NvbXBhbnlOYW1lfVxuICAgICAgICAvPlxuICAgICAgKSA6IDxoMT57Y29tcGFueU5hbWV9PC9oMT59XG4gICAgPC9TdHlsZWRMb2dvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93T3ZlcnJpZGUoU2lkZWJhckJyYW5kaW5nLCAnU2lkZWJhckJyYW5kaW5nJylcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlPZjtcbiIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG4iLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0b1xuICogW3N0YXJ0IGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldHRlcl9jYXNlI1N0eWxpc3RpY19vcl9zcGVjaWFsaXNlZF91c2FnZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0YXJ0IGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnZm9vQmFyJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdGT08gQkFSJ1xuICovXG52YXIgc3RhcnRDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnICcgOiAnJykgKyB1cHBlckZpcnN0KHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRDYXNlO1xuIiwiaW1wb3J0IHsgaTE4biBhcyBJMThuLCBURnVuY3Rpb24sIFRPcHRpb25zIH0gZnJvbSAnaTE4bmV4dCdcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgVHJhbnNsYXRlRnVuY3Rpb25zXG4gKiBAYWxpYXMgVHJhbnNsYXRlRnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gIC8qKlxuICAgKiBrd3kgd2hpY2ggc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW4gYSBnaXZlbiBuYW1lc3BhY2VcbiAgICovXG4gIGtleTogc3RyaW5nLFxuICAvKipcbiAgICogT3B0aW9uYWwgcmVzb3VyY2VJZCBvciBbVHJhbnNsYXRlIG9wdGlvbnNde0BsaW5rIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc31cbiAgICovXG4gIHJlc291cmNlSWQ/OiBzdHJpbmcgfCBUT3B0aW9ucyxcbiAgLyoqXG4gICAqIFtUcmFuc2xhdGUgb3B0aW9uc117QGxpbmsgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zfVxuICAgKi9cbiAgb3B0aW9ucz86IFRPcHRpb25zXG4pID0+IHN0cmluZ1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBGdW5jdGlvbnMgYXJlIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIHlvdSBjYW4gdXNlIHRvIHRyYW5zbGF0ZVxuICogeW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBPbiB0aGUgZnJvbnRlZCB0aGV5IGNhbiBiZSB1c2VkIHdpdGgge0BsaW5rIHVzZVRyYW5zbGF0aW9ufSBob29rLiBPbiB0aGUgYmFja2VuZFxuICogdGhleSBhcmUgaW5qZWN0ZWQgdG8gYW55IHtAbGluayBBZG1pbkJyb30gaW5zdGFuY2UgYW5kIHtAbGluayBBY3Rpb25Db250ZXh0fS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVGdW5jdGlvbnMge1xuICAvKipcbiAgICogc2hvcnRjdXQgZm9yIEkxOG4udHJhbnNsYXRlIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2FwaSN0XG4gICAqL1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBJMThuLnRyYW5zbGF0ZSBmdW5jdGlvbi5cbiAgICogQHNlZSBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9hcGkjdFxuICAgKi9cbiAgdHJhbnNsYXRlOiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVBY3Rpb259XG4gICAqL1xuICB0YTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCBbYWN0aW9uc117QGxpbmsgQWN0aW9ufSwgdG8gYmUgbW9yZSBzcGVjaWZpYyAtIHRoZWlyIGxhYmVscy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmFjdGlvbnMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgYWN0aW9ucy57YWN0aW9uTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGFjdGlvbiBuYW1lLlxuICAgKi9cbiAgdHJhbnNsYXRlQWN0aW9uOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZUJ1dHRvbn1cbiAgICovXG4gIHRiOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGJ1dHRvbnMuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5idXR0b25zLnthY3Rpb25OYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYGJ1dHRvbnMue2FjdGlvbk5hbWV9YC5cbiAgICogRmluYWxseSwgd2hlbiB0aGF0IGFsc28gZmFpbHMsIGl0IHJldHVybnMgc3RhcnRDYXNlIG9mIHRoZSBnaXZlbiBidXR0b24gbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVMYWJlbH1cbiAgICovXG4gIHRsOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGxhYmVscy4gTW9zdCBvZiBhbGwgYWxsIHJlc291cmNlIG5hbWVzIGFyZSB0cmVhdGVkIGFzIGxhYmVscy5cbiAgICogQWxzbywgbGFiZWxzIGFyZSB0ZXh0cyBpbiB0aGUgdXNlciBpbnRlcmZhY2Ugd2hpY2ggY2Fubm90IGJlIHJlY29nbml6ZWRcbiAgICogYXMgYW55IG90aGVyIHR5cGUuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5sYWJlbHMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgbGFiZWxzLnthY3Rpb25OYW1lfWAuXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gbGFiZWwuXG4gICAqL1xuICB0cmFuc2xhdGVMYWJlbDogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVQcm9wZXJ0eX1cbiAgICovXG4gIHRwOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LnByb3BlcnRpZXMue3Byb3BlcnR5UGF0aH1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBwcm9wZXJ0aWVzLntwcm9wZXJ0eVBhdGh9YC4gV2hlbiB0aGF0IGZhaWxzLFxuICAgKiBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogV2hhdCBpcyBpbXBvcnRhbnQgaGVyZSBpcyB0aGF0IHlvdSBjYW4gcHV0IG5lc3RlZCBwcm9wZXJ0eSBhcyB3ZWxsLCBJbiB0aGF0XG4gICAqIGNhc2UgeW91IGhhdmUgdG8gcGFzcyBkb3R0ZWQgcGF0aDpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB7XG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgIHBhcmVudDogJ3BhcmVudCBwcm9wZXJ0eScsXG4gICAqICAgICAgJ3BhcmVudC5uZXN0ZWQnOiAnbmVzdGVkIHByb3BlcnR5J1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zbGF0ZVByb3BlcnR5OiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZU1lc3NhZ2V9XG4gICAqL1xuICB0bTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCB0aGUgbWVzc2FnZXMgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0ubWVzc2FnZXMue21lc3NhZ2VOYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYG1lc3NhZ2VzLnttZXNzYWdlTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIG1lc3NhZ2UgbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZU1lc3NhZ2U6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gbmFtZS5zcGxpdCgnLicpLmpvaW4oJyYjNDY7JylcblxuY29uc3QgdHJhbnNsYXRlID0gKFxuICBpMThuOiBJMThuLFxuICBrZXk6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICByZXNvdXJjZUlkPzogc3RyaW5nIHwgVE9wdGlvbnMsXG4gIG9wdGlvbnM/OiBUT3B0aW9ucyxcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJlYWxPcHRpb25zOiBUT3B0aW9ucyA9ICh0eXBlb2YgcmVzb3VyY2VJZCA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogcmVzb3VyY2VJZCkgfHwge31cbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGZvcm1hdE5hbWUobmFtZSlcbiAgbGV0IGtleXMgPSBbYCR7a2V5fS4ke2Zvcm1hdHRlZE5hbWV9YF1cbiAgaWYgKHJlc291cmNlSWQpIHtcbiAgICBrZXlzID0gW2ByZXNvdXJjZXMuJHtyZXNvdXJjZUlkfS4ke2tleX0uJHtmb3JtYXR0ZWROYW1lfWAsIC4uLmtleXNdXG4gIH1cbiAgaWYgKGkxOG4uZXhpc3RzKGtleXMpKSB7XG4gICAgcmV0dXJuIGkxOG4udChrZXlzLCByZWFsT3B0aW9ucylcbiAgfVxuICByZXR1cm4gcmVhbE9wdGlvbnMuZGVmYXVsdFZhbHVlID8/IHN0YXJ0Q2FzZShuYW1lKVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25zID0gKGkxOG46IEkxOG4pOiBUcmFuc2xhdGVGdW5jdGlvbnMgPT4ge1xuICBjb25zdCB0cmFuc2xhdGVBY3Rpb246IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGFjdGlvbk5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ2FjdGlvbnMnLCBhY3Rpb25OYW1lIGFzIHN0cmluZywgcmVzb3VyY2VJZCwgb3B0aW9ucylcbiAgKVxuXG4gIGNvbnN0IHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gICAgYnV0dG9uTGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMsXG4gICkgPT4gKFxuICAgIHRyYW5zbGF0ZShpMThuLCAnYnV0dG9ucycsIGJ1dHRvbkxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTGFiZWw6IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdsYWJlbHMnLCBsYWJlbCBhcyBzdHJpbmcsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICBjb25zdCB0cmFuc2xhdGVQcm9wZXJ0eTogVHJhbnNsYXRlRnVuY3Rpb24gPSAocHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdwcm9wZXJ0aWVzJywgcHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTWVzc2FnZTogVHJhbnNsYXRlRnVuY3Rpb24gPSAobWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ21lc3NhZ2VzJywgbWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZUFjdGlvbixcbiAgICB0YTogdHJhbnNsYXRlQWN0aW9uLFxuICAgIHRyYW5zbGF0ZUJ1dHRvbixcbiAgICB0YjogdHJhbnNsYXRlQnV0dG9uLFxuICAgIHRyYW5zbGF0ZUxhYmVsLFxuICAgIHRsOiB0cmFuc2xhdGVMYWJlbCxcbiAgICB0cmFuc2xhdGVQcm9wZXJ0eSxcbiAgICB0cDogdHJhbnNsYXRlUHJvcGVydHksXG4gICAgdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0bTogdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0OiBpMThuLnQsXG4gICAgdHJhbnNsYXRlOiBpMThuLnQsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVzZVRyYW5zbGF0aW9uIGFzIG9yaWdpbmFsVXNlVHJhbnNsYXRpb24sXG59IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBURnVuY3Rpb24sIGkxOG4gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVGdW5jdGlvbnMsIGNyZWF0ZUZ1bmN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZS1mdW5jdGlvbnMuZmFjdG9yeSdcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9LiBBcGFydCBmcm9tIHRoYXQgaXQgYWxzbyByZXR1cm5zIGFsbCB0aGUgcHJvcGVydGllc1xuICogZGVmaW5lZCBiZWxvdy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEJveD5cbiAqICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsuLi59Pnt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnKX08QnV0dG9uPlxuICogICAgIDwvQm94PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgdXNlVHJhbnNsYXRpb25cbiAqIEBhbGlhcyBVc2VUcmFuc2xhdGlvblJlc3BvbnNlXG4gKlxuICogQHByb3BlcnR5IHtUcmFuc2xhdGVGdW5jdGlvbn0gLi4uIEFsbCBmdW5jdGlvbnMgZGVmaW5lZCBpbiB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zfVxuICovXG5leHBvcnQgdHlwZSBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0gVHJhbnNsYXRlRnVuY3Rpb25zICYge1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBDdXJyZW50IGkxOG4gaW5zdGFuY2UuXG4gICAqL1xuICBpMThuOiBpMThuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRyYW5zbGF0aW9uIHN5c3RlbSBpcyByZWFkeS4gSW4gQWRtaW5Ccm8gaXQgaXMgYWx3YXlzIHJlYWR5IDopLlxuICAgKi9cbiAgcmVhZHk6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogRXh0ZW5kcyB0aGUgdXNlVHJhbnNsYXRpb24gaG9vayBmcm9tIHJlYWN0LWkxOG5leHQgbGlicmFyeS5cbiAqXG4gKiBSZXR1cm5zIGFsbCB0aGUge0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9uc30gKyBtZXRob2RzIHJldHVybmVkIGJ5IHRoZSBvcmlnaW5hbFxuICogdXNlVHJhbnNsYXRpb24gbWV0aG9kIGZyb20gcmVhY3QtaTE4bmV4dCBsaWtlOiBgaTE4bmAgaW5zdGFuY2UgYW5kIGByZWFkeWAgZmxhZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGJ1bmRsZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHJldHVybnMge1VzZVRyYW5zbGF0aW9uUmVzcG9uc2V9XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9ICgpOiBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBjb25zdCB7IGkxOG4sIC4uLnJlc3QgfSA9IG9yaWdpbmFsVXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB0cmFuc2xhdGVGdW5jdGlvbnMgPSBjcmVhdGVGdW5jdGlvbnMoaTE4bilcblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3QsXG4gICAgaTE4bixcbiAgICAuLi50cmFuc2xhdGVGdW5jdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVHJhbnNsYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmlnYXRpb24sIE5hdmlnYXRpb25FbGVtZW50UHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICBwYWdlcz86IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XG59XG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyUGFnZXM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2VzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBpZiAoIXBhZ2VzIHx8ICFwYWdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKDw+PC8+KVxuICB9XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAocGFnZSk6IGJvb2xlYW4gPT4gKFxuICAgICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goYC9wYWdlcy8ke3BhZ2UubmFtZX1gKVxuICApXG5cbiAgY29uc3QgZWxlbWVudHM6IEFycmF5PE5hdmlnYXRpb25FbGVtZW50UHJvcHM+ID0gcGFnZXMubWFwKHBhZ2UgPT4gKHtcbiAgICBpZDogcGFnZS5uYW1lLFxuICAgIGxhYmVsOiBwYWdlLm5hbWUsXG4gICAgaXNTZWxlY3RlZDogaXNBY3RpdmUocGFnZSksXG4gICAgaWNvbjogcGFnZS5pY29uLFxuICAgIGhyZWY6IGgucGFnZVVybChwYWdlLm5hbWUpLFxuICAgIG9uQ2xpY2s6IChldmVudCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGVsZW1lbnQuaHJlZikge1xuICAgICAgICBoaXN0b3J5LnB1c2goZWxlbWVudC5ocmVmKVxuICAgICAgfVxuICAgIH0sXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgncGFnZXMnKX1cbiAgICAgIGVsZW1lbnRzPXtlbGVtZW50c31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJQYWdlc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTb2Z0d2FyZUJyb3RoZXJzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmNvbnN0IFNpZGViYXJGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8Qm94IG10PVwibGdcIj5cbiAgICA8U29mdHdhcmVCcm90aGVycyAvPlxuICA8L0JveD5cbilcblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyRm9vdGVyLCAnU2lkZWJhckZvb3RlcicpXG4iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvblBhcmFtcyxcbiAgQnVsa0FjdGlvblBhcmFtcyxcbiAgUmVjb3JkQWN0aW9uUGFyYW1zLFxuICBBY3Rpb25QYXJhbXMsXG59IGZyb20gJy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlLCBCdWxrQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxubGV0IGdsb2JhbEFueTogYW55ID0ge31cblxudHJ5IHtcbiAgZ2xvYmFsQW55ID0gd2luZG93XG59IGNhdGNoIChlcnJvcikge1xuICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gJ3dpbmRvdyBpcyBub3QgZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9IGVsc2Uge1xuICAgIGdsb2JhbEFueSA9IHsgaXNPblNlcnZlcjogdHJ1ZSB9XG4gIH1cbn1cblxuLyoqXG4gKiBUeXBlIG9mIGFuIFtheGlvcyByZXF1ZXN0XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDN9XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAYWxpYXMgQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M1xuICovXG5cbmNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgaWYgKGdsb2JhbEFueS5pc09uU2VydmVyKSB7IHJldHVybiB9XG4gIGNvbnN0IGxvZ2luVXJsID0gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURS5wYXRocy5sb2dpblBhdGhdLmpvaW4oJycpXG4gIC8vIGlmIHJlc3BvbnNlIGhhcyByZWRpcmVjdCB0byBsb2dpblVybFxuICBpZiAocmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTFxuICAgICAgJiYgcmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTC5tYXRjaChsb2dpblVybClcbiAgKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYWxlcnQoJ1lvdXIgc2Vzc2lvbiBleHBpcmVkLiBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIGxvZ2luIHNjcmVlbicpXG4gICAgZ2xvYmFsQW55LmxvY2F0aW9uLmFzc2lnbihsb2dpblVybClcbiAgfVxufVxuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqXG4gKiBAYWxpYXMgQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBBY3Rpb25QYXJhbXNcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKlxuICogQGFsaWFzIFJlc291cmNlQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlc291cmNlQWN0aW9uUGFyYW1zICYge1xuICBxdWVyeT86IHN0cmluZztcbn1cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQWN0aW9uQVBJUGFyYW1zfVxuICpcbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlY29yZEFjdGlvblBhcmFtc1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqXG4gKiBAYWxpYXMgQnVsa0FjdGlvbkFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDNcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIEJ1bGtBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBCdWxrQWN0aW9uUGFyYW1zXG5cblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKlxuICogQGFsaWFzIEdldFBhZ2VBUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIEdldFBhZ2VBUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiB7XG4gIC8qKlxuICAgKiBVbmlxdWUgcGFnZSBuYW1lXG4gICAqL1xuICBwYWdlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENsaWVudCB3aGljaCBhY2Nlc3MgdGhlIGFkbWluIEFQSS5cbiAqIFVzZSBpdCB0byBmZXRjaCBkYXRhIGZyb20gYXV0byBnZW5lcmF0ZWQgQWRtaW5Ccm8gQVBJLlxuICpcbiAqIEluIHRoZSBiYWNrZW5kIGl0IHVzZXMgW2F4aW9zXShodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MpIGNsaWVudFxuICogbGlicmFyeS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAqIC8vIGZldGNoaW5nIGFsbCByZWNvcmRzXG4gKiBhcGkucmVzb3VyY2VBY3Rpb24oeyByZXNvdXJjZUlkOiAnQ29tbWVudHMnLCBhY3Rpb25OYW1lOiAnbGlzdCcgfSkudGhlbihyZXN1bHRzID0+IHsuLi59KVxuICogYGBgXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBBcGlDbGllbnQge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZ1xuXG4gIHByaXZhdGUgY2xpZW50OiBBeGlvc0luc3RhbmNlXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gQXBpQ2xpZW50LmdldEJhc2VVcmwoKVxuICAgIHRoaXMuY2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAoZ2xvYmFsQW55LmlzT25TZXJ2ZXIpIHsgcmV0dXJuICcnIH1cbiAgICByZXR1cm4gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMucm9vdFBhdGhdLmpvaW4oJycpXG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGJ5IHF1ZXJ5IHN0cmluZyBmb3IgcmVjb3JkcyBpbiBhIGdpdmVuIHJlc291cmNlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkICBpZCBvZiBhIHtAbGluayBSZXNvdXJjZUpTT059XG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBvcHRpb25zLnF1ZXJ5ICAgICAgIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxTZWFyY2hSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBzZWFyY2hSZWNvcmRzKHsgcmVzb3VyY2VJZCwgcXVlcnkgfToge1xuICAgIHJlc291cmNlSWQ6IHN0cmluZztcbiAgICBxdWVyeTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxBcnJheTxSZWNvcmRKU09OPj4ge1xuICAgIGlmIChnbG9iYWxBbnkuaXNPblNlcnZlcikgeyByZXR1cm4gW10gfVxuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSAnc2VhcmNoJ1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXNvdXJjZUFjdGlvbih7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIHF1ZXJ5IH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZWNvcmRzXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZXNvdXJjZSB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uQVBJUGFyYW1zfSAgICAgb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBY3Rpb25SZXNwb25zZT59ICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyByZXNvdXJjZUFjdGlvbihvcHRpb25zOiBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+IHtcbiAgICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIGRhdGEsIHF1ZXJ5LCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGxldCB1cmwgPSBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9hY3Rpb25zLyR7YWN0aW9uTmFtZX1gXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBxID0gZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KVxuICAgICAgdXJsID0gW3VybCwgcV0uam9pbignLycpXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZWNvcmQge0BsaW5rIEFjdGlvbn0gb24gdGhlIGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtSZWNvcmRBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+fSAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIHJlY29yZEFjdGlvbihvcHRpb25zOiBSZWNvcmRBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PiB7XG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgZGF0YSwgLi4uYXhpb3NQYXJhbXMgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9yZWNvcmRzLyR7cmVjb3JkSWR9LyR7YWN0aW9uTmFtZX1gLFxuICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAuLi5heGlvc1BhcmFtcyxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgZ2l2ZW4gYnVsayB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge0J1bGtBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QnVsa0FjdGlvblJlc3BvbnNlPn0gICAgICAgICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyBidWxrQWN0aW9uKG9wdGlvbnM6IEJ1bGtBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8QnVsa0FjdGlvblJlc3BvbnNlPj4ge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLCBkYXRhLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgcGFyYW1zLnNldCgncmVjb3JkSWRzJywgKHJlY29yZElkcyB8fCBbXSkuam9pbignLCcpKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9hcGkvcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH0vYnVsay8ke2FjdGlvbk5hbWV9YCxcbiAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGRhc2hib2FyZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0gICB7QXhpb3NSZXF1ZXN0Q29uZmlnfSAgICAgICBvcHRpb25zXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPGFueT59ICAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgZnVuY3Rpb24gZGVmaW5lZCBpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI2Rhc2hib2FyZH1cbiAgICovXG4gIGFzeW5jIGdldERhc2hib2FyZChvcHRpb25zOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5nZXQoJy9hcGkvZGFzaGJvYXJkJywgb3B0aW9ucylcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgaGFuZGxlciBmdW5jdGlvbiBvZiBnaXZlbiBwYWdlIGFuZCByZXR1cm5zIGl0cyByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtICAge0dldFBhZ2VBUElQYXJhbXN9ICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8YW55Pn0gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgb2YgZ2l2ZW4gcGFnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZCBpbiB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI3BhZ2VzfVxuICAgKi9cbiAgYXN5bmMgZ2V0UGFnZShvcHRpb25zOiBHZXRQYWdlQVBJUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IHBhZ2VOYW1lLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvYXBpL3BhZ2VzLyR7cGFnZU5hbWV9YCxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG5leHBvcnQge1xuICBBcGlDbGllbnQgYXMgZGVmYXVsdCxcbiAgQXBpQ2xpZW50LFxufVxuIiwiZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfTlVMTCA9ICdfX0ZPUk1fVkFMVUVfTlVMTF9fJ1xuZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUID0gJ19fRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1RfXydcbmV4cG9ydCBjb25zdCBGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZID0gJ19fRk9STV9WQUxVRV9FTVBUWV9BUlJBWV9fJ1xuXG5jb25zdCBpc09iamVjdE9yQXJyYXkgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICYmICh2YWx1ZSBhcyBvYmplY3QpLmNvbnN0cnVjdG9yICE9PSBGaWxlXG4gICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuKVxuXG4vKipcbiAqIENoYW5nZXMgUmVjb3JkSlNPTiB0aGF0IGl0IGNhbiBiZSBzZW5kIGFzIGEgRm9ybURhdGEgdG8gdGhlIGJhY2tlbmQuXG4gKlxuICogRm9ybURhdGEgaXMgcmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBmaWxlcyB2aWEgdGhlIHdpcmUuIEJ1dCBpdCBoYXMgbGltaXRhdGlvbnMuXG4gKiBOYW1lbHkgaXQgY2FuIG9ubHkgdHJhbnNwb3J0IGZpbGVzIGFuZCBzdHJpbmdzLiBUaGF0IGlzIHdoeSB3ZSBoYXZlIHRvIGNvbnZlcnQgc29tZVxuICogc3RhbmRhcmQgdHlwZXMgbGlrZSBOVUxMIHRvIGNvbnN0YW50cyBzbyB0aGV5IGNhbiBiZSBwcm9wZXJ0eSBjb252ZXJ0ZWQgYmFjayBieSB0aGUgYmFja2VuZC5cbiAqIEFuZCB0aHVzIHByb3Blcmx5IGhhbmRsZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtSZWNvcmRKU09OfSAgcmVjb3JkXG4gKiBAcmV0dXJuICB7Rm9ybURhdGF9XG4gKi9cbmZ1bmN0aW9uIHBhcmFtc1RvRm9ybURhdGEocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogRm9ybURhdGEge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgLy8gQXNzdW1lIHRoYXQgcGFyYW1zIGFyZSBmbGF0dGVkXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgLy8ge0BsaW5rIHVwZGF0ZVJlY29yZH0gZG9lcyBub3QgY2hhbmdlIGVtcHR5IG9iamVjdHMgXCJ7fVwiIC0gc28gaW4gb3JkZXIgdG8gcHJldmVudCBoYXZpbmdcbiAgICAvLyB0aGVtIGNoYW5nZWQgdG8gXCJbb2JqZWN0IE9iamVjdF1cIiB3ZSBoYXZlIHRvIHNldCB0aGVtIHRvIGVtcHR5IHN0cmluZ3MuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9OVUxMKVxuICAgIH1cbiAgICAvLyBGaWxlIG9iamVjdHMgaGFzIHRvIGdvIHRocm91Z2ggYmVjYXVzZSB0aGV5IGFyZSBoYW5kbGVkIGJ5IEZvcm1EYXRhXG4gICAgaWYgKGlzT2JqZWN0T3JBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9FTVBUWV9BUlJBWSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVClcbiAgICB9XG5cbiAgICAvLyBSZXN0IGdvZXMgYXMgYSBzdGFuZGFyZCB2YWx1ZVxuICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpXG4gIH0pXG4gIHJldHVybiBmb3JtRGF0YVxufVxuXG5leHBvcnQge1xuICBwYXJhbXNUb0Zvcm1EYXRhIGFzIGRlZmF1bHQsXG4gIHBhcmFtc1RvRm9ybURhdGEsXG59XG4iLCJpbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uLy4uL2hvYy93aXRoLW5vdGljZSdcblxuZXhwb3J0IGNvbnN0IEFERF9OT1RJQ0UgPSAnQUREX05PVElDRSdcblxuZXhwb3J0IHR5cGUgQWRkTm90aWNlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBBRERfTk9USUNFO1xuICBkYXRhOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZE5vdGljZSA9IChkYXRhOiBOb3RpY2VNZXNzYWdlID0geyBtZXNzYWdlOiAnJyB9KTogQWRkTm90aWNlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogQUREX05PVElDRSxcbiAgZGF0YToge1xuICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLFxuICAgIHR5cGU6IGRhdGEudHlwZSB8fCAnc3VjY2VzcycsXG4gICAgcHJvZ3Jlc3M6IDAsXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZE5vdGljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYWRkLW5vdGljZSdcbmltcG9ydCB7IE5vdGljZU1lc3NhZ2UgfSBmcm9tICcuLi9ob2Mvd2l0aC1ub3RpY2UnXG5cbi8qKlxuICogQG1lbWJlcm9mIHVzZU5vdGljZVxuICogQGFsaWFzIEFkZE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBBZGROb3RpY2UgPSAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiBhbnk7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogSG9vayB3aGljaCBhbGxvd3MgeW91IHRvIGFkZCBub3RpY2UgbWVzc2FnZSB0byB0aGUgYXBwLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHVzZU5vdGljZSwgQnV0dG9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBzZW5kTm90aWNlID0gdXNlTm90aWNlKClcbiAqICAgcmVuZGVyIChcbiAqICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnSSBhbSBhd2Vzb21lJyB9KX0+SSBhbSBhd2Vzb21lPC9CdXR0b24+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAYnVuZGxlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VOb3RpY2UgPSAoKTogQWRkTm90aWNlID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIHJldHVybiAobm90aWNlKTogYW55ID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VOb3RpY2VcbiIsImltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuLyoqXG4gKiBIYW5kbGVycyBvZiBhbGwgW0FjdGlvbnNde0BsaW5rIEFjdGlvbn0gb2YgdHlwZSBgcmVjb3JkYCByZXR1cm5zIHJlY29yZC5cbiAqIERlcGVuZGluZyBvbiBhIHBsYWNlIGFuZCByZXNwb25zZSB3ZSBoYXZlIHRvIG1lcmdlIHdoYXQgd2FzIHJldHVybmVkXG4gKiB0byB0aGUgYWN0dWFsIHN0YXRlLiBJdCBpcyBkb25lIGluIGZvbGxvd2luZyBwbGFjZXM6XG4gKiAtIHtAbGluayB1c2VSZWNvcmR9IGhvb2tcbiAqIC0ge0BsaW5rIFJlY29yZEluTGlzdH0gY29tcG9uZW50XG4gKiAtIHtAbGluayBSZWNvcmRBY3Rpb259IGNvbXBvbmVudFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IG1lcmdlUmVjb3JkUmVzcG9uc2UgPSAocmVjb3JkOiBSZWNvcmRKU09OLCByZXNwb25zZTogUmVjb3JkQWN0aW9uUmVzcG9uc2UpOiBSZWNvcmRKU09OID0+ICh7XG4gIC8vIHdlIHN0YXJ0IGZyb20gdGhlIHJlc3BvbnNlIGJlY2F1c2UgaXQgY2FuIGhhdmUgZGlmZmVyZW50IHJlY29yZEFjdGlvbnMgb3IgYnVsa0FjdGlvbnNcbiAgLi4uKHJlc3BvbnNlLnJlY29yZCB8fCByZWNvcmQpLFxuICAvLyByZWNvcmRzIGhhcyB0byBiZSByZXNldCBldmVyeSB0aW1lIGJlY2F1c2Ugc28gdGhhdCB1c2VyIHdvbnRcbiAgLy8gc2VlIG9sZCBlcnJvcnMgd2hpY2ggYXJlIG5vdCByZWxldmFudCBhbnltb3JlXG4gIGVycm9yczogcmVzcG9uc2UucmVjb3JkLmVycm9ycyxcbiAgcG9wdWxhdGVkOiB7IC4uLnJlY29yZC5wb3B1bGF0ZWQsIC4uLnJlc3BvbnNlLnJlY29yZC5wb3B1bGF0ZWQgfSxcbiAgcGFyYW1zOiB7IC4uLnJlY29yZC5wYXJhbXMsIC4uLnJlc3BvbnNlLnJlY29yZC5wYXJhbXMgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlUmVjb3JkUmVzcG9uc2VcbiIsImNvbnN0IERFTElNSVRFUiA9ICcuJ1xuXG5cbmV4cG9ydCB7IERFTElNSVRFUiB9XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG4vLyB0aGlzIGlzIHRoZSByZWdleCB1c2VkIHRvIGZpbmQgYWxsIGV4aXN0aW5nIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBhIGtleVxuXG5leHBvcnQgY29uc3QgcHJvcGVydHlLZXlSZWdleCA9IChwcm9wZXJ0eVBhdGg6IHN0cmluZywgb3B0aW9ucz86IEdldE9wdGlvbnMpOiBSZWdFeHAgPT4ge1xuICBjb25zdCBkZWxpbWl0ZXIgPSBuZXcgUmVnRXhwKGBcXFxcJHtERUxJTUlURVJ9YCwgJ2cnKVxuICBjb25zdCBlc2NhcGVkRGVsaW1pdGVyID0gYFxcXFwke0RFTElNSVRFUn1gXG4gIC8vIGJ1dCBmb3IgYG5lc3RlZC4xLnByb3BlcnR5LjBgIGl0IHdpbGwgcHJvZHVjZSBgbmVzdGVkKFxcLnxcXC5cXGQrXFwuKTEoXFwufFxcLlxcZCtcXC4pcHJvcGVydHkuMGBcbiAgLy8gYW5kIHRoaXMgaXMgaW50ZW50aW9uYWwgYmVjYXVzZSB1c2VyIGNhbiBnaXZlIGFuIG9uZSBpbmRleCBpbiBwcm9wZXJ0eSBwYXRoIGZvciB3aXRoIGRlZXBseVxuICAvLyBuZXN0ZWQgYXJyYXlzXG4gIGNvbnN0IGVzY2FwZWREZWxpbWl0ZXJPckluZGV4ID0gYCgke2VzY2FwZWREZWxpbWl0ZXJ9fCR7ZXNjYXBlZERlbGltaXRlcn1cXFxcZCske2VzY2FwZWREZWxpbWl0ZXJ9KWBcbiAgY29uc3QgcGF0aCA9IG9wdGlvbnM/LmluY2x1ZGVBbGxTaWJsaW5nc1xuICAgID8gcHJvcGVydHlQYXRoLnJlcGxhY2UoZGVsaW1pdGVyLCBlc2NhcGVkRGVsaW1pdGVyT3JJbmRleClcbiAgICA6IHByb3BlcnR5UGF0aC5yZXBsYWNlKGRlbGltaXRlciwgZXNjYXBlZERlbGltaXRlcilcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3BhdGh9KCR8JHtlc2NhcGVkRGVsaW1pdGVyfSlgLCAnJylcbn1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMsIEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9zZWxlY3QtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIGZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7R2V0T3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3Qgc2VsZWN0UGFyYW1zID0gKFxuICBwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsXG4gIHByb3BlcnRpZXM6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gIG9wdGlvbnM/OiBHZXRPcHRpb25zLFxuKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHByb3BlcnR5QXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXVxuICBjb25zdCBzZWxlY3RlZCA9IHByb3BlcnR5QXJyYXlcbiAgICAuZmlsdGVyKHByb3BlcnR5UGF0aCA9PiAhIXByb3BlcnR5UGF0aClcbiAgICAucmVkdWNlKChnbG9iYWxNZW1vLCBwcm9wZXJ0eVBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gcHJvcGVydHlLZXlSZWdleChwcm9wZXJ0eVBhdGgsIG9wdGlvbnMpXG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC8vIGZpbHRlciBhbGwga2V5cyB3aGljaCBzdGFydHMgd2l0aCBwcm9wZXJ0eSBwYXRoXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5tYXRjaChyZWdleCkpXG4gICAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgICAgIG1lbW9ba2V5XSA9IChwYXJhbXNba2V5XSBhcyBzdHJpbmcpXG4gICAgICAgICAgcmV0dXJuIG1lbW9cbiAgICAgICAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdsb2JhbE1lbW8sXG4gICAgICAgIC4uLmZpbHRlcmVkLFxuICAgICAgfVxuICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gIHJldHVybiBzZWxlY3RlZFxufVxuXG5leHBvcnQgeyBzZWxlY3RQYXJhbXMgfVxuIiwiaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4vZmxhdC50eXBlcydcblxuLyoqXG4gKiBAbG9hZCAuL2ZpbHRlci1vdXQtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIGZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5jb25zdCBmaWx0ZXJPdXRQYXJhbXMgPSAoXG4gIHBhcmFtczogRmxhdHRlblBhcmFtcyxcbiAgcHJvcGVydGllczogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPixcbik6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCBwcm9wZXJ0eUFycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc11cblxuICByZXR1cm4gcHJvcGVydHlBcnJheVxuICAgIC5maWx0ZXIocHJvcGVydHlQYXRoID0+ICEhcHJvcGVydHlQYXRoKVxuICAgIC5yZWR1Y2UoKGdsb2JhbEZpbHRlcmVkLCBwcm9wZXJ0eVBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gcHJvcGVydHlLZXlSZWdleChwcm9wZXJ0eVBhdGgpXG5cbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhnbG9iYWxGaWx0ZXJlZClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gIWtleS5tYXRjaChyZWdleCkpXG4gICAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgICAgIG1lbW9ba2V5XSA9IChwYXJhbXNba2V5XSBhcyBzdHJpbmcpXG4gICAgICAgICAgcmV0dXJuIG1lbW9cbiAgICAgICAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcbiAgICB9LCBwYXJhbXMpXG59XG5cbmV4cG9ydCB7IGZpbHRlck91dFBhcmFtcyB9XG4iLCJpbXBvcnQgeyBQYXRoUGFydHMgfSBmcm9tICcuL3BhdGgtcGFydHMudHlwZSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgZmxhdFxuICogQGFsaWFzIFBhdGhUb1BhcnRzT3B0aW9uc1xuICovXG5leHBvcnQgdHlwZSBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYXJyYXkgaW5kZXhlcyBzaG91bGQgYmUgc2tpcHBlZCBmcm9tIHRoZSBvdXRjb21lLlxuICAgKi9cbiAgc2tpcEFycmF5SW5kZXhlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGxvYWQgLi9wYXRoLXRvLXBhcnRzLmRvYy5tZFxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgIHByb3BlcnR5UGF0aFxuICogQHBhcmFtICAge1BhdGhUb1BhcnRzT3B0aW9uc30gIG9wdGlvbnNcbiAqIEByZXR1cm5zICB7UGF0aFBhcnRzfVxuICpcbiAqIEBtZW1iZXJvZiBmbGF0XG4gKiBAYWxpYXMgcGF0aFRvUGFydHNcbiAqL1xuY29uc3QgcGF0aFRvUGFydHMgPSAocHJvcGVydHlQYXRoOiBzdHJpbmcsIG9wdGlvbnM6IFBhdGhUb1BhcnRzT3B0aW9ucyA9IHt9KTogUGF0aFBhcnRzID0+IHtcbiAgbGV0IGFsbFBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJylcbiAgaWYgKG9wdGlvbnMuc2tpcEFycmF5SW5kZXhlcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBhbGxQYXJ0cyA9IGFsbFBhcnRzLmZpbHRlcihwYXJ0ID0+IGlzTmFOKCtwYXJ0KSlcbiAgfVxuICByZXR1cm4gYWxsUGFydHMucmVkdWNlKChtZW1vLCBwYXJ0KSA9PiB7XG4gICAgaWYgKG1lbW8ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5tZW1vLFxuICAgICAgICBbbWVtb1ttZW1vLmxlbmd0aCAtIDFdLCBwYXJ0XS5qb2luKCcuJyksXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiBbcGFydF1cbiAgfSwgW10gYXMgQXJyYXk8c3RyaW5nPilcbn1cblxuZXhwb3J0IHsgcGF0aFRvUGFydHMgfVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5pbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuLi9mbGF0J1xuaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgcGF0aFRvUGFydHMgfSBmcm9tICcuL3BhdGgtdG8tcGFydHMnXG5cbmNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgLy8gTm9kZSBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIEZpbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGxcbiAgfVxuICAvLyBXaW5kb3cgZW52aXJvbm1lbnRcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbi8qKlxuICogQGxvYWQgLi9zZXQuZG9jLm1kXG4gKiBAbWVtYmVyb2YgZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVBhdGhcbiAqIEBwYXJhbSB7YW55fSBbdmFsdWVdICAgICAgIGlmIG5vdCBnaXZlIGZ1bmN0aW9uIHdpbGwgb25seSB0cnkgdG8gcmVtb3ZlIG9sZCBrZXlzXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3Qgc2V0ID0gKHBhcmFtczogRmxhdHRlblBhcmFtcyA9IHt9LCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgdmFsdWU/OiBhbnkpOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgcmVnZXggPSBwcm9wZXJ0eUtleVJlZ2V4KHByb3BlcnR5UGF0aClcblxuICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIGtleXNcbiAgY29uc3QgcGFyYW1zQ29weSA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAuZmlsdGVyKGtleSA9PiAha2V5Lm1hdGNoKHJlZ2V4KSlcbiAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgIG1lbW9ba2V5XSA9IHBhcmFtc1trZXldXG5cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0dGVuKHZhbHVlKSBhcyBhbnlcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGZsYXR0ZW5lZCkubGVuZ3RoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZsYXR0ZW5lZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgcGFyYW1zQ29weVtgJHtwcm9wZXJ0eVBhdGh9JHtERUxJTUlURVJ9JHtrZXl9YF0gPSBmbGF0dGVuZWRba2V5XVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSBbXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zQ29weVtwcm9wZXJ0eVBhdGhdID0ge31cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zQ29weVtwcm9wZXJ0eVBhdGhdID0gdmFsdWVcbiAgICB9XG5cbiAgICAvLyB3aGVuIHVzZXIgZ2F2ZSB7IFwibmVzdGVkLnZhbHVlXCI6IFwic29tZXRoaW5nXCIgfSBhbmQgaGFkIFwibmVzdGVkXCIgc2V0IHRvIGBudWxsYCwgdGhlblxuICAgIC8vIG5lc3RlZCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgIGNvbnN0IHBhcnRzID0gcGF0aFRvUGFydHMocHJvcGVydHlQYXRoKS5zbGljZSgwLCAtMSlcbiAgICBpZiAocGFydHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zQ29weSlcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gIXBhcnRzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgICAgIG1lbW9ba2V5XSA9IHBhcmFtc0NvcHlba2V5XVxuXG4gICAgICAgICAgcmV0dXJuIG1lbW9cbiAgICAgICAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtc0NvcHlcbn1cblxuZXhwb3J0IHsgc2V0IH1cbiIsImltcG9ydCB7IHVuZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5pbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IHNlbGVjdFBhcmFtcyB9IGZyb20gJy4vc2VsZWN0LXBhcmFtcydcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuLi9mbGF0J1xuaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4vZmxhdC50eXBlcydcblxuY29uc3QgVEVNUF9IT0xESU5HX0tFWSA9ICdURU1QX0hPTERJTkdfS0VZJ1xuXG4vKipcbiAqIEBsb2FkIC4vZ2V0LmRvYy5tZFxuICogQG1lbWJlcm9mIGZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gICBwYXJhbXMgICAgICBmbGF0dGVuIHBhcmFtcyBmcm9tIHdoaWNoIHByb3BlcnR5IGhhcyB0byBiZSB0YWtlblxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIFtwcm9wZXJ0eVBhdGhdICBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtHZXRPcHRpb25zfSAgICAgIG9wdGlvbnMgICAgIG9wdGlvbnNcbiAqIEByZXR1cm5zIHthbnl9ICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHByb3BlcnR5IGtleSBleGlzdHMgZGlyZWN0bHkgaXQgcmV0dXJucyB3aGF0IGlzIGluc2lkZSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgaXQgdHJpZXMgdG8gZmluZCBhbnkgbmVzdGVkIG9iamVjdHMgYW5kIHJldHVybnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtXG4gKi9cbmNvbnN0IGdldCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMgPSB7fSwgcHJvcGVydHlQYXRoPzogc3RyaW5nLCBvcHRpb25zPzogR2V0T3B0aW9ucyk6IGFueSA9PiB7XG4gIGlmICghcHJvcGVydHlQYXRoKSB7XG4gICAgcmV0dXJuIHVuZmxhdHRlbihwYXJhbXMpXG4gIH1cblxuICAvLyB3aGVuIG9iamVjdCBoYXMgdGhpcyBrZXkgLSBzaW1wbHkgcmV0dXJuIGl0XG4gIC8vIHdlIGNhbm5vdCByZWx5IG9uIHR5cGVvZiBwYXJhbXNbcHJvcGVydHlQYXRoICE9PSAndW5kZWZpbmVkJyBiZWNhdXNlIHBhcmFtcyBjYW4gYWN0dWFsbHkgYmVcbiAgLy8gdW5kZWZpbmVkIGFuZCBpbiBzdWNoIGNhc2UgaWYgd291bGQgcGFzcyBhbmQgZnVuY3Rpb24gd291bGQgcmV0dXJuIFt1bmRlZmluZWRdXG4gIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmZpbmQoa2V5ID0+IChrZXkgPT09IHByb3BlcnR5UGF0aCkpKSB7XG4gICAgcmV0dXJuIHBhcmFtc1twcm9wZXJ0eVBhdGhdXG4gIH1cblxuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHNlbGVjdFBhcmFtcyhwYXJhbXMsIHByb3BlcnR5UGF0aCwgb3B0aW9ucylcblxuICBjb25zdCBuZXN0ZWRQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRQYXJhbXMpLnJlZHVjZSgobWVtbywga2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdLZXkgPSBrZXkucmVwbGFjZShyZWdleCwgYCR7VEVNUF9IT0xESU5HX0tFWX0ke0RFTElNSVRFUn1gKVxuXG4gICAgLy8gd2hlbiB1c2VyIHdhbnRzIHRvIHRha2UgYWxsU2libGluZ3Mgd2UgaGF2ZSB0byBmaXggdGhlIGluZGV4ZXMgc28gbmVzdGVkIGl0ZW1zIGZyb21cbiAgICAvLyBkaWZmZXJlbnQgc2libGluZ3MgZG9uJ3Qgb3ZlcmxhcFxuICAgIC8vXG4gICAgLy8gRXhhbXBsZSBmb3Iga2V5IGBuZXN0ZWQuMS5lbGA6XG4gICAgLy8gICduZXN0ZWQuMC5lbC4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICduZXN0ZWQuMC5lbC4xLnZhbHVlJzogJ3ZhbDAuMScsXG4gICAgLy8gICduZXN0ZWQuMS5lbC4wLnZhbHVlJzogJ3ZhbDEnLFxuICAgIC8vICAnbmVzdGVkLjEuZWwuMS52YWx1ZSc6ICd2YWwyJyxcbiAgICAvL1xuICAgIC8vIGhhcyB0byBiZSBjaGFuZ2VkIHRvOlxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICdURU1QX0hPTERJTkdfS0VZLjEudmFsdWUnOiAndmFsMC4xJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMi52YWx1ZSc6ICd2YWwxJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMy52YWx1ZSc6ICd2YWwyJyxcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzKSB7XG4gICAgICBuZXdLZXkgPSBuZXdLZXkucmVwbGFjZShcbiAgICAgICAgbmV3IFJlZ0V4cChgJHtURU1QX0hPTERJTkdfS0VZfVxcXFwke0RFTElNSVRFUn0oXFxcXGQrKWApLFxuICAgICAgICBgJHtURU1QX0hPTERJTkdfS0VZfS4ke2luZGV4fWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgbWVtb1tuZXdLZXldID0gc2VsZWN0ZWRQYXJhbXNba2V5XVxuXG4gICAgcmV0dXJuIG1lbW9cbiAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcblxuICBpZiAoT2JqZWN0LmtleXMobmVzdGVkUHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgcmV0dXJuICh1bmZsYXR0ZW4obmVzdGVkUHJvcGVydGllcykgYXMge30pW1RFTVBfSE9MRElOR19LRVldXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgeyBnZXQgfVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zZXQnXG5cbi8qKlxuICogTWVyZ2VzIHBhcmFtcyB0b2dldGhlciBhbmQgcmV0dXJucyBmbGF0dGVuIHJlc3VsdFxuICpcbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gLi4ubWVyZ2VQYXJhbXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICogQG1lbWJlcm9mIGZsYXRcbiAqL1xuY29uc3QgbWVyZ2UgPSAocGFyYW1zOiBhbnkgPSB7fSwgLi4ubWVyZ2VQYXJhbXM6IEFycmF5PGFueT4pOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgZmxhdHRlblBhcmFtcyA9IGZsYXR0ZW4ocGFyYW1zKVxuXG4gIC8vIHJldmVyc2UgYmVjYXVzZSB3ZSBtZXJnZSBmcm9tIHJpZ2h0XG4gIHJldHVybiBtZXJnZVBhcmFtcy5yZXZlcnNlKCkucmVkdWNlKChnbG9iYWxNZW1vLCBtZXJnZVBhcmFtKSA9PiAoXG4gICAgT2JqZWN0LmtleXMobWVyZ2VQYXJhbSlcbiAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4gKHNldChtZW1vLCBrZXksIG1lcmdlUGFyYW1ba2V5XSkpLCBnbG9iYWxNZW1vKVxuICApLCBmbGF0dGVuUGFyYW1zIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG59XG5cbmV4cG9ydCB7IG1lcmdlIH1cbiIsImltcG9ydCB7IGZpbHRlck91dFBhcmFtcyB9IGZyb20gJy4vZmlsdGVyLW91dC1wYXJhbXMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbi8qKlxuICogQGxvYWQgLi9yZW1vdmUtcGF0aC5kb2MubWRcbiAqIEBtZW1iZXJvZiBmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlUGF0aCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsIHBhdGg6IHN0cmluZyk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICAvLyBieSBkZWZhdWx0IHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIGZyb20gdGhlIG9iamVjdFxuICBsZXQgZmlsdGVyZWQgPSBmaWx0ZXJPdXRQYXJhbXMocGFyYW1zLCBwYXRoKVxuXG4gIC8vIHJldmVyc2UgbWVhbnMgdGhhdCB3ZSBpdGVyYXRlIGZyb20gdGhlIGNsb3NlcyBwYXJlbnRcbiAgY29uc3QgcGFyZW50UGF0aHMgPSBwYXRoVG9QYXJ0cyhwYXRoKS5yZXZlcnNlKClcblxuICAvLyBidXQgaWYgb25lIG9mIHRoZSBwYXJlbnQgaXMgYW4gYXJyYXlcbiAgcGFyZW50UGF0aHMuZmluZCgocGFyZW50UGF0aCwgcGFyZW50SW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXQocGFyYW1zLCBwYXJlbnRQYXRoKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIC8vIHByZXZpb3VzIGVsZW1lbnQgaXMgc3RyaW5naWZpZWQgaW5kZXggbGlrZSAncHJvcGVydHkuMSdcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF0aHMgPSBwYXJlbnRQYXRoc1twYXJlbnRJbmRleCAtIDFdLnNwbGl0KERFTElNSVRFUilcbiAgICAgIC8vIHNvIHRoaXMgaXMgdGhlIGluZGV4OiAxXG4gICAgICBjb25zdCBwcmV2aW91c1BhdGhJbmRleCA9IHByZXZpb3VzUGF0aHNbcHJldmlvdXNQYXRocy5sZW5ndGggLSAxXVxuICAgICAgcGFyZW50LnNwbGljZSgrcHJldmlvdXNQYXRoSW5kZXgsIDEpXG4gICAgICBmaWx0ZXJlZCA9IHNldChwYXJhbXMsIHBhcmVudFBhdGgsIHBhcmVudClcbiAgICAgIC8vIHRoaXMgd29ya3MganVzdCBmb3IgdGhlIGZpcnN0bHkgZm91bmQgYXJyYXkgaXRlbSwgYmVjYXVzZSBpbiBjYXNlIG9mIHJlbW92aW5nIHRoZSBsYXN0IG9uZVxuICAgICAgLy8gaXQgbGVhdmVzIGBbXWAgYXMgYSB2YWx1ZS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmaWx0ZXJlZFxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiwgdW5mbGF0dGVuIH0gZnJvbSAnZmxhdCdcblxuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBzZWxlY3RQYXJhbXMgfSBmcm9tICcuL3NlbGVjdC1wYXJhbXMnXG5pbXBvcnQgeyBmaWx0ZXJPdXRQYXJhbXMgfSBmcm9tICcuL2ZpbHRlci1vdXQtcGFyYW1zJ1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zZXQnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldCdcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZSdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aCB9IGZyb20gJy4vcmVtb3ZlLXBhdGgnXG5cbmV4cG9ydCB0eXBlIEZsYXRNb2R1bGVUeXBlID0ge1xuICBmbGF0dGVuOiB0eXBlb2YgZmxhdHRlbjtcbiAgdW5mbGF0dGVuOiB0eXBlb2YgdW5mbGF0dGVuO1xuICBzZXQ6IHR5cGVvZiBzZXQ7XG4gIGdldDogdHlwZW9mIGdldDtcbiAgc2VsZWN0UGFyYW1zOiB0eXBlb2Ygc2VsZWN0UGFyYW1zO1xuICBmaWx0ZXJPdXRQYXJhbXM6IHR5cGVvZiBmaWx0ZXJPdXRQYXJhbXM7XG4gIERFTElNSVRFUjogdHlwZW9mIERFTElNSVRFUjtcbiAgcGF0aFRvUGFydHM6IHR5cGVvZiBwYXRoVG9QYXJ0cztcbiAgcmVtb3ZlUGF0aDogdHlwZW9mIHJlbW92ZVBhdGg7XG4gIG1lcmdlOiB0eXBlb2YgbWVyZ2U7XG59XG5cbi8qKlxuICogQG5hbWVzcGFjZSBmbGF0XG4gKiBAbmFtZSBmbGF0XG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXG4gKiBAbG9hZCAuL2ZsYXQuZG9jLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0OiBGbGF0TW9kdWxlVHlwZSA9IHtcbiAgLyoqXG4gICAqIFJhdyBgZmxhdHRlbmAgZnVuY3Rpb24gZXhwb3J0ZWQgZnJvbSBvcmlnaW5hbCB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxhdCBmbGF0fVxuICAgKiBwYWNrYWdlLlxuICAgKi9cbiAgZmxhdHRlbixcbiAgLyoqXG4gICAqIFJhdyBgdW5mbGF0dGVuYCBmdW5jdGlvbiBleHBvcnRlZCBmcm9tIG9yaWdpbmFsIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9mbGF0IGZsYXR9XG4gICAqIHBhY2thZ2UuXG4gICAqL1xuICB1bmZsYXR0ZW4sXG5cbiAgc2V0LFxuICBnZXQsXG4gIHNlbGVjdFBhcmFtcyxcbiAgZmlsdGVyT3V0UGFyYW1zLFxuICByZW1vdmVQYXRoLFxuICBERUxJTUlURVIsXG4gIHBhdGhUb1BhcnRzLFxuICBtZXJnZSxcbn1cbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mbGF0J1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogSE9GIHJldHVybmluZyBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIGEgcmVjb3JkIGFuZCByZXR1cm5zIGFuIHVwZGF0ZWQgcmVjb3JkLlxuICogVGhpcyB3YXkgd2UgY2FuIHBhc3MgdGhpcyB0byBzZXRTdGF0ZSBpbiByZWFjdCwgd2hpY2ggdGFrZXMgb2xkIHN0YXRlXG4gKiAoaW4gb3VyIGNhc2UgcHJldmlvdXNSZWNvcmQpIGFzIGFuIGFyZ3VtZW50LlxuICpcbiAqIEZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0byB0aGUge0BsaW5rIE9uUHJvcGVydHlDaGFuZ2V9IGNhbGxiYWNrLCB1c2VyIHBhc3Nlc1xuICoga2V5IChwcm9wZXJ0eSBuYW1lKSBhbmQgdGhlIHZhbHVlIChmb2xsb3dlZCBieSBhbiBvcHRpb25hbCBzZWxlY3RlZFJlY29yZCkuXG4gKlxuICogVGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBmdW5jdGlvbiBpcyB0bzpcbiAqIC0gY2xlYXIgb2xkIHZhbHVlcyB1bmRlciBwYXNzZWQga2V5OiBzbyB3aGVuIHVzZXIgcGFzc2VzIHByb3BlcnR5ID09PSBgc29tZS5rZXlgXG4gKiAgIGZ1bmN0aW9uIHJlbW92ZXMgYHNvbWUua2V5LjFgLCBgc29tZS5rZXkuMmAgZXRjXG4gKiAtIHNldHMgbmV3IHZhbHVlIHVuZGVyIHRoZSBwYXNzZWQga2V5IGZvciBwcmltaXRpdmUgdHlwZXNcbiAqIC0gaW4gY2FzZSBvZiBvYmplY3RzIC0gaXQgZmxhdHRlbnMgdGhlbSBmaXJzdCBhbmQgdGhlbiBzZXRzIGFsbCB0aGUgcmVzdWx0ZWQgdmFsdWVzXG4gKiAgIHVuZGVyIHRoZSBwYXRoIHByb3ZpZGVkIGluIHRoZSBwcm9wZXJ0eSBhcmd1bWVudFxuICogLSBpdCBmaWxscyB2YWx1ZSBpbiBSZWNvcmRKU09OI3BvcHVsYXRlZCB3aGVuIHNlbGVjdGVkUmVjb3JkIGlzIGdpdmVuXG4gKiAtIGZpbmFsbHkgaXQgaW52YWxpZGF0ZXMgcG9wdWxhdGVkIGZvciBnaXZlbiBwcm9wZXJ0eVxuICpcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICBwcm9wZXJ0eSAgICAgICAgcHJvcGVydHkgdGhhdCBtdXN0IGJlIHVwZGF0ZWQsIHN1cHBvcnRzIG5lc3RpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGRvdHNcbiAqIEBwYXJhbSB7YW55fSAgICAgICAgIHZhbHVlICAgICAgICAgICB2YWx1ZSB0aGF0IG11c3QgYmUgc2V0LCB1bmRlZmluZWQgb3IgbnVsbCBpZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nLCB3aWxsIGJlIGZsYXR0ZW5lZFxuICogQHBhcmFtIHtSZWNvcmRKU09OfSAgc2VsZWN0ZWRSZWNvcmQgIGlmIHZhbHVlIGlzIHJlZmVyZW5jZSBJRCwgdGhpcyBtdXN0IGJlIGEgcmVjb3JkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyByZWZlcmVuY2luZyB0b1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlY29yZCA9IChcbiAgcHJvcGVydHk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgc2VsZWN0ZWRSZWNvcmQ/OiBSZWNvcmRKU09OLFxuKSA9PiAocHJldmlvdXNSZWNvcmQ6IFJlY29yZEpTT04pOiBSZWNvcmRKU09OID0+IHtcbiAgbGV0IHBvcHVsYXRlZE1vZGlmaWVkID0gZmFsc2VcbiAgY29uc3QgcG9wdWxhdGVkQ29weSA9IHsgLi4ucHJldmlvdXNSZWNvcmQucG9wdWxhdGVkIH1cbiAgY29uc3QgcGFyYW1zQ29weSA9IGZsYXQuc2V0KHByZXZpb3VzUmVjb3JkLnBhcmFtcywgcHJvcGVydHksIHZhbHVlKVxuXG4gIGlmIChwcm9wZXJ0eSBpbiBwb3B1bGF0ZWRDb3B5KSB7XG4gICAgZGVsZXRlIHBvcHVsYXRlZENvcHlbcHJvcGVydHldXG4gICAgcG9wdWxhdGVkTW9kaWZpZWQgPSB0cnVlXG4gIH1cblxuICBpZiAoc2VsZWN0ZWRSZWNvcmQpIHtcbiAgICBwb3B1bGF0ZWRDb3B5W3Byb3BlcnR5XSA9IHNlbGVjdGVkUmVjb3JkXG4gICAgcG9wdWxhdGVkTW9kaWZpZWQgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnByZXZpb3VzUmVjb3JkLFxuICAgIHBhcmFtczogcGFyYW1zQ29weSxcbiAgICBwb3B1bGF0ZWQ6IHBvcHVsYXRlZE1vZGlmaWVkID8gcG9wdWxhdGVkQ29weSA6IHByZXZpb3VzUmVjb3JkLnBvcHVsYXRlZCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVSZWNvcmRcbiIsImltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBpc0VudGlyZVJlY29yZEdpdmVuID0gKFxuICBwcm9wZXJ0eU9yUmVjb3JkOiBSZWNvcmRKU09OIHwgc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbik6IGJvb2xlYW4gPT4gISEodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgIC8vIHVzZXIgY2FuIHBhc3MgcHJvcGVydHkgYW5kIG9taXQgdmFsdWUuIFRoaXMgbWFrZXMgc2Vuc2Ugd2hlblxuICAgIC8vIHRoaXJkIGFyZ3VtZW50IG9mIHRoZSBmdW5jdGlvbiAoc2VsZWN0ZWRSZWNvcmQpIGlzIHBhc3NlZCB0byBvbkNoYW5nZVxuICAgIC8vIGNhbGxiYWNrXG4gICAgJiYgISh0eXBlb2YgcHJvcGVydHlPclJlY29yZCA9PT0gJ3N0cmluZycpXG4gICAgLy8gd2UgYXNzdW1lIHRoYXQgb25seSBwYXJhbXMgaGFzIHRvIGJlIGdpdmVuXG4gICAgJiYgcHJvcGVydHlPclJlY29yZC5wYXJhbXMpXG5cbmV4cG9ydCB7XG4gIGlzRW50aXJlUmVjb3JkR2l2ZW4gYXMgZGVmYXVsdCxcbiAgaXNFbnRpcmVSZWNvcmRHaXZlbixcbn1cbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgVXNlUmVjb3JkT3B0aW9ucyB9IGZyb20gJy4vdXNlLXJlY29yZC50eXBlJ1xuXG5leHBvcnQgY29uc3QgZmlsdGVyUmVjb3JkUGFyYW1zID0gZnVuY3Rpb248VCBleHRlbmRzIFJlY29yZEpTT04+IChcbiAgcmVjb3JkOiBULFxuICBvcHRpb25zOiBVc2VSZWNvcmRPcHRpb25zID0ge30sXG4pOiBUIHtcbiAgaWYgKG9wdGlvbnMuaW5jbHVkZVBhcmFtcyAmJiByZWNvcmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgcGFyYW1zOiBmbGF0LnNlbGVjdFBhcmFtcyhyZWNvcmQucGFyYW1zIHx8IHt9LCBvcHRpb25zLmluY2x1ZGVQYXJhbXMpLFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVjb3JkXG59XG5cbmV4cG9ydCBjb25zdCBpc1Byb3BlcnR5UGVybWl0dGVkID0gKHByb3BlcnR5TmFtZSwgb3B0aW9uczogVXNlUmVjb3JkT3B0aW9ucyA9IHt9KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgaW5jbHVkZVBhcmFtcyB9ID0gb3B0aW9uc1xuICBpZiAoaW5jbHVkZVBhcmFtcykge1xuICAgIGNvbnN0IHBhcnRzID0gZmxhdC5wYXRoVG9QYXJ0cyhwcm9wZXJ0eU5hbWUsIHsgc2tpcEFycmF5SW5kZXhlczogdHJ1ZSB9KVxuICAgIHJldHVybiBwYXJ0cy5zb21lKHBhcnQgPT4gaW5jbHVkZVBhcmFtcy5pbmNsdWRlcyhwYXJ0KSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCBBcGlDbGllbnQsIHsgUmVjb3JkQWN0aW9uQVBJUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgcGFyYW1zVG9Gb3JtRGF0YSB9IGZyb20gJy4vcGFyYW1zLXRvLWZvcm0tZGF0YSdcbmltcG9ydCB1c2VOb3RpY2UgZnJvbSAnLi4vdXNlLW5vdGljZSdcbmltcG9ydCB7IFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuL21lcmdlLXJlY29yZC1yZXNwb25zZSdcbmltcG9ydCB1cGRhdGVSZWNvcmQgZnJvbSAnLi91cGRhdGUtcmVjb3JkJ1xuaW1wb3J0IHsgVXNlUmVjb3JkT3B0aW9ucywgVXNlUmVjb3JkUmVzdWx0LCBVc2VSZWNvcmRTdWJtaXRGdW5jdGlvbiB9IGZyb20gJy4vdXNlLXJlY29yZC50eXBlJ1xuaW1wb3J0IGlzRW50aXJlUmVjb3JkR2l2ZW4gZnJvbSAnLi9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuJ1xuaW1wb3J0IHsgZmlsdGVyUmVjb3JkUGFyYW1zLCBpc1Byb3BlcnR5UGVybWl0dGVkIH0gZnJvbSAnLi9maWx0ZXItcmVjb3JkJ1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1yZWNvcmQuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQGJ1bmRsZVxuICogQHBhcmFtIHtSZWNvcmRKU09OfSBbaW5pdGlhbFJlY29yZF0sXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZFxuICogQHBhcmFtIHtVc2VSZWNvcmRPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1VzZVJlY29yZFJlc3VsdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVJlY29yZCA9IChcbiAgaW5pdGlhbFJlY29yZDogUmVjb3JkSlNPTiB8IHVuZGVmaW5lZCxcbiAgcmVzb3VyY2VJZDogc3RyaW5nLFxuICBvcHRpb25zPzogVXNlUmVjb3JkT3B0aW9ucyxcbik6IFVzZVJlY29yZFJlc3VsdCA9PiB7XG4gIC8vIHNldHRpbmcgdXAgc3RhdGVcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1N5bmNlZCwgc2V0SXNTeW5jZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGZpbHRlcmVkUmVjb3JkID0gaW5pdGlhbFJlY29yZCA/IGZpbHRlclJlY29yZFBhcmFtcyhpbml0aWFsUmVjb3JkLCBvcHRpb25zKSA6IG51bGxcblxuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTj4oe1xuICAgIC4uLmZpbHRlcmVkUmVjb3JkLFxuICAgIHBhcmFtczogZmlsdGVyZWRSZWNvcmQ/LnBhcmFtcyA/PyB7fSxcbiAgICBlcnJvcnM6IGluaXRpYWxSZWNvcmQ/LmVycm9ycyA/PyB7fSxcbiAgICBwb3B1bGF0ZWQ6IGluaXRpYWxSZWNvcmQ/LnBvcHVsYXRlZCA/PyB7fSxcbiAgfSBhcyBSZWNvcmRKU09OKVxuXG4gIC8vIGl0IGtlZXBzIHRoZSBzYW1lIGZvcm1hdCBhcyB1c2VTdGF0ZSBmdW5jdGlvbiB3aGljaCBjYW4gdGFrZSBlaXRoZXIgdmFsdWUgb3IgZnVuY3Rpb25cbiAgY29uc3Qgc2V0RmlsdGVyZWRSZWNvcmQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFJlY29yZEpTT04+PiA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1JlY29yZCA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShyZWNvcmQpIDogdmFsdWVcbiAgICBzZXRSZWNvcmQoZmlsdGVyUmVjb3JkUGFyYW1zKG5ld1JlY29yZCwgb3B0aW9ucykpXG4gIH0sIFtvcHRpb25zLCByZWNvcmRdKVxuXG4gIGNvbnN0IG9uTm90aWNlID0gdXNlTm90aWNlKClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoXG4gICAgcHJvcGVydHlPclJlY29yZDogUmVjb3JkSlNPTiB8IHN0cmluZyxcbiAgICB2YWx1ZT86IGFueSxcbiAgICBpbmNvbWluZ1JlY29yZD86IFJlY29yZEpTT04sXG4gICk6IHZvaWQgPT4ge1xuICAgIGlmIChpc0VudGlyZVJlY29yZEdpdmVuKHByb3BlcnR5T3JSZWNvcmQsIHZhbHVlKSkge1xuICAgICAgc2V0RmlsdGVyZWRSZWNvcmQocHJvcGVydHlPclJlY29yZCBhcyBSZWNvcmRKU09OKVxuICAgIH0gZWxzZSBpZiAoaXNQcm9wZXJ0eVBlcm1pdHRlZChwcm9wZXJ0eU9yUmVjb3JkIGFzIHN0cmluZywgb3B0aW9ucykpIHtcbiAgICAgIHNldFJlY29yZCh1cGRhdGVSZWNvcmQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIHZhbHVlLCBpbmNvbWluZ1JlY29yZCkpXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgIGBZb3UgYXJlIHRyeWluZyB0byBzZXQgcHJvcGVydHk6IFwiJHtwcm9wZXJ0eU9yUmVjb3JkIGFzIHN0cmluZ31cIiB3aGljaGAsXG4gICAgICAgICdpcyBub3QgcGVybWl0dGVkLiBUYWtlIGEgbG9vayBhdCBgdXNlUmVjb3JkKC4uLiwgeyBpbmNsdWRlUGFyYW1zOiBbLi4uXX0pYCcsXG4gICAgICBdLmpvaW4oJ1xcbicpKVxuICAgIH1cbiAgICBzZXRJc1N5bmNlZChmYWxzZSlcbiAgfSwgW3NldFJlY29yZCwgb3B0aW9uc10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0OiBVc2VSZWNvcmRTdWJtaXRGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKChcbiAgICBjdXN0b21QYXJhbXMgPSB7fSwgc3VibWl0T3B0aW9ucyxcbiAgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFJlY29yZEFjdGlvblJlc3BvbnNlPj4gPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IGZsYXQubWVyZ2UocmVjb3JkLnBhcmFtcywgY3VzdG9tUGFyYW1zKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gcGFyYW1zVG9Gb3JtRGF0YShtZXJnZWRQYXJhbXMpXG5cbiAgICBjb25zdCBwYXJhbXM6IE9taXQ8UmVjb3JkQWN0aW9uQVBJUGFyYW1zLCAnYWN0aW9uTmFtZScgfCAncmVjb3JkSWQnPiA9IHtcbiAgICAgIHJlc291cmNlSWQsXG4gICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSk6IHZvaWQgPT4gc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgoZS5sb2FkZWQgKiAxMDApIC8gZS50b3RhbCkpLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSxcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlID0gcmVjb3JkLmlkXG4gICAgICA/IGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdlZGl0JyxcbiAgICAgICAgcmVjb3JkSWQ6IHJlY29yZC5pZCxcbiAgICAgIH0pXG4gICAgICA6IGFwaS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgYWN0aW9uTmFtZTogJ25ldycsXG4gICAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PlxuXG4gICAgcHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWNlKSB7XG4gICAgICAgIG9uTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxuICAgICAgfVxuICAgICAgaWYgKHN1Ym1pdE9wdGlvbnM/LnVwZGF0ZU9uU2F2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmQocHJldiA9PiBtZXJnZVJlY29yZFJlc3BvbnNlKHByZXYsIHJlc3BvbnNlLmRhdGEpKVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3MoMClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRJc1N5bmNlZCh0cnVlKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIG9uTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyByZWNvcmQsIENoZWNrIG91dCBjb25zb2xlIHRvIHNlZSBtb3JlIGluZm9ybWF0aW9uLicsXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB9KVxuICAgICAgc2V0UHJvZ3Jlc3MoMClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9LCBbcmVjb3JkLCByZXNvdXJjZUlkLCBzZXRMb2FkaW5nLCBzZXRQcm9ncmVzcywgc2V0UmVjb3JkXSlcblxuICByZXR1cm4ge1xuICAgIHJlY29yZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgc3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgbG9hZGluZyxcbiAgICBwcm9ncmVzcyxcbiAgICBzZXRSZWNvcmQ6IHNldEZpbHRlcmVkUmVjb3JkLFxuICAgIGlzU3luY2VkLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlY29yZFxuIiwiaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uSGFzQ29tcG9uZW50ID0gKGFjdGlvbjogQWN0aW9uSlNPTik6IGJvb2xlYW4gPT4gKFxuICB0eXBlb2YgYWN0aW9uLmNvbXBvbmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aW9uLmNvbXBvbmVudCA9PT0gZmFsc2VcbilcbiIsImltcG9ydCB7IFJlY29yZEFjdGlvblBhcmFtcywgVmlld0hlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkhyZWYgPSAoXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgY29uc3QgYWN0aW9uTmFtZSA9IGFjdGlvbi5uYW1lXG5cbiAgaWYgKCFhY3Rpb24uY29tcG9uZW50ICYmICFhY3Rpb24uaGFzSGFuZGxlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBocmVmTWFwID0ge1xuICAgIHJlY29yZDogKCk6IHN0cmluZyA9PiBoLnJlY29yZEFjdGlvblVybCh7XG4gICAgICAuLi5wYXJhbXMgYXMgUmVjb3JkQWN0aW9uUGFyYW1zLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgICByZXNvdXJjZTogKCk6IHN0cmluZyA9PiBoLnJlc291cmNlQWN0aW9uVXJsKHtcbiAgICAgIHJlc291cmNlSWQ6IHBhcmFtcy5yZXNvdXJjZUlkLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgICBidWxrOiAoKTogc3RyaW5nID0+IGguYnVsa0FjdGlvblVybCh7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICBhY3Rpb25OYW1lLFxuICAgIH0pLFxuICB9XG4gIGlmIChocmVmTWFwW2FjdGlvbi5hY3Rpb25UeXBlXSkge1xuICAgIHJldHVybiBocmVmTWFwW2FjdGlvbi5hY3Rpb25UeXBlXSgpXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdcImFjdGlvblR5cGVcIiBzaG91bGQgYmUgZWl0aGVyIHJlY29yZCwgcmVzb3VyY2Ugb3IgYnVsaycpXG59XG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBY3Rpb25BcGk8SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPihcbiAgYWN0aW9uOiBBY3Rpb25KU09OLFxuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcyxcbiAgc2VhcmNoPzogTG9jYXRpb25bJ3NlYXJjaCddLFxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PiB7XG4gIGxldCBwcm9taXNlOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8Sz4+XG4gIGNvbnN0IHsgcmVjb3JkSWQsIHJlY29yZElkcywgcmVzb3VyY2VJZCB9ID0gcGFyYW1zXG5cbiAgc3dpdGNoIChhY3Rpb24uYWN0aW9uVHlwZSkge1xuICBjYXNlICdyZWNvcmQnOlxuICAgIGlmICghcmVjb3JkSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gc3BlY2lmeSBcInJlY29yZElkXCIgZm9yIHJlY29yZCBhY3Rpb24nKVxuICAgIH1cbiAgICBwcm9taXNlID0gYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSwgcmVjb3JkSWQsIHNlYXJjaCxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBjYXNlICdyZXNvdXJjZSc6XG4gICAgcHJvbWlzZSA9IGFwaS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBjYXNlICdidWxrJzpcbiAgICBpZiAoIXJlY29yZElkcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBzcGVjaWZ5IFwicmVjb3JkSWRzXCIgZm9yIGJ1bGsgYWN0aW9uJylcbiAgICB9XG4gICAgcHJvbWlzZSA9IGFwaS5idWxrQWN0aW9uKHtcbiAgICAgIHJlc291cmNlSWQsIGFjdGlvbk5hbWU6IGFjdGlvbi5uYW1lLCByZWNvcmRJZHMsIHNlYXJjaCxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBkZWZhdWx0OlxuICAgIHRocm93IG5ldyBFcnJvcignXCJhY3Rpb25UeXBlXCIgc2hvdWxkIGJlIGVpdGhlciByZWNvcmQsIHJlc291cmNlIG9yIGJ1bGsnKVxuICB9XG4gIHJldHVybiBwcm9taXNlXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZCdcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcywgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBjYWxsQWN0aW9uQXBpIH0gZnJvbSAnLi9jYWxsLWFjdGlvbi1hcGknXG5cbmV4cG9ydCB0eXBlIENhbGxBcGlGdW5jdGlvbjxLIGV4dGVuZHMgQWN0aW9uUmVzcG9uc2U+ID0gKCkgPT4gUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyT3B0aW9ucyA9IHtcbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcztcbiAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXI+O1xuICBzZWFyY2g/OiBMb2NhdGlvblsnc2VhcmNoJ107XG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyID0gPEs+KFxuICBvcHRpb25zOiBCdWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyT3B0aW9ucyxcbik6IENhbGxBcGlGdW5jdGlvbjxLPiA9PiB7XG4gIGNvbnN0IHsgYWN0aW9uLCBwYXJhbXMsIGFjdGlvblJlc3BvbnNlSGFuZGxlciwgc2VhcmNoIH0gPSBvcHRpb25zXG4gIGNvbnN0IGNhbGxBcGk6IENhbGxBcGlGdW5jdGlvbjxLPiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9taXNlID0gY2FsbEFjdGlvbkFwaShhY3Rpb24sIHBhcmFtcywgc2VhcmNoKVxuICAgIHByb21pc2UudGhlbihhY3Rpb25SZXNwb25zZUhhbmRsZXIpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb21pc2UgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuICB9XG4gIHJldHVybiBjYWxsQXBpXG59XG4iLCJpbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvblRlc3RJZCA9IChhY3Rpb246IEFjdGlvbkpTT04pOiBzdHJpbmcgPT4gYGFjdGlvbi0ke2FjdGlvbi5uYW1lfWBcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uSGFzQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24taGFzLWNvbXBvbmVudCdcbmltcG9ydCB7IGFjdGlvbkhyZWYgfSBmcm9tICcuL2FjdGlvbi1ocmVmJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciB9IGZyb20gJy4vYnVpbGQtYWN0aW9uLWFwaS1jYWxsLXRyaWdnZXInXG5cbmV4cG9ydCB0eXBlIEJ1aWxkQWN0aW9uQ2xpY2tPcHRpb25zID0ge1xuICBhY3Rpb246IEFjdGlvbkpTT047XG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xuICBhY3Rpb25SZXNwb25zZUhhbmRsZXI6IFJldHVyblR5cGU8dHlwZW9mIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcj47XG4gIHB1c2g6IChwYXRoOiBzdHJpbmcsIHN0YXRlPzogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNsaWNrUmV0dXJuID0gKGV2ZW50OiBhbnkpID0+IGFueVxuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgPSAoXG4gIG9wdGlvbnM6IEJ1aWxkQWN0aW9uQ2xpY2tPcHRpb25zLFxuKTogQnVpbGRBY3Rpb25DbGlja1JldHVybiA9PiB7XG4gIGNvbnN0IHsgYWN0aW9uLCBwYXJhbXMsIGFjdGlvblJlc3BvbnNlSGFuZGxlciwgcHVzaCB9ID0gb3B0aW9uc1xuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXG5cbiAgICBjb25zdCBjYWxsQXBpID0gYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlcih7XG4gICAgICBwYXJhbXMsIGFjdGlvbiwgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgIH0pXG5cbiAgICBpZiAoYWN0aW9uLmd1YXJkICYmICFjb25maXJtKGFjdGlvbi5ndWFyZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYWN0aW9uSGFzQ29tcG9uZW50KGFjdGlvbikpIHtcbiAgICAgIGNhbGxBcGkoKVxuICAgIH0gZWxzZSBpZiAoaHJlZikge1xuICAgICAgcHVzaChocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoYW5kbGVBY3Rpb25DbGlja1xufVxuIiwiZXhwb3J0IGNvbnN0IFJFRlJFU0hfS0VZID0gJ3JlZnJlc2gnXG5cbi8qKlxuICogQWRkcyByZWZyZXNoPXRydWUgdG8gdGhlIHVybCwgd2hpY2ggaW4gdHVybiBzaG91bGQgY2F1c2UgbGlzdCB0byByZWxvYWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgIHVybCB0byB3aGljaCBmdW5jdGlvbiBzaG91bGQgYWRkIGByZWZyZXNoYFxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWFyY2hdIG9wdGlvbmFsIHNlYXJjaCBxdWVyeSB3aGljaCBzaG91bGQgYmUgdXBkYXRlZCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBub3QgZ2l2ZW4gZnVuY3Rpb24gd2lsbCB1c2Ugd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZEZvcmNlUmVmcmVzaCA9ICh1cmw6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2ggPz8gd2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgcGFyYW1zLnNldChSRUZSRVNIX0tFWSwgJ3RydWUnKVxuICByZXR1cm4gYCR7dXJsfT8ke3BhcmFtc31gXG59XG5cbmV4cG9ydCBjb25zdCBoYXNGb3JjZVJlZnJlc2ggPSAoc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpXG4gIHJldHVybiAhIXBhcmFtcy5nZXQoUkVGUkVTSF9LRVkpXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGb3JjZVJlZnJlc2ggPSAoc2VhcmNoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaClcbiAgaWYgKHBhcmFtcy5nZXQoUkVGUkVTSF9LRVkpKSB7XG4gICAgcGFyYW1zLmRlbGV0ZShSRUZSRVNIX0tFWSlcbiAgfVxuICByZXR1cm4gcGFyYW1zLnRvU3RyaW5nKClcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgYXBwZW5kRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgQWN0aW9uQ2FsbENhbGxiYWNrIH0gZnJvbSAnLidcbmltcG9ydCB7IHVzZU5vdGljZSB9IGZyb20gJy4uL3VzZS1ub3RpY2UnXG5cblxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciA9IChvbkFjdGlvbkNhbGw/OiBBY3Rpb25DYWxsQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcblxuICByZXR1cm4gKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcbiAgICBpZiAoZGF0YS5ub3RpY2UpIHtcbiAgICAgIGFkZE5vdGljZShkYXRhLm5vdGljZSlcbiAgICB9XG4gICAgaWYgKGRhdGEucmVkaXJlY3RVcmwgJiYgbG9jYXRpb24ucGF0aG5hbWUgIT09IGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgIGNvbnN0IGFwcGVuZGVkID0gYXBwZW5kRm9yY2VSZWZyZXNoKGRhdGEucmVkaXJlY3RVcmwpXG4gICAgICBoaXN0b3J5LnB1c2goYXBwZW5kZWQpXG4gICAgfVxuICAgIGlmIChvbkFjdGlvbkNhbGwpIHtcbiAgICAgIG9uQWN0aW9uQ2FsbChkYXRhKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIEFjdGlvbkNhbGxDYWxsYmFjaywgVXNlQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi91c2UtYWN0aW9uLnR5cGVzJ1xuaW1wb3J0IHsgYWN0aW9uSHJlZiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1ocmVmJ1xuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi91c2UtYWN0aW9uLXJlc3BvbnNlLWhhbmRsZXInXG5cbi8qKlxuICogQGxvYWQgLi91c2UtYWN0aW9uLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKlxuICogQHBhcmFtIHtBY3Rpb25KU09OfSAgIGFjdGlvbiAgICAgIGFjdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7QWN0aW9uUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7QWN0aW9uQ2FsbENhbGxiYWNrfSBvbkFjdGlvbkNhbGwgLSBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiBhY3Rpb24gaXMgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtVc2VBY3Rpb25SZXN1bHR9XG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbjxLIGV4dGVuZHMgQWN0aW9uUmVzcG9uc2U+KFxuICBhY3Rpb246IEFjdGlvbkpTT04sXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zLFxuICBvbkFjdGlvbkNhbGw/OiBBY3Rpb25DYWxsQ2FsbGJhY2ssXG4pOiBVc2VBY3Rpb25SZXN1bHQ8Sz4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKG9uQWN0aW9uQ2FsbClcblxuICBjb25zdCBocmVmID0gYWN0aW9uSHJlZihhY3Rpb24sIHBhcmFtcylcblxuICBjb25zdCBjYWxsQXBpID0gYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlcjxLPih7XG4gICAgYWN0aW9uLFxuICAgIHBhcmFtcyxcbiAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgYWN0aW9uLFxuICAgIHBhcmFtcyxcbiAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaHJlZixcbiAgICBjYWxsQXBpLFxuICAgIGhhbmRsZUNsaWNrLFxuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IFNFU1NJT05fSU5JVElBTElaRSA9ICdTRVNTSU9OX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIFNldEN1cnJlbnRBZG1pblJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgU0VTU0lPTl9JTklUSUFMSVpFO1xuICBkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudEFkbWluID0gKGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGwgPSBudWxsKTogU2V0Q3VycmVudEFkbWluUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VTU0lPTl9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgc2V0Q3VycmVudEFkbWluIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zZXQtY3VycmVudC1hZG1pbidcbmltcG9ydCB7IEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uLy4uL2N1cnJlbnQtYWRtaW4uaW50ZXJmYWNlJ1xuXG5leHBvcnQgdHlwZSBVc2VDdXJyZW50QWRtaW5SZXNwb25zZSA9IFtcbiAgQ3VycmVudEFkbWluIHwgbnVsbCxcbiAgKGN1cnJlbnRBZG1pbjogQ3VycmVudEFkbWluIHwgbnVsbCkgPT4gQ3VycmVudEFkbWluIHwge31cbl1cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBIb29rIHdoaWNoIGFsbG93cyB5b3UgdG8gZ2V0IGFuZCBzZXQgY3VycmVudEFkbWluXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgdXNlQ3VycmVudEFkbWluIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBbY3VycmVudEFkbWluLCBzZXRDdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcbiAqICAgLy8gLi4uXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGJ1bmRsZVxuICogQHJldHVybnMge1VzZUN1cnJlbnRBZG1pblJlc3BvbnNlfVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiB1c2VDdXJyZW50QWRtaW4oKTogVXNlQ3VycmVudEFkbWluUmVzcG9uc2Uge1xuICBjb25zdCBjdXJyZW50QWRtaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4U3RhdGUpID0+IHN0YXRlLnNlc3Npb24pXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICByZXR1cm4gW1xuICAgIGN1cnJlbnRBZG1pbixcbiAgICAoYWRtaW46IEN1cnJlbnRBZG1pbiB8IG51bGwpOiBhbnkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudEFkbWluKGFkbWluKSksXG4gIF1cbn1cblxuZXhwb3J0IHtcbiAgdXNlQ3VycmVudEFkbWluLFxuICB1c2VDdXJyZW50QWRtaW4gYXMgZGVmYXVsdCxcbn1cblxuLyoqXG4gKiBSZXN1bHQgb2YgdGhlIHtAbGluayB1c2VDdXJyZW50QWRtaW59LlxuICogSXQgaXMgYSB0dXBsZSBjb250YWluaW5nIHZhbHVlIGFuZCB0aGUgc2V0dGVyXG4gKlxuICogQHR5cGVkZWYge0FycmF5fSBVc2VDdXJyZW50QWRtaW5SZXNwb25zZVxuICogQG1lbWJlcm9mIHVzZUN1cnJlbnRBZG1pblxuICogQGFsaWFzIFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlXG4gKiBAcHJvcGVydHkge0N1cnJlbnRBZG1pbiB8IG51bGx9IFswXSAgICBjdXJyZW50IGFkbWluXG4gKiBAcHJvcGVydHkge1JlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEN1cnJlbnRBZG1pbj4+fSBbMV0gICAgdmFsdWUgc2V0dGVyIGNvbXBhdGlibGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHJlYWN0IHVzZVN0YXRlXG4gKi9cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlTG9jYWxTdG9yYWdlUmVzdWx0IH0gZnJvbSAnLi91c2UtbG9jYWwtc3RvcmFnZS1yZXN1bHQudHlwZSdcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1sb2NhbC1zdG9yYWdlLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBzZWUgaHR0cHM6Ly91c2Vob29rcy5jb20vdXNlTG9jYWxTdG9yYWdlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAgICAgICAgICBrZXkgdW5kZXIgd2hpY2ggaG9vayB3aWxsIHN0b3JlIHRoZSBkYXRhXG4gKiBAcGFyYW0ge1R9ICAgICAgaW5pdGlhbFZhbHVlICAgIHZhbHVlIHdoaWNoIHdpbGwgYmUgc3RyaW5naWZpZWQgYW5kIHN0b3JlZFxuICogQHJldHVybiB7VXNlTG9jYWxTdG9yYWdlUmVzdWx0PFQ+fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlPFQ+KGtleTogc3RyaW5nLCBpbml0aWFsVmFsdWU6IFQpOiBVc2VMb2NhbFN0b3JhZ2VSZXN1bHQ8VD4ge1xuICAvLyBTdGF0ZSB0byBzdG9yZSBvdXIgdmFsdWVcbiAgLy8gUGFzcyBpbml0aWFsIHN0YXRlIGZ1bmN0aW9uIHRvIHVzZVN0YXRlIHNvIGxvZ2ljIGlzIG9ubHkgZXhlY3V0ZWQgb25jZVxuICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlPFQ+KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcbiAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgLy8gUGFyc2Ugc3RvcmVkIGpzb24gb3IgaWYgbm9uZSByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWYgZXJyb3IgYWxzbyByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgLy8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG4gIC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIGxvY2FsU3RvcmFnZS5cbiAgY29uc3Qgc2V0VmFsdWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFQ+PiA9ICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZVxuICAgICAgLy8gU2F2ZSBzdGF0ZVxuICAgICAgc2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKVxuICAgICAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBIG1vcmUgYWR2YW5jZWQgaW1wbGVtZW50YXRpb24gd291bGQgaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlXG4iLCJpbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUHJvcHMsXG4gIE5hdmlnYXRpb25FbGVtZW50UHJvcHMsXG4gIE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHMsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJy4vdXNlLWxvY2FsLXN0b3JhZ2UvdXNlLWxvY2FsLXN0b3JhZ2UnXG5cbmNvbnN0IGlzU2VsZWN0ZWQgPSAoaHJlZiwgbG9jYXRpb24pOiBib29sZWFuID0+IHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgJHtocmVmfSgkfC8pYClcbiAgcmV0dXJuICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2gocmVnRXhwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvblJlc291cmNlcyhcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+LFxuKTogTmF2aWdhdGlvblByb3BzWydlbGVtZW50cyddIHtcbiAgY29uc3QgW29wZW5FbGVtZW50cywgc2V0T3BlbkVsZW1lbnRzXSA9IHVzZUxvY2FsU3RvcmFnZTxSZWNvcmQ8c3RyaW5nLCBib29sZWFuPj4oXG4gICAgJ3NpZGViYXJFbGVtZW50cycsIHt9LFxuICApXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgY29uc3QgZW5yaWNoUmVzb3VyY2UgPSB1c2VNZW1vKCgpID0+IChcbiAgICByZXNvdXJjZTogUmVzb3VyY2VKU09OLFxuICAgIGljb24/OiBzdHJpbmcsXG4gICk6IE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHMgPT4gKHtcbiAgICBocmVmOiByZXNvdXJjZS5ocmVmIHx8IHVuZGVmaW5lZCxcbiAgICBpY29uLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQocmVzb3VyY2UuaHJlZiwgbG9jYXRpb24pLFxuICAgIGxhYmVsOiByZXNvdXJjZS5uYW1lLFxuICAgIGlkOiByZXNvdXJjZS5pZCxcbiAgICBvbkNsaWNrOiAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChyZXNvdXJjZS5ocmVmKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc291cmNlLmhyZWYpXG4gICAgICB9XG4gICAgfSxcbiAgfSksIFtsb2NhdGlvbiwgaGlzdG9yeV0pXG5cbiAgLy8gZ3JvdXBpbmcgcmVzb3VyY2VzIGludG8gcGFyZW50c1xuICBjb25zdCBtYXAgPSByZXNvdXJjZXNcbiAgICAuZmlsdGVyKHJlcyA9PiByZXMuaHJlZikgLy8gZmlyc3QgZmlsdGVyIG91dCByZXNvdXJjZSB3aGljaCBhcmUgbm90IHZpc2libGVcbiAgICAucmVkdWNlKChtZW1vLCByZXNvdXJjZSkgPT4ge1xuICAgICAgLy8gaW4gY2FzZSByZXNvdXJjZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyBwYXJlbnQgd2UgbmFtZXNwYWNlIGl0IHdpdCBcInJlc291cmNlLVwiXCJcbiAgICAgIGNvbnN0IGtleSA9IHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUgfHwgWydyZXNvdXJjZScsIHJlc291cmNlLm5hbWVdLmpvaW4oJy0nKVxuXG4gICAgICBpZiAoIXJlc291cmNlLm5hdmlnYXRpb24gfHwgcmVzb3VyY2UubmF2aWdhdGlvbi5uYW1lID09PSBudWxsKSB7XG4gICAgICAgIG1lbW9ba2V5XSA9IGVucmljaFJlc291cmNlKHJlc291cmNlLCByZXNvdXJjZS5uYXZpZ2F0aW9uPy5pY29uKVxuICAgICAgfSBlbHNlIGlmIChtZW1vW2tleV0gJiYgbWVtb1trZXldLmVsZW1lbnRzICYmIHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUpIHtcbiAgICAgICAgKG1lbW9ba2V5XS5lbGVtZW50cyBhcyBBcnJheTxOYXZpZ2F0aW9uRWxlbWVudFByb3BzPikucHVzaChlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vW2tleV0gPSB7XG4gICAgICAgICAgZWxlbWVudHM6IFtlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSldLFxuICAgICAgICAgIGxhYmVsOiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5uYW1lLFxuICAgICAgICAgIGljb246IHJlc291cmNlLm5hdmlnYXRpb24/Lmljb24sXG4gICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4gc2V0T3BlbkVsZW1lbnRzKHtcbiAgICAgICAgICAgIC4uLm9wZW5FbGVtZW50cyxcbiAgICAgICAgICAgIFtrZXldOiAhb3BlbkVsZW1lbnRzW2tleV0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaXNPcGVuOiAhIW9wZW5FbGVtZW50c1trZXldLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHM+KVxuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKG1hcClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2aWdhdGlvblJlc291cmNlc1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHVzZU5vdGljZSBmcm9tICcuLi91c2Utbm90aWNlJ1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgTGlzdEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2xpc3QvbGlzdC1hY3Rpb24nXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCB7IGhhc0ZvcmNlUmVmcmVzaCwgcmVtb3ZlRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgVXNlUmVjb3Jkc1Jlc3VsdCB9IGZyb20gJy4vdXNlLXJlY29yZHMtcmVzdWx0LnR5cGUnXG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG4vKipcbiAqIEBsb2FkIC4vdXNlLXJlY29yZHMuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICAgICAgaWQgb2YgYSByZXNvdXJjZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gZmV0Y2ggcmVjb3Jkc1xuICogQHJldHVybiB7VXNlUmVjb3Jkc1Jlc3VsdH1cbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcbiAqIEBidW5kbGVcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdXNlUmVjb3JkcyhyZXNvdXJjZUlkOiBzdHJpbmcpOiBVc2VSZWNvcmRzUmVzdWx0IHtcbiAgY29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGU8QXJyYXk8UmVjb3JkSlNPTj4+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoMTApXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlPCdhc2MnfCAnZGVzYyc+KCdhc2MnKVxuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBvbk5vdGljZSA9IHVzZU5vdGljZSgpXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKCk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxMaXN0QWN0aW9uUmVzcG9uc2U+PiA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG5cbiAgICBjb25zdCBwcm9taXNlID0gYXBpLnJlc291cmNlQWN0aW9uKHtcbiAgICAgIGFjdGlvbk5hbWU6ICdsaXN0JywgcmVzb3VyY2VJZCwgcGFyYW1zOiBxdWVyeSxcbiAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8TGlzdEFjdGlvblJlc3BvbnNlPj5cblxuICAgIHByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RBY3Rpb25SZXNwb25zZSA9IHJlc3BvbnNlLmRhdGEgYXMgTGlzdEFjdGlvblJlc3BvbnNlXG4gICAgICBpZiAobGlzdEFjdGlvblJlc3BvbnNlLm5vdGljZSkge1xuICAgICAgICBvbk5vdGljZShsaXN0QWN0aW9uUmVzcG9uc2Uubm90aWNlKVxuICAgICAgfVxuICAgICAgaWYgKGxpc3RBY3Rpb25SZXNwb25zZS5yZWRpcmVjdFVybCkge1xuICAgICAgICBoaXN0b3J5LnB1c2gobGlzdEFjdGlvblJlc3BvbnNlLnJlZGlyZWN0VXJsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0UmVjb3JkcyhsaXN0QWN0aW9uUmVzcG9uc2UucmVjb3JkcylcbiAgICAgIHNldFBhZ2UobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEucGFnZSlcbiAgICAgIHNldFBlclBhZ2UobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEucGVyUGFnZSlcbiAgICAgIHNldFRvdGFsKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnRvdGFsKVxuICAgICAgc2V0RGlyZWN0aW9uKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLmRpcmVjdGlvbilcbiAgICAgIHNldFNvcnRCeShsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5zb3J0QnkpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yRmV0Y2hpbmdSZWNvcmRzJywgcmVzb3VyY2VJZCksXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc0ZvcmNlUmVmcmVzaChsb2NhdGlvbi5zZWFyY2gpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2UoW1xuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSwgcmVtb3ZlRm9yY2VSZWZyZXNoKGxvY2F0aW9uLnNlYXJjaCkudG9TdHJpbmcoKSxcbiAgICAgIF0uam9pbignPycpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaERhdGEoKVxuICAgIH1cbiAgfSwgW3Jlc291cmNlSWQsIGxvY2F0aW9uLnNlYXJjaF0pXG5cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRzLFxuICAgIGxvYWRpbmcsXG4gICAgcGFnZSxcbiAgICB0b3RhbCxcbiAgICBkaXJlY3Rpb24sXG4gICAgc29ydEJ5LFxuICAgIHBlclBhZ2UsXG4gICAgZmV0Y2hEYXRhLFxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHVzZVJlY29yZHMgYXMgZGVmYXVsdCxcbiAgdXNlUmVjb3Jkcyxcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFVzZVNlbGVjdGVkUmVjb3Jkc1Jlc3VsdCB9IGZyb20gJy4vdXNlLXNlbGVjdGVkLXJlY29yZHMtcmVzdWx0LnR5cGUnXG5cbi8qKlxuICogQGxvYWQgLi91c2Utc2VsZWN0ZWQtcmVjb3Jkcy5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5PFJlY29yZEpTT04+fSByZWNvcmRzICAgICBMaXN0IG9mIHJlY29yZHMgb24gd2hpY2ggeW91IGNhbiBwZXJmb3JtIGBzZWxlY3RgIGFjdGlvblxuICogQHJldHVybiB7VXNlU2VsZWN0ZWRSZWNvcmRzUmVzdWx0fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiB1c2VTZWxlY3RlZFJlY29yZHMocmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj4pOiBVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHQge1xuICBjb25zdCBbc2VsZWN0ZWRSZWNvcmRzLCBzZXRTZWxlY3RlZFJlY29yZHNdID0gdXNlU3RhdGU8QXJyYXk8UmVjb3JkSlNPTj4+KFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChyZWNvcmQ6IFJlY29yZEpTT04pOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRSZWNvcmRzLmZpbmRJbmRleChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFsuLi5zZWxlY3RlZFJlY29yZHMsIHJlY29yZF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkUmVjb3JkcyA9IFsuLi5zZWxlY3RlZFJlY29yZHNdXG4gICAgICBuZXdTZWxlY3RlZFJlY29yZHMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpXG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMobmV3U2VsZWN0ZWRSZWNvcmRzKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtaXNzaW5nID0gcmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IChcbiAgICAgICFzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgICAgJiYgcmVjb3JkLmJ1bGtBY3Rpb25zLmxlbmd0aFxuICAgICkpXG4gICAgaWYgKG1pc3NpbmcubGVuZ3RoKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMoWy4uLnNlbGVjdGVkUmVjb3JkcywgLi4ubWlzc2luZ10pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkUmVjb3JkcyA9IHNlbGVjdGVkUmVjb3Jkcy5maWx0ZXIoc2VsZWN0ZWQgPT4gKFxuICAgICAgICAhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHNlbGVjdGVkLmlkKVxuICAgICAgKSlcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhuZXdTZWxlY3RlZFJlY29yZHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTZWxlY3QsXG4gICAgaGFuZGxlU2VsZWN0QWxsLFxuICAgIHNlbGVjdGVkUmVjb3JkcyxcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMsXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdXNlU2VsZWN0ZWRSZWNvcmRzIGFzIGRlZmF1bHQsXG4gIHVzZVNlbGVjdGVkUmVjb3Jkcyxcbn1cbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Jlc291cmNlLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG5cbi8qKlxuICogQGxvYWQgLi91c2UtcmVzb3VyY2UuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgICAgSWQgb2YgYSByZXNvdXJjZSB5b3Ugd2FudCB0byBnZXRcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVJlc291cmNlID0gKHJlc291cmNlSWQ6IHN0cmluZyk6IFJlc291cmNlSlNPTiB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IHJlc291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gc3RhdGUucmVzb3VyY2VzKVxuXG4gIGNvbnN0IGZvdW5kUmVzb3VyY2UgPSByZXNvdXJjZXMuZmluZChyZXNvdXJjZSA9PiByZXNvdXJjZS5pZCA9PT0gcmVzb3VyY2VJZClcblxuICByZXR1cm4gZm91bmRSZXNvdXJjZVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xuaW1wb3J0IHsgdXNlTmF2aWdhdGlvblJlc291cmNlcyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuXG4vKipcbiAqIEBhbGlhcyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uUHJvcHNcbiAqIEBtZW1iZXJvZiBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25Qcm9wcyA9IHtcbiAgLyoqIExpc3Qgb2YgdGhlIHJlc291cmNlcyB3aGljaCBzaG91bGQgYmUgcmVuZGVyZWQgKi9cbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG4vKipcbiAqIEdyb3VwcyByZXNvdXJjZXMgYnkgc2VjdGlvbnMgYW5kIHJlbmRlcnMgdGhlIGxpc3QgaW4ge0BsaW5rIFNpZGViYXJ9XG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIH0gZnJvbSAnYWRtaW4tYnJvYFxuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAbmFtZSBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG4gKi9cbmNvbnN0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbDogRkM8U2lkZWJhclJlc291cmNlU2VjdGlvblByb3BzPiA9ICh7IHJlc291cmNlcyB9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlTmF2aWdhdGlvblJlc291cmNlcyhyZXNvdXJjZXMpXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgnbmF2aWdhdGlvbicpfVxuICAgICAgZWxlbWVudHM9e2VsZW1lbnRzfVxuICAgIC8+XG4gIClcbn1cblxuLy8gUm9sbHVwIGNhbm5vdCBoYW5kbGUgdHlwZSBleHBvcnRzIHdlbGwgLSB0aGF0IGlzIHdoeSB3ZSBuZWVkIHRvIGRvIHRoaXMgaGFjayB3aXRoXG4vLyBleHBvcnRpbmcgZGVmYXVsdCBhbmQgbmFtZWQgU2lkZWJhclJlc291cmNlU2VjdGlvblxuY29uc3QgU2lkZWJhclJlc291cmNlU2VjdGlvbiA9IGFsbG93T3ZlcnJpZGUoU2lkZWJhclJlc291cmNlU2VjdGlvbk9yaWdpbmFsLCAnU2lkZWJhclJlc291cmNlU2VjdGlvbicpXG5cbmV4cG9ydCB7IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gfVxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclJlc291cmNlU2VjdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCb3gsIGNzc0NsYXNzLCB0aGVtZUdldCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQnJhbmRpbmdPcHRpb25zIH0gZnJvbSAnc3JjL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUGFnZUpTT04gfSBmcm9tICdzcmMvZnJvbnRlbmQvaW50ZXJmYWNlcydcbmltcG9ydCBTaWRlYmFyQnJhbmRpbmcgZnJvbSAnLi9zaWRlYmFyLWJyYW5kaW5nJ1xuaW1wb3J0IFNpZGViYXJQYWdlcyBmcm9tICcuL3NpZGViYXItcGFnZXMnXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgU2lkZWJhckZvb3RlciBmcm9tICcuL3NpZGViYXItZm9vdGVyJ1xuXG5pbXBvcnQgU2lkZWJhclJlc291cmNlU2VjdGlvbiBmcm9tICcuL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbidcblxudHlwZSBQcm9wcyA9IHtcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRTaWRlYmFyID0gc3R5bGVkKEJveClgXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICYuaGlkZGVuIHtcbiAgICBsZWZ0OiAtJHt0aGVtZUdldCgnc2l6ZXMnLCAnc2lkZWJhcldpZHRoJyl9O1xuICB9XG4gICYudmlzaWJsZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuYFxuXG5TdHlsZWRTaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IFsnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnaW5oZXJpdCddLFxuICB3aWR0aDogJ3NpZGViYXJXaWR0aCcsXG4gIGJvcmRlclJpZ2h0OiAnZGVmYXVsdCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHpJbmRleDogNTAsXG4gIGJnOiAnd2hpdGUnLFxufVxuXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1Zpc2libGUgfSA9IHByb3BzXG4gIGNvbnN0IFticmFuZGluZywgcmVzb3VyY2VzLCBwYWdlc106IFtCcmFuZGluZ09wdGlvbnMsIFJlc291cmNlSlNPTltdLCBQYWdlSlNPTltdXSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gW1xuICAgICAgc3RhdGUuYnJhbmRpbmcsIHN0YXRlLnJlc291cmNlcywgc3RhdGUucGFnZXMsXG4gICAgXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNpZGViYXJcbiAgICAgIGNsYXNzTmFtZT17aXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgPlxuICAgICAgPFNpZGViYXJCcmFuZGluZyBicmFuZGluZz17YnJhbmRpbmd9IC8+XG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdSZXNvdXJjZXMnKX0+XG4gICAgICAgIDxTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIHJlc291cmNlcz17cmVzb3VyY2VzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U2lkZWJhclBhZ2VzIHBhZ2VzPXtwYWdlc30gLz5cbiAgICAgIHticmFuZGluZz8uc29mdHdhcmVCcm90aGVycyAmJiA8U2lkZWJhckZvb3RlciAvPn1cbiAgICA8L1N0eWxlZFNpZGViYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3VycmVudFVzZXJOYXYsIEJveCwgQ3VycmVudFVzZXJOYXZQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQ3VycmVudEFkbWluIH0gZnJvbSAnLi4vLi4vLi4vY3VycmVudC1hZG1pbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xuXG5leHBvcnQgdHlwZSBMb2dnZWRJblByb3BzID0ge1xuICBzZXNzaW9uOiBDdXJyZW50QWRtaW47XG4gIHBhdGhzOiB7XG4gICAgbG9nb3V0UGF0aDogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBMb2dnZWRJbjogUmVhY3QuRkM8TG9nZ2VkSW5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXNzaW9uLCBwYXRocyB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBkcm9wQWN0aW9uczogQ3VycmVudFVzZXJOYXZQcm9wc1snZHJvcEFjdGlvbnMnXSA9IFt7XG4gICAgbGFiZWw6IHRyYW5zbGF0ZUJ1dHRvbignbG9nb3V0JyksXG4gICAgb25DbGljazogKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRocy5sb2dvdXRQYXRoXG4gICAgfSxcbiAgICBpY29uOiAnTG9nb3V0JyxcbiAgfV1cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgPEN1cnJlbnRVc2VyTmF2XG4gICAgICAgIG5hbWU9e3Nlc3Npb24uZW1haWx9XG4gICAgICAgIHRpdGxlPXtzZXNzaW9uLnRpdGxlfVxuICAgICAgICBhdmF0YXJVcmw9e3Nlc3Npb24uYXZhdGFyVXJsfVxuICAgICAgICBkcm9wQWN0aW9ucz17ZHJvcEFjdGlvbnN9XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IE92ZXJyaWRhYmxlTG9nZ2VkSW4gPSBhbGxvd092ZXJyaWRlKExvZ2dlZEluLCAnTG9nZ2VkSW4nKVxuXG5leHBvcnQge1xuICBPdmVycmlkYWJsZUxvZ2dlZEluIGFzIGRlZmF1bHQsXG4gIE92ZXJyaWRhYmxlTG9nZ2VkSW4gYXMgTG9nZ2VkSW4sXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY3NzQ2xhc3MsIFRleHQsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgVmVyc2lvblByb3BzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIHZlcnNpb25zOiBWZXJzaW9uUHJvcHM7XG59XG5cbmNvbnN0IFZlcnNpb25JdGVtID0gc3R5bGVkKFRleHQpYFxuICBwYWRkaW5nOiAxMnB4IDI0cHggMTJweCAwO1xuYFxuXG5WZXJzaW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IFsnbm9uZScsICdibG9jayddLFxuICBjb2xvcjogJ2dyZXkxMDAnLFxufVxuXG5leHBvcnQgY29uc3QgVmVyc2lvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmVyc2lvbnMgfSA9IHByb3BzXG4gIGNvbnN0IHsgYWRtaW4sIGFwcCB9ID0gdmVyc2lvbnNcblxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXggZmxleEdyb3c9ezF9IHB5PVwiZGVmYXVsdFwiIHB4PVwieHhsXCIgY2xhc3NOYW1lPXtjc3NDbGFzcygnVmVyc2lvbicpfT5cbiAgICAgIHthZG1pbiAmJiAoXG4gICAgICAgIDxWZXJzaW9uSXRlbT5cbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2FkbWluVmVyc2lvbicsIHsgdmVyc2lvbjogYWRtaW4gfSl9XG4gICAgICAgIDwvVmVyc2lvbkl0ZW0+XG4gICAgICApfVxuICAgICAge2FwcCAmJiAoXG4gICAgICAgIDxWZXJzaW9uSXRlbT5cbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2FwcFZlcnNpb24nLCB7IHZlcnNpb246IGFwcCB9KX1cbiAgICAgICAgPC9WZXJzaW9uSXRlbT5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgQm94LCBJY29uLCB0aGVtZUdldCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IExvZ2dlZEluIGZyb20gJy4vbG9nZ2VkLWluJ1xuaW1wb3J0IFZlcnNpb24gZnJvbSAnLi92ZXJzaW9uJ1xuXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cblxuY29uc3QgTmF2QmFyID0gc3R5bGVkKEJveClgXG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNpemVzLm5hdmJhckhlaWdodH07XG4gIGJvcmRlci1ib3R0b206ICR7dGhlbWVHZXQoJ2JvcmRlcnMnLCAnZGVmYXVsdCcpfTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtc2hyaW5rOiAwO1xuYFxuXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IGNzc0NsYXNzKCdOYXZCYXInKSxcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgdG9nZ2xlU2lkZWJhcjogKGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFRvcEJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gcHJvcHNcbiAgY29uc3QgW3Nlc3Npb24sIHBhdGhzLCB2ZXJzaW9uc10gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJlZHV4U3RhdGUpID0+IFtzdGF0ZS5zZXNzaW9uLCBzdGF0ZS5wYXRocywgc3RhdGUudmVyc2lvbnNdLFxuICApXG4gIHJldHVybiAoXG4gICAgPE5hdkJhcj5cbiAgICAgIDxCb3hcbiAgICAgICAgcHk9XCJsZ1wiXG4gICAgICAgIHB4PXtbJ2RlZmF1bHQnLCAnbGcnXX1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgZGlzcGxheT17WydibG9jaycsICdibG9jaycsICdibG9jaycsICdibG9jaycsICdub25lJ119XG4gICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICA+XG4gICAgICAgIDxJY29uIGljb249XCJNZW51XCIgc2l6ZT17MzJ9IGNvbG9yPVwiZ3JleTEwMFwiIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxWZXJzaW9uIHZlcnNpb25zPXt2ZXJzaW9uc30gLz5cbiAgICAgIHtzZXNzaW9uICYmIHNlc3Npb24uZW1haWwgPyA8TG9nZ2VkSW4gc2Vzc2lvbj17c2Vzc2lvbn0gcGF0aHM9e3BhdGhzfSAvPiA6ICcnfVxuICAgIDwvTmF2QmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiZXhwb3J0IGNvbnN0IERST1BfTk9USUNFID0gJ0RST1BfTk9USUNFJ1xuXG5leHBvcnQgdHlwZSBEcm9wTm90aWNlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBEUk9QX05PVElDRTtcbiAgZGF0YToge1xuICAgIG5vdGljZUlkOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBkcm9wTm90aWNlID0gKG5vdGljZUlkOiBzdHJpbmcpOiBEcm9wTm90aWNlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogJ0RST1BfTk9USUNFJyxcbiAgZGF0YTogeyBub3RpY2VJZCB9LFxufSlcbiIsIlxuZXhwb3J0IGNvbnN0IFNFVF9OT1RJQ0VfUFJPR1JFU1MgPSAnU0VUX05PVElDRV9QUk9HUkVTUydcblxuZXhwb3J0IHR5cGUgU2V0Tm90aWNlUHJvZ3Jlc3MgPSB7XG4gIG5vdGljZUlkOiBzdHJpbmc7XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFNldE5vdGljZVByb2dyZXNzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBTRVRfTk9USUNFX1BST0dSRVNTO1xuICBkYXRhOiBTZXROb3RpY2VQcm9ncmVzcztcbn1cblxuZXhwb3J0IGNvbnN0IHNldE5vdGljZVByb2dyZXNzID0gKGRhdGE6IFNldE5vdGljZVByb2dyZXNzKTogU2V0Tm90aWNlUHJvZ3Jlc3NSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTk9USUNFX1BST0dSRVNTLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IE1lc3NhZ2VCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IE5vdGljZU1lc3NhZ2VJblN0YXRlLCBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBkcm9wTm90aWNlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9kcm9wLW5vdGljZSdcbmltcG9ydCB7IHNldE5vdGljZVByb2dyZXNzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzJ1xuXG5jb25zdCBUSU1FX1RPX0RJU0FQUEVBUiA9IDNcblxuZXhwb3J0IHR5cGUgTm90aWZ5UHJvZ3Jlc3MgPSAob3B0aW9uczoge1xuICBub3RpY2VJZDogc3RyaW5nOyBwcm9ncmVzczogbnVtYmVyO1xufSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50UHJvcHMgPSB7XG4gIG5vdGljZTogTm90aWNlTWVzc2FnZUluU3RhdGU7XG4gIGRyb3A6ICgpID0+IGFueTtcbiAgbm90aWZ5UHJvZ3Jlc3M6IE5vdGlmeVByb2dyZXNzO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50U3RhdGUgPSB7XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpY2VFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5vdGljZUVsZW1lbnRQcm9wcywgTm90aWNlRWxlbWVudFN0YXRlPiB7XG4gIHByaXZhdGUgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBub3RpY2UgfSA9IHByb3BzXG4gICAgdGhpcy50aW1lciA9IG51bGxcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5wcm9ncmVzcyB8fCAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZHJvcCwgbm90aWNlLCBub3RpZnlQcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gc3RhdGUucHJvZ3Jlc3MgKyAxMDAgLyBUSU1FX1RPX0RJU0FQUEVBUlxuICAgICAgICBub3RpZnlQcm9ncmVzcyh7IG5vdGljZUlkOiBub3RpY2UuaWQsIHByb2dyZXNzIH0pXG4gICAgICAgIHJldHVybiB7IHByb2dyZXNzIH1cbiAgICAgIH0pXG4gICAgfSwgMTAwMClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgICAgfVxuICAgICAgZHJvcCgpXG4gICAgfSwgMTAwMCAqIChUSU1FX1RPX0RJU0FQUEVBUiArIDEpKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IG5vdGljZSwgZHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TWVzc2FnZUJveFxuICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogJzQ4MHB4JyB9fVxuICAgICAgICBtZXNzYWdlPXtub3RpY2UubWVzc2FnZX1cbiAgICAgICAgdmFyaWFudD17bm90aWNlLnR5cGUgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdkYW5nZXInfVxuICAgICAgICBvbkNsb3NlQ2xpY2s9e2Ryb3B9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG50eXBlIE5vdGljZUJveFByb3BzRnJvbVN0YXRlID0ge1xuICBub3RpY2VzOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT47XG59XG5cbnR5cGUgTm90aWNlQm94RGlzcGF0Y2hGcm9tU3RhdGUgPSB7XG4gIGRyb3A6IChub3RpY2VJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBub3RpZnlQcm9ncmVzczogTm90aWZ5UHJvZ3Jlc3M7XG59XG5cbmNvbnN0IE5vdGljZUJveDogUmVhY3QuRkM8Tm90aWNlQm94UHJvcHNGcm9tU3RhdGUgJiBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcm9wLCBub3RpY2VzLCBub3RpZnlQcm9ncmVzcyB9ID0gcHJvcHNcbiAgY29uc3Qgbm90aWNlID0gbm90aWNlcy5sZW5ndGggPyBub3RpY2VzW25vdGljZXMubGVuZ3RoIC0gMV0gOiBudWxsXG4gIGlmIChub3RpY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cIm5vdGljZS13cmFwcGVyXCI+XG4gICAgICAgIDxOb3RpY2VFbGVtZW50XG4gICAgICAgICAga2V5PXtub3RpY2UuaWR9XG4gICAgICAgICAgbm90aWNlPXtub3RpY2V9XG4gICAgICAgICAgZHJvcD17KCk6IHZvaWQgPT4gZHJvcChub3RpY2UuaWQpfVxuICAgICAgICAgIG5vdGlmeVByb2dyZXNzPXtub3RpZnlQcm9ncmVzc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgLz5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBOb3RpY2VCb3hQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBub3RpY2VzOiBzdGF0ZS5ub3RpY2VzLFxufSlcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpOiBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZSA9PiAoe1xuICBkcm9wOiAobm90aWNlSWQ6IHN0cmluZyk6IHZvaWQgPT4gZGlzcGF0Y2goZHJvcE5vdGljZShub3RpY2VJZCkpLFxuICBub3RpZnlQcm9ncmVzczogKHtcbiAgICBub3RpY2VJZCwgcHJvZ3Jlc3MsXG4gIH0pOiB2b2lkID0+IGRpc3BhdGNoKHNldE5vdGljZVByb2dyZXNzKHsgbm90aWNlSWQsIHByb2dyZXNzIH0pKSxcbn0pXG5cbmNvbnN0IENvbm5lY3RlZE5vdGljZUJveCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShOb3RpY2VCb3gpXG5cbmV4cG9ydCB7XG4gIENvbm5lY3RlZE5vdGljZUJveCBhcyBkZWZhdWx0LFxuICBDb25uZWN0ZWROb3RpY2VCb3ggYXMgTm90aWNlQm94LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7XG4gIEJveCxcbiAgSDIsXG4gIEg1LFxuICBINCxcbiAgVGV4dCxcbiAgSWxsdXN0cmF0aW9uLFxuICBJbGx1c3RyYXRpb25Qcm9wcyxcbiAgQnV0dG9uLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmNvbnN0IHBhZ2VIZWFkZXJIZWlnaHQgPSAyODRcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWSA9IDc0XG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1ggPSAyNTBcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9ezUwfVxuICAgICAgICBsZWZ0PXstMTB9XG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XG4gICAgICAgIGFuaW1hdGVcbiAgICAgID5cbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiUm9ja2V0XCIgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgdG9wPXstNzB9XG4gICAgICAgIHJpZ2h0PXstMTV9XG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XG4gICAgICAgIGFuaW1hdGVcbiAgICAgID5cbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiTW9vblwiIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3hcbiAgICAgICAgYmc9XCJncmV5MTAwXCJcbiAgICAgICAgaGVpZ2h0PXtwYWdlSGVhZGVySGVpZ2h0fVxuICAgICAgICBweT17cGFnZUhlYWRlclBhZGRpbmdZfVxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJywgcGFnZUhlYWRlclBhZGRpbmdYXX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxIMj57dHJhbnNsYXRlTWVzc2FnZSgnd2VsY29tZU9uQm9hcmRfdGl0bGUnKX08L0gyPlxuICAgICAgICAgIDxUZXh0IG9wYWNpdHk9ezAuOH0+XG4gICAgICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnd2VsY29tZU9uQm9hcmRfc3VidGl0bGUnKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbnR5cGUgQm94VHlwZSA9IHtcbiAgdmFyaWFudDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJveGVzID0gKHsgdHJhbnNsYXRlTWVzc2FnZSB9KTogQXJyYXk8Qm94VHlwZT4gPT4gW3tcbiAgdmFyaWFudDogJ1BsYW5ldCcsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdhZGRpbmdSZXNvdXJjZXNfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtcGFzc2luZy1yZXNvdXJjZXMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdEb2N1bWVudENoZWNrJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplUmVzb3VyY2VzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b21pemluZy1yZXNvdXJjZXMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdEb2N1bWVudFNlYXJjaCcsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1hY3Rpb25zLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnRmxhZ0luQ29nJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3dyaXRlT3duQ29tcG9uZW50c190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnd3JpdGVPd25Db21wb25lbnRzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC13cml0aW5nLXJlYWN0LWNvbXBvbmVudHMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdGb2xkZXJzJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbURhc2hib2FyZF90aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9tRGFzaGJvYXJkX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b20tZGFzaGJvYXJkLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnQXN0cm9uYXV0JyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgncm9sZUJhc2VkQWNjZXNzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1yYmFjLmh0bWwnLFxufV1cblxuY29uc3QgQ2FyZCA9IHN0eWxlZChCb3gpYFxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSk6IHN0cmluZyA9PiAoZmxleCA/ICdmbGV4JyA6ICdibG9jaycpfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeTEwMH07XG4gICAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNoYWRvd3MuY2FyZEhvdmVyfTtcbiAgfVxuYFxuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnY2FyZCcsXG59XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8RGFzaGJvYXJkSGVhZGVyIC8+XG4gICAgICA8Qm94XG4gICAgICAgIG10PXtbJ3hsJywgJ3hsJywgJy0xMDBweCddfVxuICAgICAgICBtYj1cInhsXCJcbiAgICAgICAgbXg9e1swLCAwLCAwLCAnYXV0byddfVxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJywgJ3h4bCcsICcwJ119XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBmbGV4XG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICB3aWR0aD17WzEsIDEsIDEsIDEwMjRdfVxuICAgICAgPlxuICAgICAgICB7Ym94ZXMoeyB0cmFuc2xhdGVNZXNzYWdlIH0pLm1hcCgoYm94LCBpbmRleCkgPT4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAyLCAxIC8gM119IHA9XCJsZ1wiPlxuICAgICAgICAgICAgPENhcmQgYXM9XCJhXCIgaHJlZj17Ym94LmhyZWZ9PlxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SWxsdXN0cmF0aW9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtib3gudmFyaWFudCBhcyBJbGx1c3RyYXRpb25Qcm9wc1sndmFyaWFudCddfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SDUgbXQ9XCJsZ1wiPntib3gudGl0bGV9PC9INT5cbiAgICAgICAgICAgICAgICA8VGV4dD57Ym94LnN1YnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gcD1cImxnXCI+XG4gICAgICAgICAgPENhcmQgYXM9XCJhXCIgZmxleCBocmVmPVwiaHR0cHM6Ly9qb2luLnNsYWNrLmNvbS90L2FkbWluYnJvL3NoYXJlZF9pbnZpdGUvenQtZGpzcXh4cHotX1lDUzhVTXRROUFkZTZEUHVMUjdad1wiPlxuICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT48SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJTbGFja0xvZ29cIiAvPjwvQm94PlxuICAgICAgICAgICAgPEJveCBtbD1cInhsXCI+XG4gICAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnY29tbXVuaXR5X3RpdGxlJyl9PC9IND5cbiAgICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2NvbW11bml0eV9zdWJ0aXRsZScpfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAxIC8gMl19IHA9XCJsZ1wiPlxuICAgICAgICAgIDxDYXJkIGFzPVwiYVwiIGZsZXggaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2Z0d2FyZUJyb3RoZXJzL2FkbWluLWJyby9pc3N1ZXNcIj5cbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+PElsbHVzdHJhdGlvbiB2YXJpYW50PVwiR2l0aHViTG9nb1wiIC8+PC9Cb3g+XG4gICAgICAgICAgICA8Qm94IG1sPVwieGxcIj5cbiAgICAgICAgICAgICAgPEg0Pnt0cmFuc2xhdGVNZXNzYWdlKCdmb3VuZEJ1Z190aXRsZScpfTwvSDQ+XG4gICAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKCdmb3VuZEJ1Z19zdWJ0aXRsZScpfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCIgYm94U2hhZG93PVwiY2FyZFwiIHdpZHRoPXsxfSBtPVwibGdcIj5cbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD1cIlNvZnR3YXJlQnJvdGhlcnNMb2dvXCIgLz5cbiAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnbmVlZE1vcmVTb2x1dGlvbnNfdGl0bGUnKX08L0g0PlxuICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25lZWRNb3JlU29sdXRpb25zX3N1YnRpdGxlJyl9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgbXQ9XCJ4eGxcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NvZnR3YXJlYnJvdGhlcnMuY28vc2VydmljZXNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY29udGFjdFVzJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIE1lc3NhZ2VCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbnR5cGUgU3RhdGUgPSB7XG4gIGVycm9yOiBhbnk7XG59XG5cbmNvbnN0IEVycm9yTWVzc2FnZTogUmVhY3QuRkM8U3RhdGU+ID0gKHsgZXJyb3IgfSkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveCBtPVwieHhsXCIgdmFyaWFudD1cImRhbmdlclwiIG1lc3NhZ2U9XCJKYXZhc2NyaXB0IEVycm9yXCI+XG4gICAgICA8VGV4dD57ZXJyb3IudG9TdHJpbmcoKX08L1RleHQ+XG4gICAgICA8VGV4dCBtdD1cImRlZmF1bHRcIj57dHJhbnNsYXRlTWVzc2FnZSgnc2VlQ29uc29sZUZvck1vcmUnKX08L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICg8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuIHx8IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgRGVmYXVsdERhc2hib2FyZCBmcm9tICcuLi9hcHAvZGVmYXVsdC1kYXNoYm9hcmQnXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9hcHAvZXJyb3ItYm91bmRhcnknXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcbiAgVXNlckNvbXBvbmVudHM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uQ29tcG9uZW50Pjtcbn1cblxudHlwZSBTdGF0ZSA9IHtcbiAgaXNDbGllbnQ6IGJvb2xlYW47XG59XG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIGRhc2hib2FyZDoge1xuICAgIGNvbXBvbmVudD86IHN0cmluZztcbiAgfTtcbn1cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzRnJvbVN0YXRlLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHNGcm9tU3RhdGUpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNDbGllbnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NsaWVudDogdHJ1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzQ2xpZW50IH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IENvbXBvbmVudFxuICAgIGlmIChkYXNoYm9hcmQgJiYgZGFzaGJvYXJkLmNvbXBvbmVudCAmJiBpc0NsaWVudFxuICAgICAgICAmJiBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tkYXNoYm9hcmQuY29tcG9uZW50XVxuICAgICkge1xuICAgICAgQ29tcG9uZW50ID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbZGFzaGJvYXJkLmNvbXBvbmVudF0gYXMgRnVuY3Rpb25Db21wb25lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgQ29tcG9uZW50ID0gRGVmYXVsdERhc2hib2FyZFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBkYXNoYm9hcmQ6IHN0YXRlLmRhc2hib2FyZCxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEYXNoYm9hcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG50eXBlIEFkZE5ld0l0ZW1CdXR0b25Qcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbn1cblxuY29uc3QgQWRkTmV3SXRlbUJ1dHRvbjogUmVhY3QuRkM8QWRkTmV3SXRlbUJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBwcm9wZXJ0eSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGxhYmVsID0gdHJhbnNsYXRlUHJvcGVydHkoXG4gICAgYCR7cHJvcGVydHkucGF0aH0uYWRkTmV3SXRlbWAsXG4gICAgcmVzb3VyY2UuaWQsIHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogdHJhbnNsYXRlQnV0dG9uKCdhZGROZXdJdGVtJywgcmVzb3VyY2UuaWQpLFxuICAgIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SWNvbiBpY29uPVwiQWRkXCIgLz5cbiAgICAgIHtsYWJlbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGROZXdJdGVtQnV0dG9uXG4iLCJpbXBvcnQgeyBMYWJlbCwgTGFiZWxQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5TGFiZWxQcm9wcyA9IHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcHJvcHM/OiBMYWJlbFByb3BzO1xufVxuXG5jb25zdCBQcm9wZXJ0eUxhYmVsOiBSZWFjdC5GQzxQcm9wZXJ0eUxhYmVsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHByb3BzOiBsYWJlbFByb3BzIH0gPSBwcm9wc1xuXG4gIGlmIChwcm9wZXJ0eS5oaWRlTGFiZWwpIHsgcmV0dXJuIG51bGwgfVxuXG4gIHJldHVybiAoXG4gICAgPExhYmVsXG4gICAgICBodG1sRm9yPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgcmVxdWlyZWQ9e3Byb3BlcnR5LmlzUmVxdWlyZWR9XG4gICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICA+XG4gICAgICB7cHJvcGVydHkubGFiZWx9XG4gICAgPC9MYWJlbD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBQcm9wZXJ0eUxhYmVsIGFzIGRlZmF1bHQsXG4gIFByb3BlcnR5TGFiZWwsXG59XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mbGF0L2NvbnN0YW50cydcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogQ29udmVydHMgcHJvcGVydHk6IFByb3BlcnR5SlNPTiBmcm9tIGFuIGFycmF5IHRvIGEgc3ViLXByb3BlcnR5IGZvciBhbiBhY3R1YWwgaXRlbSBpbiB0aGUgYXJyYXlcbiAqIEl0IGNoYW5nZSBwYXRoIHRoYXQgaXQgaGFzIGluZGV4IGluc2lkZSBhbG9uZyB3aXRoIHRoZSBsYWJlbC4gRnV0aGVybW9yZSBmbGF0IGlzQXJyYXkgaXMgcmVtb3ZlZFxuICogLGJlY2F1c2UgaXQgd2FzIGFscmVhZHkgaGFuZGxlZCwgc28gdGhhdCBpdGVtUmVuZGVyZXIgY2FuIHJlbmRlciBwcm9wZXJ0eSBhcyBhIHJlZ3VsYXIgb25lXG4gKlxuICogQHBhcmFtIHtQcm9wZXJ0eUpTT059ICBhcnJheVByb3BlcnR5IHByb3BlcnR5IHdpdGggcGF0aCBzZXQgdG8gYW4gcm9vdCBBcnJheSB0eXBlIHByb3BlcnR5LFxuICogQHBhcmFtIHtOdW1iZXJ9ICAgICAgICBpbmRleCAgICAgICAgIGluZGV4IHVuZGVyIHdoaWNoIHN1Yi1wcm9wZXJ0eSBzaG91bGQgYmUgcGxhY2VkXG4gKiBAcHJpdmF0ZVxuICogQGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1N1YlByb3BlcnR5ID0gKGFycmF5UHJvcGVydHk6IFByb3BlcnR5SlNPTiwgaW5kZXg6IG51bWJlcik6IFByb3BlcnR5SlNPTiA9PiAoXG4gIHtcbiAgICAuLi5hcnJheVByb3BlcnR5LFxuICAgIHBhdGg6IFthcnJheVByb3BlcnR5LnBhdGgsIGluZGV4XS5qb2luKERFTElNSVRFUiksXG4gICAgbGFiZWw6IGBbJHtpbmRleCArIDF9XWAsXG4gICAgaXNBcnJheTogZmFsc2UsXG4gIH1cbilcbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG4vKipcbiAqIFJlbW92ZXMgc2VsZWN0ZWQgYXJyYXkgaXRlbSBmcm9tIGdpdmVuIHJlY29yZC4gSXQgcGVyZm9ybXMgZm9sbG93aW5nIHRhc2tzOlxuICogMS4gcmVtb3ZlcyBhcnJheSBpdGVtIGZyb20gdGhlIGFycmF5XG4gKiAyLiByZW9yZGVycyBrZXlzIGluIG5ldyBhcnJheSBpdGVtXG4gKiAzLiBpZiBwcm9wZXJ0eSBoYXMgcG9wdWxhdGVkIGZpZWxkcyBpdCBhbHNvIHJlb3JkZXJzIHRoZW1cbiAqIGl0IHVzZXMge0BsaW5rIGZsYXQgfSBtb2R1bGUgYW5kIGl0cyByZW1vdmVQYXRoIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gcmVjb3JkXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgIHN1YlByb3BlcnR5UGF0aCAgICAgICAgICAgIHdoaWNoIGhhcyB0byBiZSByZW1vdmVkLiBJdCBoYXMgdG8gYmUgZmxhdHRlbmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIG5vdGF0aW9uLCBhbmQgZW5kaW5nIHdpdGggYXJyYXkgaW5kZXhcbiAqIEBwcml2YXRlXG4gKiBAaGlkZVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlU3ViUHJvcGVydHkgPSAocmVjb3JkOiBSZWNvcmRKU09OLCBzdWJQcm9wZXJ0eVBhdGg6IHN0cmluZyk6IFJlY29yZEpTT04gPT4ge1xuICAvLyBieSBkZWZhdWx0IHBvcHVsYXRlZCBpcyBmbGF0dGVuIGp1c3QgdG8gdGhlIHBhdGggbGV2ZWwgLSBvYmplY3QgaXRzZWxmIGlzIG5vdCBmbGF0dGVuLiBUaGF0IGlzXG4gIC8vIHdoeSB3ZSBoYXZlIHRvIHJldHJpZXZlIHRoZSBvcmlnaW5hbCBzdGF0ZS4gVGhhdCBpcyB3aHkgd2UgaGF2ZSB0byByZXBsYWNlIHJlY29yZC5wb3B1bGF0ZWQgdG9cbiAgLy8gZnJvbSB7ICdzb21lLm5lc3RlZC4xLmtleSc6IFJlY29yZEpTT04gfSB0byB7ICdzb21lLm5lc3RlZC4xLmtleSc6ICdzb21lLm5lc3RlZC4xLmtleScgfSxcbiAgLy8gdGhlbiByZW1vdmUga2V5cywgYW5kIHJlZmlsbCBiYWNrIHNvbWUubmVzdGVkLjEua2V5IHRvIHRoZSB2YWx1ZSBmcm9tIHRoZSBvcmlnaW5hbCBwb3B1bGF0ZWRcbiAgLy8gb2JqZWN0LlxuICBjb25zdCBwb3B1bGF0ZWRLZXlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBPYmplY3Qua2V5cyhyZWNvcmQucG9wdWxhdGVkKS5yZWR1Y2UoXG4gICAgKG1lbW8sIHByb3BlcnR5S2V5KSA9PiAoe1xuICAgICAgLi4ubWVtbyxcbiAgICAgIFtwcm9wZXJ0eUtleV06IHByb3BlcnR5S2V5LFxuICAgIH0pLFxuICAgIHt9LFxuICApXG5cbiAgY29uc3QgbmV3UG9wdWxhdGVkS2V5TWFwID0gZmxhdC5yZW1vdmVQYXRoKHBvcHVsYXRlZEtleU1hcCwgc3ViUHJvcGVydHlQYXRoKVxuICBjb25zdCBuZXdQb3B1bGF0ZWQgPSBPYmplY3QuZW50cmllcyhuZXdQb3B1bGF0ZWRLZXlNYXApLnJlZHVjZShcbiAgICAobWVtbywgW25ld1Byb3BlcnR5S2V5LCBvbGRQcm9wZXJ0eUtleV0pID0+ICh7XG4gICAgICAuLi5tZW1vLFxuICAgICAgW25ld1Byb3BlcnR5S2V5XTogb2xkUHJvcGVydHlLZXkgJiYgcmVjb3JkLnBvcHVsYXRlZFtvbGRQcm9wZXJ0eUtleT8udG9TdHJpbmcoKV0sXG4gICAgfSksIHt9LFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWNvcmQsXG4gICAgcGFyYW1zOiBmbGF0LnJlbW92ZVBhdGgocmVjb3JkLnBhcmFtcywgc3ViUHJvcGVydHlQYXRoKSxcbiAgICBwb3B1bGF0ZWQ6IG5ld1BvcHVsYXRlZCxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlY3Rpb24sIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIEljb24sIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFkZE5ld0l0ZW1CdXR0b24gZnJvbSAnLi9hZGQtbmV3LWl0ZW0tdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wc0luQXJyYXkgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHJlbW92ZVN1YlByb3BlcnR5IH0gZnJvbSAnLi9yZW1vdmUtc3ViLXByb3BlcnR5J1xuXG50eXBlIEVkaXRQcm9wcyA9IFJlcXVpcmVkPEVkaXRQcm9wZXJ0eVByb3BzSW5BcnJheT5cblxudHlwZSBJdGVtUmVuZGVyZXJQcm9wcyA9IHtcbiAgb25EZWxldGU6IChldmVudDogTW91c2VFdmVudCwgcHJvcGVydHk6IFByb3BlcnR5SlNPTikgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgSXRlbVJlbmRlcmVyOiBSZWFjdC5GQzxFZGl0UHJvcHMgJiBJdGVtUmVuZGVyZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBJdGVtQ29tcG9uZW50LCBwcm9wZXJ0eSwgb25EZWxldGUgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGF0YS10ZXN0aWQ9e3Byb3BlcnR5LnBhdGh9PlxuICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XG4gICAgICAgIDxJdGVtQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBmbGV4U2hyaW5rPXswfSBtbD1cImxnXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgbWw9XCJkZWZhdWx0XCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImRlbGV0ZS1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KTogYm9vbGVhbiA9PiBvbkRlbGV0ZShldmVudCwgcHJvcGVydHkpfVxuICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj1cIlRyYXNoQ2FuXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBJbnB1dHNJblNlY3Rpb246IFJlYWN0LkZDPEVkaXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCByZXNvdXJjZSwgb25DaGFuZ2UgfSA9IHByb3BzXG4gIGNvbnN0IGl0ZW1zID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICBjb25zdCBhZGROZXcgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBuZXdJdGVtcyA9IFtcbiAgICAgIC4uLml0ZW1zLFxuICAgICAgcHJvcGVydHkuc3ViUHJvcGVydGllcy5sZW5ndGggPyB7fSA6ICcnLFxuICAgIF1cbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBuZXdJdGVtcylcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIFtyZWNvcmQsIG9uQ2hhbmdlLCBwcm9wZXJ0eV0pXG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCwgc3ViUHJvcGVydHk6IFByb3BlcnR5SlNPTik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5ld1JlY29yZCA9IHJlbW92ZVN1YlByb3BlcnR5KHJlY29yZCwgc3ViUHJvcGVydHkucGF0aClcbiAgICBvbkNoYW5nZShuZXdSZWNvcmQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBmYWxzZVxuICB9LCBbcmVjb3JkLCBvbkNoYW5nZSwgcHJvcGVydHldKVxuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gbXQ9XCJ4bFwiPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtUHJvcGVydHkgPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wcy5wcm9wZXJ0eSwgaSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbVJlbmRlcmVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBwcm9wZXJ0eT17aXRlbVByb3BlcnR5fVxuICAgICAgICAgICAga2V5PXtpdGVtUHJvcGVydHkucGF0aH1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtyZW1vdmVJdGVtfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGROZXd9IHR5cGU9XCJidXR0b25cIiByb3VuZGVkPlxuICAgICAgICA8QWRkTmV3SXRlbUJ1dHRvbiByZXNvdXJjZT17cmVzb3VyY2V9IHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgdGVzdElkIH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wcm9wZXJ0eVBhdGhdXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfSBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxJbnB1dHNJblNlY3Rpb24gey4uLnByb3BzfSAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgRWRpdCBhcyBkZWZhdWx0LFxuICBFZGl0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuY29uc3QgTGlzdDogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3QgdmFsdWVzID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPntgbGVuZ3RoOiAke3ZhbHVlcy5sZW5ndGh9YH08L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VjdGlvbiwgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIEl0ZW1Db21wb25lbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGl0ZW1zID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICB7KGl0ZW1zIHx8IFtdKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcm9wZXJ0eSA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BlcnR5LCBpKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW1Qcm9wZXJ0eS5wYXRofVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PXtpdGVtUHJvcGVydHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvVmFsdWVHcm91cD5cbiAgICApXG4gIH1cbn1cbiIsIi8vIGltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcblxuZXhwb3J0IHtcbiAgU2hvdyBhcyBzaG93LFxuICBFZGl0IGFzIGVkaXQsXG4gIExpc3QgYXMgbGlzdCxcbn1cbiIsImltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZsYXQvY29uc3RhbnRzJ1xuaW1wb3J0IHsgUHJvcGVydHlKU09OLCBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1N1YlByb3BlcnR5KFxuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OLFxuICBzdWJQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTixcbik6IFByb3BlcnR5SlNPTiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3ViUHJvcGVydHksXG4gICAgcGF0aDogW3Byb3BlcnR5LnBhdGgsIHN1YlByb3BlcnR5Lm5hbWVdLmpvaW4oREVMSU1JVEVSKSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VjdGlvbiwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG50eXBlIFByb3BzID0ge1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxQcm9wcyAmIEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIEl0ZW1Db21wb25lbnQgfSA9IHByb3BzXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8U2VjdGlvbiB7Li4ucHJvcGVydHkucHJvcHN9PlxuICAgICAgICB7cHJvcGVydHkuc3ViUHJvcGVydGllcy5maWx0ZXIoc3ViUHJvcGVydHkgPT4gIXN1YlByb3BlcnR5LmlzSWQpLm1hcCgoc3ViUHJvcGVydHkpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGtleT17c3ViUHJvcGVydHlXaXRoUGF0aC5wYXRofVxuICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlY3Rpb24sIFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcbn1cblxuY29uc3QgU2hvdzogUmVhY3QuRkM8UHJvcHMgJiBCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgSXRlbUNvbXBvbmVudCB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIHtwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmZpbHRlcihzdWJQcm9wZXJ0eSA9PiAhc3ViUHJvcGVydHkuaXNJZCkubWFwKChzdWJQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9XG4gICAgICAgICAgICAgIHByb3BlcnR5PXtzdWJQcm9wZXJ0eVdpdGhQYXRofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvVmFsdWVHcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG4vLyBUT0RPOiBkZWZpbmUgSXRlbUNvbXBvbmVudCBpbnRlcmZhY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzICYgRWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVySXRlbXMoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgSXRlbUNvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmZpbHRlcihzdWJQcm9wZXJ0eSA9PiAhc3ViUHJvcGVydHkuaXNJZCkubWFwKChzdWJQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9PlxuICAgICAgICAgICAgICA8TGFiZWwgaW5saW5lPntgJHtzdWJQcm9wZXJ0eS5sYWJlbH06IGB9PC9MYWJlbD5cbiAgICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIHJlc291cmNlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2hvd0FjdGlvbiA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICdzaG93JylcblxuICAgIGlmIChyZXNvdXJjZS50aXRsZVByb3BlcnR5LnByb3BlcnR5UGF0aCA9PT0gcHJvcGVydHkucHJvcGVydHlQYXRoICYmIHNob3dBY3Rpb24pIHtcbiAgICAgIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuICAgICAgY29uc3QgaHJlZiA9IGgucmVjb3JkQWN0aW9uVXJsKHtcbiAgICAgICAgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkOiByZWNvcmQuaWQsIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayB0bz17aHJlZn0+e3RoaXMucmVuZGVySXRlbXMoKX08L0xpbms+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckl0ZW1zKClcbiAgfVxufVxuIiwiLy8gaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuXG5leHBvcnQge1xuICBTaG93IGFzIHNob3csXG4gIEVkaXQgYXMgZWRpdCxcbiAgTGlzdCBhcyBsaXN0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IERlZmF1bHRQcm9wZXJ0eVZhbHVlOiBSZWFjdC5GQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cblxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAocHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQob3B0ID0+IG9wdC52YWx1ZSA9PT0gcmF3VmFsdWUpXG5cbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgcmV0dXJuIHJhd1ZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYWRnZT57b3B0aW9uPy5sYWJlbCB8fCByYXdWYWx1ZX08L0JhZGdlPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiByYXdWYWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0UHJvcGVydHlWYWx1ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IERlZmF1bHRQcm9wZXJ0eVZhbHVlIGZyb20gJy4vZGVmYXVsdC1wcm9wZXJ0eS12YWx1ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U2hvd1Byb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8RGVmYXVsdFByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcywgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbi8qKlxuICogRnVuY3Rpb24gdXNlZCBpbiBSZWFjdCBtZW1vIHRvIGNvbXBhcmUgaWYgcHJldmlvdXMgcHJvcGVydHkgdmFsdWUgYW5kIG5leHRcbiAqIHByb3BlcnR5IHZhbHVlIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgcmVjb3JkUHJvcGVydHlJc0VxdWFsID0gKFxuICBwcmV2UHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzIHwgU2hvd1Byb3BlcnR5UHJvcHMsXG4gIG5leHRQcm9wczogRWRpdFByb3BlcnR5UHJvcHMgfCBTaG93UHJvcGVydHlQcm9wcyxcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBwcmV2VmFsdWUgPSBwcmV2UHJvcHMucmVjb3JkLnBhcmFtc1twcmV2UHJvcHMucHJvcGVydHkucGF0aF1cbiAgY29uc3QgbmV4dFZhbHVlID0gbmV4dFByb3BzLnJlY29yZC5wYXJhbXNbbmV4dFByb3BzLnByb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgcHJldkVycm9yID0gcHJldlByb3BzLnJlY29yZC5lcnJvcnNbcHJldlByb3BzLnByb3BlcnR5LnBhdGhdXG4gIGNvbnN0IG5leHRFcnJvciA9IG5leHRQcm9wcy5yZWNvcmQuZXJyb3JzW25leHRQcm9wcy5wcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiBwcmV2VmFsdWUgPT09IG5leHRWYWx1ZSAmJiBwcmV2RXJyb3IgPT09IG5leHRFcnJvclxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IElucHV0LCBGb3JtTWVzc2FnZSwgRm9ybUdyb3VwLCBzZWxlY3RTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAge3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlcyA/IDxTZWxlY3RFZGl0IHsuLi5wcm9wc30gLz4gOiA8VGV4dEVkaXQgey4uLnByb3BzfSAvPn1cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmNvbnN0IFNlbGVjdEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHJlY29yZCwgcHJvcGVydHksIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBpZiAoIXByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IHN0eWxlcyA9IHNlbGVjdFN0eWxlcyh0aGVtZSlcbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChhdiA9PiBhdi52YWx1ZSA9PT0gcHJvcFZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgaXNDbGVhcmFibGVcbiAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgb3B0aW9ucz17cHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzfVxuICAgICAgb25DaGFuZ2U9e3MgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgcz8udmFsdWUgPz8gJycpfVxuICAgICAgaXNEaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmNvbnN0IFRleHRFZGl0OiBGQzxDb21iaW5lZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgLy8gaGFuZGxlIGNsaWNraW5nIEVOVEVSXG4gICAgICBvbktleURvd249e2UgPT4gZS5rZXlDb2RlID09PSAxMyAmJiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbCkpXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgZmlsdGVyU3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWx0ZXJQcm9wZXJ0eVByb3BzICYgVGhlbWVQcm9wczxEZWZhdWx0VGhlbWU+PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdENoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcklucHV0KCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGZpbHRlcktleSA9IGBmaWx0ZXItJHtwcm9wZXJ0eS5wYXRofWBcbiAgICBjb25zdCB2YWx1ZSA9IGZpbHRlcltwcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICAgIGlmIChwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQoYXYgPT4gYXYudmFsdWUgPT09IHZhbHVlKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cbiAgICAgICAgICBzdHlsZXM9e2ZpbHRlclN0eWxlcyh0aGVtZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9e2ZpbHRlcktleX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgRGVmYXVsdFByb3BlcnR5VmFsdWUgZnJvbSAnLi9kZWZhdWx0LXByb3BlcnR5LXZhbHVlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICByZXR1cm4gKDxEZWZhdWx0UHJvcGVydHlWYWx1ZSB7Li4udGhpcy5wcm9wc30gLz4pXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGVja0JveCwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlKTogYm9vbGVhbiA9PiAhKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJylcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VWYWx1ZShyZWNvcmQucGFyYW1zICYmIHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0pXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghcHJvcGVydHkuaXNEaXNhYmxlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgIXZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8Q2hlY2tCb3hcbiAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gcHJvcHM9e3sgaW5saW5lOiB0cnVlIH19IC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImV4cG9ydCBkZWZhdWx0ICh2YWx1ZSk6ICdZZXMnIHwgJ05vJyB8ICcnID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gdmFsdWUgPyAnWWVzJyA6ICdObydcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xuXG5jb25zdCBCb29sZWFuUHJvcGVydHlWYWx1ZTogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkLCBwcm9wZXJ0eSwgcmVzb3VyY2UgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cblxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fCByYXdWYWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGJhc2UgPSBtYXBWYWx1ZShyYXdWYWx1ZSlcbiAgY29uc3QgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGVQcm9wZXJ0eShgJHtwcm9wZXJ0eS5wYXRofS4ke3Jhd1ZhbHVlfWAsIHJlc291cmNlLmlkLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBiYXNlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJhZGdlIG91dGxpbmUgc2l6ZT1cInNtXCI+e3RyYW5zbGF0aW9ufTwvQmFkZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblByb3BlcnR5VmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT4+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciA9IHt9LCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGZpbHRlcltwcm9wZXJ0eS5wYXRoXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGZpbHRlcltwcm9wZXJ0eS5wYXRoXVxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IHZhbHVlOiB0cnVlLCBsYWJlbDogbWFwVmFsdWUodHJ1ZSkgfSxcbiAgICAgIHsgdmFsdWU6IGZhbHNlLCBsYWJlbDogbWFwVmFsdWUoZmFsc2UpIH0sXG4gICAgXVxuICAgIGNvbnN0IHNlbGVjdGVkID0gb3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyIGFzIG5ldmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGVQaWNrZXIsIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gKHJlY29yZC5wYXJhbXMgJiYgcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSkgfHwgJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGRhdGEpfVxuICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCB7IGZvcm1hdERhdGVQcm9wZXJ0eSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWRhcHRlcnMvcHJvcGVydHkvYmFzZS1wcm9wZXJ0eSdcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlOiBEYXRlLCBwcm9wZXJ0eVR5cGU6IFByb3BlcnR5VHlwZSk6IHN0cmluZyA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXG4gIGlmIChkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGVQcm9wZXJ0eShkYXRlLCBwcm9wZXJ0eVR5cGUpXG4gIH1cbiAgcmV0dXJuICcnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgbWFwVmFsdWUgZnJvbSAnLi9tYXAtdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbWFwVmFsdWUocmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSwgcHJvcGVydHkudHlwZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBtYXBWYWx1ZShyZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdLCBwcm9wZXJ0eS50eXBlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBmbGF0IGZyb20gJ2ZsYXQnXG5pbXBvcnQgQmFzZVByb3BlcnR5IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5pbXBvcnQgQmFzZVJlc291cmNlIGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Jlc291cmNlL2Jhc2UtcmVzb3VyY2UnXG5pbXBvcnQgQmFzZVJlY29yZCBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQvYmFzZS1yZWNvcmQnXG5cbmV4cG9ydCBjb25zdCBQQVJBTV9TRVBBUkFUT1IgPSAnfn4nXG5cbmV4cG9ydCB0eXBlIEZpbHRlckVsZW1lbnQgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eTtcbiAgdmFsdWU6IHN0cmluZyB8IHtcbiAgICBmcm9tOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgcG9wdWxhdGVkPzogQmFzZVJlY29yZCB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZWR1Y2VDYWxsYmFjazxUPiB7XG4gIChtZW1vOiBULCBlbGVtZW50OiBGaWx0ZXJFbGVtZW50KTogVDtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgb2JqZWN0IHdyYXBwaW5nIHVwIHNlbGVjdGVkIGZpbHRlcnMuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgcHVibGljIGZpbHRlcnM6IHtba2V5OiBzdHJpbmddOiBGaWx0ZXJFbGVtZW50fVxuXG4gIHByaXZhdGUgcmVzb3VyY2U6IEJhc2VSZXNvdXJjZVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHJhdyBuZXN0ZWQgZmlsdGVycyB0byBmb3JtIE9iamVjdDxwYXRoLCB2YWx1ZT4uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGZpbHRlcnMgPSB7XG4gICAqICBuZXN0ZWQ6IHtmaWVsZDogJ2FsYSd9LFxuICAgKiAgJ2RhdGFGaWVsZH5+ZnJvbSc6ICcyMDE5LTA4LTE0J1xuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IG5vcm1hbGl6ZWQgPSBGaWx0ZXIubm9ybWFsaXplRmlsdGVycyhmaWx0ZXJzKVxuICAgKiAvLyB7XG4gICAqIC8vICAgJ25lc3RlZC5maWx0ZXInOiAnYWxhJyxcbiAgICogLy8gICAnZGF0YUZpZWxkJzoge2Zyb206ICcyMDE5LTA4LTE0J31cbiAgICogLy8gfVxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgZmlsdGVyc1xuICAgKlxuICAgKiBAcmV0dXJuICB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZUtleXMoZmlsdGVycyk6IE1hcDxzdHJpbmcsIGFueT4ge1xuICAgIHJldHVybiBmbGF0LnVuZmxhdHRlbihmbGF0LmZsYXR0ZW4oZmlsdGVycyksIHsgZGVsaW1pdGVyOiBQQVJBTV9TRVBBUkFUT1IgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0PFN0cmluZyxPYmplY3QgfCBTdHJpbmc+fSAgZmlsdGVycyAgIHNlbGVjdGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICAge0Jhc2VSZXNvdXJjZX0gICAgICAgICAgICAgICAgICAgIHJlc291cmNlICAgIHJlc291cmNlIHdoaWNoIGlzIGZpbHRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWx0ZXJzID0ge30sIHJlc291cmNlKSB7XG4gICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IEZpbHRlci5ub3JtYWxpemVLZXlzKGZpbHRlcnMpXG4gICAgdGhpcy5maWx0ZXJzID0gT2JqZWN0LmtleXMobm9ybWFsaXplZCkucmVkdWNlKChtZW1vLCBwYXRoKSA9PiB7XG4gICAgICBtZW1vW3BhdGhdID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBwcm9wZXJ0eTogdGhpcy5yZXNvdXJjZS5wcm9wZXJ0eShwYXRoKSxcbiAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZWRbcGF0aF0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmaWx0ZXIgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICBwcm9wZXJ0eSBrZXlcbiAgICogQHJldHVybnMge0ZpbHRlci5Qcm9wZXJ0eSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IEZpbHRlckVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJzW2tleV1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZXMgYWxsIGZpbHRlcmVkIHByb3BlcnRpZXMgd2hpY2ggcmVmZXJzIHRvIG90aGVyIHJlc291cmNlc1xuICAgKi9cbiAgYXN5bmMgcG9wdWxhdGUoKTogUHJvbWlzZTxGaWx0ZXI+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF1cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVJlc291cmNlID0gdGhpcy5yZXNvdXJjZS5kZWNvcmF0ZSgpLmdldFByb3BlcnR5QnlLZXkoa2V5KT8ucmVmZXJlbmNlKClcbiAgICAgIGlmIChyZWZlcmVuY2VSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpbHRlcnNba2V5XS5wb3B1bGF0ZWQgPSBhd2FpdCByZWZlcmVuY2VSZXNvdXJjZS5maW5kT25lKFxuICAgICAgICAgIHRoaXMuZmlsdGVyc1trZXldLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVkdWNlPFQ+KGNhbGxiYWNrOiBSZWR1Y2VDYWxsYmFjazxUPiwgaW5pdGlhbDogVCk6IFQge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZmlsdGVycykucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsIHx8IHt9IGFzIFQpXG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGhcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIERhdGVQaWNrZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCAqIGFzIEJhY2tlbmRGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyJ1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IHsgUEFSQU1fU0VQQVJBVE9SIH0gPSBCYWNrZW5kRmlsdGVyXG5cblxuY29uc3QgRmlsdGVyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZyb21LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfWZyb21gXG4gIGNvbnN0IHRvS2V5ID0gYCR7cHJvcGVydHkucGF0aH0ke1BBUkFNX1NFUEFSQVRPUn10b2BcbiAgY29uc3QgZnJvbVZhbHVlID0gZmlsdGVyW2Zyb21LZXldXG4gIGNvbnN0IHRvVmFsdWUgPSBmaWx0ZXJbdG9LZXldXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICA8TGFiZWw+LSBGcm9tOiA8L0xhYmVsPlxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIHZhbHVlPXtmcm9tVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKGZyb21LZXksIGRhdGEpfVxuICAgICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cbiAgICAgICAgLz5cbiAgICAgICAgPExhYmVsIG10PVwiZGVmYXVsdFwiPi0gVG86IDwvTGFiZWw+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgdmFsdWU9e3RvVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHRvS2V5LCBkYXRhKX1cbiAgICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG4gIEZvcm1NZXNzYWdlLFxuICBSaWNoVGV4dCxcbiAgUXVpbGxPcHRpb25zLFxuICBEZWZhdWx0UXVpbGxUb29sYmFyT3B0aW9ucyxcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbnR5cGUgQ3VzdG9tVHlwZSA9IHtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHF1aWxsPzogUXVpbGxPcHRpb25zO1xufVxuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICBjb25zdCB7IHByb3BzOiBwcm9wZXJ0eVByb3BzIH0gPSBwcm9wZXJ0eVxuXG4gIGNvbnN0IHsgcXVpbGwgPSB7fSwgLi4uY3VzdG9tUHJvcHMgfSA9IHByb3BlcnR5UHJvcHMgYXMgQ3VzdG9tVHlwZSB8fCB7fVxuICBxdWlsbC50aGVtZSA9IHF1aWxsLnRoZW1lIHx8ICdzbm93J1xuICBxdWlsbC5tb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IERlZmF1bHRRdWlsbFRvb2xiYXJPcHRpb25zLFxuICAgIC4uLihxdWlsbC5tb2R1bGVzIHx8IHt9KSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFJpY2hUZXh0XG4gICAgICAgIHsuLi5jdXN0b21Qcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBjb250ZW50KX1cbiAgICAgICAgcXVpbGw9e3F1aWxsfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3I/Lm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAsIFRleHQsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICBwcml2YXRlIGNvbnRlbnRSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LmlubmVySFRNTCA9IHZhbHVlXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIGJvcmRlcj1cImRlZmF1bHRcIj5cbiAgICAgICAgICA8VGV4dCByZWY9e3RoaXMuY29udGVudFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IG9yaWdpbmFsID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsLnN1YnN0cmluZygwLCAxNSkgKyAob3JpZ2luYWwubGVuZ3RoID4gMTUgPyAnLi4uJyA6ICcnKVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2FzeW5jJ1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIHNlbGVjdFN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIFNlbGVjdFJlY29yZCB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cbnR5cGUgU2VsZWN0UmVjb3JkRW5oYW5jZWQgPSBTZWxlY3RSZWNvcmQgJiB7XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbn1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgdGhlbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVmZXJlbmNlOiByZXNvdXJjZUlkIH0gPSBwcm9wZXJ0eVxuXG4gIGlmICghcmVzb3VyY2VJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlZmVyZW5jZSByZXNvdXJjZSBpbiBwcm9wZXJ0eSAnJHtwcm9wZXJ0eS5wYXRofSdgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlbGVjdGVkOiBTZWxlY3RSZWNvcmRFbmhhbmNlZCk6IHZvaWQgPT4ge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgc2VsZWN0ZWQudmFsdWUsIHNlbGVjdGVkLnJlY29yZClcbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgbnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2FkT3B0aW9ucyA9IGFzeW5jIChpbnB1dFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFNlbGVjdFJlY29yZEVuaGFuY2VkW10+ID0+IHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuICAgIGNvbnN0IG9wdGlvblJlY29yZHMgPSBhd2FpdCBhcGkuc2VhcmNoUmVjb3Jkcyh7XG4gICAgICByZXNvdXJjZUlkLFxuICAgICAgcXVlcnk6IGlucHV0VmFsdWUsXG4gICAgfSlcbiAgICByZXR1cm4gb3B0aW9uUmVjb3Jkcy5tYXAoKG9wdGlvblJlY29yZDogUmVjb3JkSlNPTikgPT4gKHtcbiAgICAgIHZhbHVlOiBvcHRpb25SZWNvcmQuaWQsXG4gICAgICBsYWJlbDogb3B0aW9uUmVjb3JkLnRpdGxlLFxuICAgICAgcmVjb3JkOiBvcHRpb25SZWNvcmQsXG4gICAgfSkpXG4gIH1cbiAgY29uc3QgZXJyb3IgPSByZWNvcmQ/LmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IHNlbGVjdGVkSWQgPSByZWNvcmQ/LnBhcmFtc1twcm9wZXJ0eS5wYXRoXSBhcyBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY29uc3QgW2xvYWRlZFJlY29yZCwgc2V0TG9hZGVkUmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04gfCB1bmRlZmluZWQ+KClcbiAgY29uc3QgW2xvYWRpbmdSZWNvcmQsIHNldExvYWRpbmdSZWNvcmRdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHJlY29yZD8ucG9wdWxhdGVkW3Byb3BlcnR5LnBhdGhdID8/IGxvYWRlZFJlY29yZFxuICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IChzZWxlY3RlZElkICYmIHNlbGVjdGVkVmFsdWUpID8ge1xuICAgIHZhbHVlOiBzZWxlY3RlZFZhbHVlLmlkLFxuICAgIGxhYmVsOiBzZWxlY3RlZFZhbHVlLnRpdGxlLFxuICB9IDoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBsYWJlbDogJycsXG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gc2VsZWN0U3R5bGVzKHRoZW1lKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkSWQpIHtcbiAgICAgIHNldExvYWRpbmdSZWNvcmQoYyA9PiBjICsgMSlcbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICAgICAgYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICAgIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgICAgcmVzb3VyY2VJZCxcbiAgICAgICAgcmVjb3JkSWQ6IHNlbGVjdGVkSWQsXG4gICAgICB9KS50aGVuKCh7IGRhdGEgfTogYW55KSA9PiB7XG4gICAgICAgIHNldExvYWRlZFJlY29yZChkYXRhLnJlY29yZClcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nUmVjb3JkKGMgPT4gYyAtIDEpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkVmFsdWUsIHNlbGVjdGVkSWQsIHJlc291cmNlSWRdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBjYWNoZU9wdGlvbnNcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICBpc0Rpc2FibGVkPXtwcm9wZXJ0eS5pc0Rpc2FibGVkfVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdSZWNvcmR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yPy5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEVkaXQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b25DU1MgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG59XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQ8YW55PihMaW5rKWBcbiAgJHtCdXR0b25DU1N9O1xuICBwYWRkaW5nLWxlZnQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54c307XG4gIHBhZGRpbmctcmlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54c307XG5gXG5cbmNvbnN0IFJlZmVyZW5jZVZhbHVlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuICBjb25zdCByZWZJZCA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgcG9wdWxhdGVkID0gcmVjb3JkLnBvcHVsYXRlZFtwcm9wZXJ0eS5wYXRoXVxuICBjb25zdCB2YWx1ZSA9IChwb3B1bGF0ZWQgJiYgcG9wdWxhdGVkLnRpdGxlKSB8fCByZWZJZFxuXG4gIGlmICghcHJvcGVydHkucmVmZXJlbmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBwcm9wZXJ0eTogXCIke3Byb3BlcnR5LnBhdGh9XCIgZG9lcyBub3QgaGF2ZSBhIHJlZmVyZW5jZWApXG4gIH1cblxuICBpZiAocG9wdWxhdGVkICYmIHBvcHVsYXRlZC5yZWNvcmRBY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICdzaG93JykpIHtcbiAgICBjb25zdCBocmVmID0gaC5yZWNvcmRBY3Rpb25Vcmwoe1xuICAgICAgcmVzb3VyY2VJZDogcHJvcGVydHkucmVmZXJlbmNlLCByZWNvcmRJZDogcmVmSWQsIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGluayB2YXJpYW50PVwidGV4dFwiIHRvPXtocmVmfT57dmFsdWV9PC9TdHlsZWRMaW5rPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlVmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBSZWZlcmVuY2VWYWx1ZSBmcm9tICcuL3JlZmVyZW5jZS12YWx1ZSdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPFJlZmVyZW5jZVZhbHVlXG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAvPlxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUmVmZXJlbmNlVmFsdWUgZnJvbSAnLi9yZWZlcmVuY2UtdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVmZXJlbmNlVmFsdWVcbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9hc3luYydcbmltcG9ydCB7IFRoZW1lUHJvcHMsIERlZmF1bHRUaGVtZSwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5UHJvcHMsIFNlbGVjdFJlY29yZCB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbnR5cGUgQ29tYmluZWRQcm9wcyA9IEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT5cblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxDb21iaW5lZFByb3BzPiB7XG4gIHByaXZhdGUgYXBpOiBBcGlDbGllbnRcblxuICBwcml2YXRlIG9wdGlvbnM6IEFycmF5PFNlbGVjdFJlY29yZD5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tYmluZWRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuYXBpID0gbmV3IEFwaUNsaWVudCgpXG4gICAgdGhpcy5vcHRpb25zID0gW11cbiAgICB0aGlzLmxvYWRPcHRpb25zID0gdGhpcy5sb2FkT3B0aW9ucy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWQ6IFNlbGVjdFJlY29yZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6ICcnKVxuICB9XG5cbiAgYXN5bmMgbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTx7dmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9Pj4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5hcGkuc2VhcmNoUmVjb3Jkcyh7XG4gICAgICByZXNvdXJjZUlkOiBwcm9wZXJ0eS5yZWZlcmVuY2UgYXMgc3RyaW5nLFxuICAgICAgcXVlcnk6IGlucHV0VmFsdWUsXG4gICAgfSlcbiAgICB0aGlzLm9wdGlvbnMgPSByZWNvcmRzLm1hcChyID0+ICh7IHZhbHVlOiByLmlkLCBsYWJlbDogci50aXRsZSB9KSlcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIsIHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgZmlsdGVyW3Byb3BlcnR5LnBhdGhdID09PSAndW5kZWZpbmVkJyA/ICcnIDogZmlsdGVyW3Byb3BlcnR5LnBhdGhdXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSAodGhpcy5vcHRpb25zIHx8IFtdKS5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIGNhY2hlT3B0aW9uc1xuICAgICAgICAgIHN0eWxlcz17ZmlsdGVyU3R5bGVzKHRoZW1lKX1cbiAgICAgICAgICBsb2FkT3B0aW9ucz17dGhpcy5sb2FkT3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyKVxuIiwiXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdIHx8ICcnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAge3ZhbHVlLnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvZykubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApKX1cbiAgICAgIDwvVmFsdWVHcm91cD5cbiAgICApXG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvcFZhbHVlKVxuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPElucHV0XG4gICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICByb3dzPXsodmFsdWUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoICsgMX1cbiAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0LCBGb3JtR3JvdXAsIElucHV0R3JvdXAsIEZvcm1NZXNzYWdlLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzXG4gIGNvbnN0IHByb3BWYWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG4gIGNvbnN0IFtpc0lucHV0LCBzZXRJc0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT17aXNJbnB1dCA/ICdpbnB1dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBpZD17cHJvcGVydHkucGF0aH1cbiAgICAgICAgICBuYW1lPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWUgPz8gJyd9XG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD17aXNJbnB1dCA/ICdwcmltYXJ5JyA6ICd0ZXh0J31cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNJbnB1dCghaXNJbnB1dCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPVwiVmlld1wiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhFZGl0LCByZWNvcmRQcm9wZXJ0eUlzRXF1YWwpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXG5cbmV4cG9ydCB7XG4gIEVkaXQgYXMgZWRpdCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudExpa2UgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9hcHAvZXJyb3ItYm91bmRhcnknXG5cbmltcG9ydCAqIGFzIEFycmF5VHlwZSBmcm9tICcuL2FycmF5J1xuaW1wb3J0ICogYXMgTWl4ZWRUeXBlIGZyb20gJy4vbWl4ZWQnXG5cbmltcG9ydCAqIGFzIGRlZmF1bHRUeXBlIGZyb20gJy4vZGVmYXVsdC10eXBlJ1xuaW1wb3J0ICogYXMgYm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lJ1xuaW1wb3J0ICogYXMgcmljaHRleHQgZnJvbSAnLi9yaWNodGV4dCdcbmltcG9ydCAqIGFzIHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSdcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnXG5pbXBvcnQgKiBhcyBwYXNzd29yZCBmcm9tICcuL3Bhc3N3b3JkJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5sZXQgZ2xvYmFsQW55OiBhbnkgPSB7fVxuXG50cnkge1xuICBnbG9iYWxBbnkgPSB3aW5kb3dcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGlmIChlcnJvci5tZXNzYWdlICE9PSAnd2luZG93IGlzIG5vdCBkZWZpbmVkJykge1xuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuY29uc3QgdHlwZXM6IFJlY29yZDxQcm9wZXJ0eVR5cGUsIGFueT4gPSB7XG4gIHRleHRhcmVhLFxuICBib29sZWFuLFxuICBkYXRldGltZSxcbiAgcmVmZXJlbmNlLFxuICBwYXNzd29yZCxcbiAgZGF0ZTogZGF0ZXRpbWUsXG4gIHJpY2h0ZXh0LFxuICBzdHJpbmc6IGRlZmF1bHRUeXBlLFxuICBudW1iZXI6IGRlZmF1bHRUeXBlLFxuICBmbG9hdDogZGVmYXVsdFR5cGUsXG4gIG1peGVkOiBudWxsLFxufVxuXG4vKipcbiAqIEBsb2FkIC4vYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQuZG9jLm1kXG4gKiBAY29tcG9uZW50XG4gKiBAbmFtZSBCYXNlUHJvcGVydHlDb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudDogUmVhY3QuRkM8QmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHk6IGJhc2VQcm9wZXJ0eSwgcmVzb3VyY2UsIHJlY29yZCwgZmlsdGVyLCB3aGVyZSwgb25DaGFuZ2UgfSA9IHByb3BzXG5cbiAgY29uc3QgcHJvcGVydHk6IFByb3BlcnR5SlNPTiA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5iYXNlUHJvcGVydHksXG4gICAgLy8gd2UgZmlsbCB0aGUgcGF0aCBpZiBpdCBpcyBub3QgdGhlcmUuIFRoYXQgaXMgd2h5IGFsbCB0aGUgYWN0dWFsIENvbXBvbmVudCBSZW5kZXJlcnMgYXJlXG4gICAgLy8gY2FsbGVkIHdpdGggdGhlIHBhdGggc2V0IHRvIHRoaXMgcm9vdCBwYXRoLiBOZXh0IG1peGVkIGFuZCBhcnJheSBjb21wb25lbnRzIGFkZHMgdG8gdGhpc1xuICAgIC8vIHBhdGggZWl0aGVyIGluZGV4IChmb3IgYXJyYXkpIG9yIHN1YlByb3BlcnR5IG5hbWUuXG4gICAgcGF0aDogKGJhc2VQcm9wZXJ0eSBhcyBQcm9wZXJ0eUpTT04pLnBhdGggfHwgYmFzZVByb3BlcnR5LnByb3BlcnR5UGF0aCxcbiAgfSksIFtiYXNlUHJvcGVydHldKVxuXG4gIGNvbnN0IHRlc3RJZCA9IGBwcm9wZXJ0eS0ke3doZXJlfS0ke3Byb3BlcnR5LnBhdGh9YFxuXG4gIGxldCBDb21wb25lbnQ6IFJlYWN0Q29tcG9uZW50TGlrZSA9ICh0eXBlc1twcm9wZXJ0eS50eXBlXSAmJiB0eXBlc1twcm9wZXJ0eS50eXBlXVt3aGVyZV0pXG4gIHx8IGRlZmF1bHRUeXBlW3doZXJlXVxuXG4gIGlmIChwcm9wZXJ0eS5jb21wb25lbnRzICYmIHByb3BlcnR5LmNvbXBvbmVudHNbd2hlcmVdKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gcHJvcGVydHkuY29tcG9uZW50c1t3aGVyZV1cbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGVyZSBpcyBubyBcIiR7cHJvcGVydHkucGF0aH0uY29tcG9uZW50cy4ke3doZXJlfVwiYClcbiAgICB9XG4gICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW2NvbXBvbmVudF1cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHdoZXJlPXt3aGVyZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cblxuICBjb25zdCBBcnJheSA9IEFycmF5VHlwZVt3aGVyZV1cbiAgY29uc3QgTWl4ZWQgPSBNaXhlZFR5cGVbd2hlcmVdXG5cbiAgaWYgKGJhc2VQcm9wZXJ0eS5pc0FycmF5KSB7XG4gICAgaWYgKCFBcnJheSkgeyByZXR1cm4gKDxkaXYgLz4pIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEFycmF5XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICBJdGVtQ29tcG9uZW50PXtCYXNlUHJvcGVydHlDb21wb25lbnR9XG4gICAgICAgIHRlc3RJZD17dGVzdElkfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAoYmFzZVByb3BlcnR5LnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICBpZiAoIU1peGVkKSB7IHJldHVybiAoPGRpdiAvPikgfVxuICAgIHJldHVybiAoXG4gICAgICA8TWl4ZWRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIEl0ZW1Db21wb25lbnQ9e0Jhc2VQcm9wZXJ0eUNvbXBvbmVudH1cbiAgICAgICAgdGVzdElkPXt0ZXN0SWR9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8Qm94IGRhdGEtdGVzdGlkPXt0ZXN0SWR9PlxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApXG59XG5leHBvcnQge1xuICBCYXNlUHJvcGVydHlDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LFxufVxuIiwiaW1wb3J0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtcHJvcGVydHktY29tcG9uZW50J1xuaW1wb3J0ICogYXMgZGVmYXVsdFR5cGUgZnJvbSAnLi9kZWZhdWx0LXR5cGUnXG5pbXBvcnQgKiBhcyBib29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCAqIGFzIGRhdGV0aW1lIGZyb20gJy4vZGF0ZXRpbWUnXG5pbXBvcnQgKiBhcyByaWNodGV4dCBmcm9tICcuL3JpY2h0ZXh0J1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlIGZyb20gJy4vcmVmZXJlbmNlJ1xuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSdcbmltcG9ydCAqIGFzIHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcyB9IGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxubGV0IGdsb2JhbEFueTogYW55ID0ge31cblxudHJ5IHtcbiAgZ2xvYmFsQW55ID0gd2luZG93XG59IGNhdGNoIChlcnJvcikge1xuICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gJ3dpbmRvdyBpcyBub3QgZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbnR5cGUgQmFzZVByb3BlcnR5Q29tcG9uZW50VHlwZSA9IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzPiAmIHtcbiAgRGVmYXVsdFR5cGU6IGFueTtcbiAgQm9vbGVhbjogYW55O1xuICBEYXRlVGltZTogYW55O1xuICBSaWNoVGV4dDogYW55O1xuICBSZWZlcmVuY2U6IGFueTtcbiAgVGV4dEFyZWE6IGFueTtcbiAgUGFzc3dvcmQ6IGFueTtcbn1cblxuZnVuY3Rpb24gY2FtZWxpemVQcm9wZXJ0eVR5cGU8VD4odHlwZToge1trZXk6IHN0cmluZ106IFR9KToge1trZXk6IHN0cmluZ106IFR9IHtcbiAgcmV0dXJuIHtcbiAgICBFZGl0OiB0eXBlLmVkaXQsXG4gICAgU2hvdzogdHlwZS5zaG93LFxuICAgIExpc3Q6IHR5cGUubGlzdCxcbiAgICBGaWx0ZXI6IHR5cGUuZmlsdGVyLFxuICB9XG59XG5cbmNvbnN0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudEV4dGVuZGVkOiBCYXNlUHJvcGVydHlDb21wb25lbnRUeXBlID0gT2JqZWN0LmFzc2lnbihcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LCB7XG4gICAgRGVmYXVsdFR5cGU6IGNhbWVsaXplUHJvcGVydHlUeXBlKGRlZmF1bHRUeXBlKSxcbiAgICBCb29sZWFuOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShib29sZWFuKSxcbiAgICBEYXRlVGltZTogY2FtZWxpemVQcm9wZXJ0eVR5cGUoZGF0ZXRpbWUpLFxuICAgIFJpY2hUZXh0OiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyaWNodGV4dCksXG4gICAgUmVmZXJlbmNlOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyZWZlcmVuY2UpLFxuICAgIFRleHRBcmVhOiBjYW1lbGl6ZVByb3BlcnR5VHlwZSh0ZXh0YXJlYSksXG4gICAgUGFzc3dvcmQ6IGNhbWVsaXplUHJvcGVydHlUeXBlKHBhc3N3b3JkKSxcbiAgfSxcbilcblxuXG5leHBvcnQge1xuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBkZWZhdWx0LFxuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBCYXNlUHJvcGVydHlDb21wb25lbnQsXG59XG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuZXhwb3J0IGNvbnN0IEJyZWFkY3J1bWJMaW5rID0gc3R5bGVkKExpbmspYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5NDB9O1xuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmZvbnR9O1xuICBsaW5lLWhlaWdodDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmxpbmVIZWlnaHRzLmRlZmF1bHR9O1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5mb250U2l6ZXMuZGVmYXVsdH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5MTAwfTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcvJztcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS5kZWZhdWx0fTtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cbmBcblxuLyoqXG4gKiBAbWVtYmVyb2YgQnJlYWRjcnVtYnNcbiAqL1xuZXhwb3J0IHR5cGUgQnJlYWRjcnVtYlByb3BzID0ge1xuICAvKipcbiAgICogUmVzb3VyY2VcbiAgICovXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIC8qKlxuICAgKiByZWNvcmRcbiAgICovXG4gIHJlY29yZD86IFJlY29yZEpTT04gfCBudWxsO1xuICAvKipcbiAgICogTmFtZSBvZiBhbiBhY3Rpb25cbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYnM6IFJlYWN0LkZDPEJyZWFkY3J1bWJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgcmVjb3JkLCBhY3Rpb25OYW1lIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGFjdGlvbiA9IHJlc291cmNlLmFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gYWN0aW9uTmFtZSlcbiAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdCcmVhZGNydW1icycpfT5cbiAgICAgIDxCcmVhZGNydW1iTGluayB0bz17aC5kYXNoYm9hcmRVcmwoKX0+RGFzaGJvYXJkPC9CcmVhZGNydW1iTGluaz5cbiAgICAgIDxCcmVhZGNydW1iTGluayB0bz17cmVzb3VyY2UuaHJlZiA/IHJlc291cmNlLmhyZWYgOiAnLyd9IGNsYXNzTmFtZT17cmVjb3JkID8gJ2lzLWFjdGl2ZScgOiAnJ30+XG4gICAgICAgIHtyZXNvdXJjZS5uYW1lfVxuICAgICAgPC9CcmVhZGNydW1iTGluaz5cbiAgICAgIHsgYWN0aW9uICYmIGFjdGlvbi5uYW1lICE9PSAnbGlzdCcgJiYgPEJyZWFkY3J1bWJMaW5rIHRvPVwiI1wiPnthY3Rpb24ubGFiZWx9PC9CcmVhZGNydW1iTGluaz59XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnNcbiIsImltcG9ydCB7IEJ1dHRvbkdyb3VwUHJvcHMsIEJ1dHRvbkluR3JvdXBQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgYWN0aW9uSHJlZiwgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25UZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5cbmV4cG9ydCB0eXBlIGFjdGlvbnNUb0J1dHRvbkdyb3VwT3B0aW9ucyA9IHtcbiAgYWN0aW9uczogQXJyYXk8QWN0aW9uSlNPTj47XG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xuICBoYW5kbGVDbGljazogQnV0dG9uSW5Hcm91cFByb3BzWydvbkNsaWNrJ107XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zVG9CdXR0b25Hcm91cCA9IChcbiAgb3B0aW9uczogYWN0aW9uc1RvQnV0dG9uR3JvdXBPcHRpb25zLFxuKTogQnV0dG9uR3JvdXBQcm9wc1snYnV0dG9ucyddID0+IHtcbiAgY29uc3QgeyBhY3Rpb25zLCBwYXJhbXMsIGhhbmRsZUNsaWNrIH0gPSBvcHRpb25zXG4gIGNvbnN0IGJ1dHRvbnMgPSBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IGFjdGlvbi5pY29uLFxuICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCxcbiAgICAgIHZhcmlhbnQ6IGFjdGlvbi52YXJpYW50LFxuICAgICAgc291cmNlOiBhY3Rpb24sXG4gICAgICBocmVmOiBocmVmIHx8IHVuZGVmaW5lZCxcbiAgICAgIC8vIHdoZW4gaHJlZiBpcyBub3QgZGVmaW5lZCAtIGhhbmRsZSBjbGljayBzaG91bGQgYWxzbyBiZSBub3QgZGVmaW5lZFxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBmcm9tIFwiY3Vyc29yOiBwb2ludGVyO1wiXG4gICAgICBvbkNsaWNrOiBocmVmID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWQsXG4gICAgICAnZGF0YS10ZXN0aWQnOiBidWlsZEFjdGlvblRlc3RJZChhY3Rpb24pLFxuICAgICAgYnV0dG9uczogW10sXG4gICAgfVxuICB9KVxuXG4gIC8vIG5lc3RpbmcgYnV0dG9uc1xuICBjb25zdCBidXR0b25zTWFwID0gYnV0dG9ucy5yZWR1Y2UoKG1lbW8sIGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IGJ1dHRvbi5zb3VyY2VcbiAgICBpZiAoYWN0aW9uLnBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50OiBCdXR0b25Jbkdyb3VwUHJvcHMgPSBtZW1vW2FjdGlvbi5wYXJlbnRdXG4gICAgICAgIHx8IGJ1dHRvbnMuZmluZChidG4gPT4gYnRuLnNvdXJjZS5uYW1lID09PSBhY3Rpb24ucGFyZW50KVxuICAgICAgICB8fCB7XG4gICAgICAgICAgbGFiZWw6IGFjdGlvbi5wYXJlbnQsXG4gICAgICAgIH1cblxuICAgICAgcGFyZW50LmJ1dHRvbnMgPSBwYXJlbnQuYnV0dG9ucyB8fCBbXVxuICAgICAgcGFyZW50LmJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZW1vLFxuICAgICAgICBbYWN0aW9uLnBhcmVudF06IHBhcmVudCxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1lbW8sXG4gICAgICBbYnV0dG9uLnNvdXJjZS5uYW1lXTogYnV0dG9uLFxuICAgIH1cbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgQnV0dG9uSW5Hcm91cFByb3BzPilcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYnV0dG9uc01hcClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtcbiAgQnV0dG9uQ1NTLFxuICBCdXR0b25Qcm9wcyxcbiAgSWNvbixcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoKHsgcm91bmRlZCwgLi4ucmVzdCB9KSA9PiA8Um91dGVyTGluayB7Li4ucmVzdH0gLz4pPEJ1dHRvblByb3BzPmAke0J1dHRvbkNTU31gXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuZXhwb3J0IHR5cGUgU3R5bGVkQmFja0J1dHRvblByb3BzID0ge1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIHNob3dJbkRyYXdlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJhY2tCdXR0b246IFJlYWN0LkZDPFN0eWxlZEJhY2tCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBzaG93SW5EcmF3ZXIgfSA9IHByb3BzXG4gIGNvbnN0IGNzc0Nsb3NlSWNvbiA9IHNob3dJbkRyYXdlciA/ICdDaGV2cm9uUmlnaHQnIDogJ0NoZXZyb25MZWZ0J1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExpbmtcbiAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgIHRvPXtoLnJlc291cmNlVXJsKHsgcmVzb3VyY2VJZCwgc2VhcmNoOiB3aW5kb3cubG9jYXRpb24uc2VhcmNoIH0pfVxuICAgICAgcm91bmRlZFxuICAgICAgbXI9XCJsZ1wiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICA8SWNvbiBpY29uPXtjc3NDbG9zZUljb259IC8+XG4gICAgPC9TdHlsZWRMaW5rPlxuICApXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQmFkZ2UsIEgzLCBIMiwgQnV0dG9uR3JvdXAsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uL2JyZWFkY3J1bWJzJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyUHJvcHMgfSBmcm9tICcuL2FjdGlvbi1oZWFkZXItcHJvcHMnXG5pbXBvcnQgeyBhY3Rpb25zVG9CdXR0b25Hcm91cCB9IGZyb20gJy4vYWN0aW9ucy10by1idXR0b24tZ3JvdXAnXG5pbXBvcnQgeyBTdHlsZWRCYWNrQnV0dG9uIH0gZnJvbSAnLi9zdHlsZWQtYmFjay1idXR0b24nXG5cbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24nXG5cbi8qKlxuICogSGVhZGVyIG9mIGFuIGFjdGlvbi4gSXQgcmVuZGVycyBBY3Rpb24gbmFtZSB3aXRoIGJ1dHRvbnMgZm9yIGFsbCB0aGUgYWN0aW9ucy5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJ2FkbWluLWJybydcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgQWN0aW9uSGVhZGVyOiBSZWFjdC5GQzxBY3Rpb25IZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlc291cmNlLCB0b2dnbGVGaWx0ZXIsIGFjdGlvblBlcmZvcm1lZCwgcmVjb3JkLCBhY3Rpb24sIHRhZywgb21pdEFjdGlvbnMsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKGFjdGlvblBlcmZvcm1lZClcblxuICBpZiAoYWN0aW9uLmhpZGVBY3Rpb25IZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcmVzb3VyY2VJZCA9IHJlc291cmNlLmlkXG4gIGNvbnN0IHBhcmFtcyA9IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQ6IHJlY29yZD8uaWQgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICB9KShldmVudClcbiAgKVxuXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XG4gICAgYWN0aW9uczogcmVjb3JkXG4gICAgICA/IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbHRlcihyYSA9PiAhYWN0aW9uIHx8IGFjdGlvbi5uYW1lICE9PSByYS5uYW1lKVxuICAgICAgLy8gb25seSBuZXcgYWN0aW9uIHNob3VsZCBiZSBzZWVuIGluIHJlZ3VsYXIgXCJCaWdcIiBhY3Rpb25zIHBsYWNlXG4gICAgICA6IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maWx0ZXIocmEgPT4gcmEubmFtZSA9PT0gJ25ldycgJiYgKCFhY3Rpb24gfHwgYWN0aW9uLm5hbWUgIT09IHJhLm5hbWUpKSxcbiAgICBwYXJhbXMsXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIGlmICh0b2dnbGVGaWx0ZXIpIHtcbiAgICBhY3Rpb25CdXR0b25zLnB1c2goe1xuICAgICAgbGFiZWw6IHRyYW5zbGF0ZUJ1dHRvbignZmlsdGVyJywgcmVzb3VyY2UuaWQpLFxuICAgICAgb25DbGljazogdG9nZ2xlRmlsdGVyLFxuICAgICAgaWNvbjogJ1NldHRpbmdzQWRqdXN0JyxcbiAgICB9KVxuICB9XG5cbiAgLy8gbGlzdCBhbmQgbmV3IGFjdGlvbnMgYXJlIHNwZWNpYWwgYW5kIGFyZSBhcmUgYWx3YXlzXG4gIGNvbnN0IGN1c3RvbVJlc291cmNlQnV0dG9ucyA9IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcbiAgICBhY3Rpb25zOiByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmlsdGVyKHJhID0+ICFbJ2xpc3QnLCAnbmV3J10uaW5jbHVkZXMocmEubmFtZSkpLFxuICAgIHBhcmFtczogeyByZXNvdXJjZUlkIH0sXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIGNvbnN0IHRpdGxlID0gYWN0aW9uID8gYWN0aW9uLmxhYmVsIDogcmVzb3VyY2UubmFtZVxuICBjb25zdCBpc0xpc3QgPSBhY3Rpb24gJiYgYWN0aW9uLm5hbWUgPT09ICdsaXN0J1xuICBjb25zdCBsaXN0QWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQocmEgPT4gcmEubmFtZSA9PT0gJ2xpc3QnKVxuXG4gIC8vIHN0eWxlZCB3aGljaCBkaWZmZXJzIGlmIGFjdGlvbiBoZWFkZXIgaXMgaW4gdGhlIGRyYXdlciBvciBub3RcbiAgY29uc3QgY3NzSXNSb290RmxleCA9ICFhY3Rpb24uc2hvd0luRHJhd2VyXG4gIGNvbnN0IGNzc0hlYWRlck1UID0gYWN0aW9uLnNob3dJbkRyYXdlciA/ICcnIDogJ2xnJ1xuICBjb25zdCBjc3NBY3Rpb25zTUIgPSBhY3Rpb24uc2hvd0luRHJhd2VyID8gJ3hsJyA6ICdkZWZhdWx0J1xuICBjb25zdCBDc3NIQ29tcG9uZW50ID0gYWN0aW9uLnNob3dJbkRyYXdlciA/IEgzIDogSDJcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtjc3NDbGFzcygnQWN0aW9uSGVhZGVyJyl9PlxuICAgICAge2FjdGlvbi5zaG93SW5EcmF3ZXIgPyAnJyA6IChcbiAgICAgICAgPEJveCBmbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBweD17WydkZWZhdWx0JywgMF19PlxuICAgICAgICAgIDxCcmVhZGNydW1icyByZXNvdXJjZT17cmVzb3VyY2V9IGFjdGlvbk5hbWU9e2FjdGlvbi5uYW1lfSByZWNvcmQ9e3JlY29yZH0gLz5cbiAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbVwiIHJvdW5kZWQgYnV0dG9ucz17Y3VzdG9tUmVzb3VyY2VCdXR0b25zfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICA8Qm94IGRpc3BsYXk9e1snYmxvY2snLCBjc3NJc1Jvb3RGbGV4ID8gJ2ZsZXgnIDogJ2Jsb2NrJ119PlxuICAgICAgICA8Qm94IG10PXtjc3NIZWFkZXJNVH0gZmxleEdyb3c9ezF9IHB4PXtbJ2RlZmF1bHQnLCAwXX0+XG4gICAgICAgICAgPENzc0hDb21wb25lbnQgbWI9XCJsZ1wiPlxuICAgICAgICAgICAgeyFpc0xpc3QgJiYgbGlzdEFjdGlvbiA/IChcbiAgICAgICAgICAgICAgPFN0eWxlZEJhY2tCdXR0b24gcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gc2hvd0luRHJhd2VyPXthY3Rpb24uc2hvd0luRHJhd2VyfSAvPlxuICAgICAgICAgICAgKSA6ICcnfVxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAge3RhZyA/ICg8QmFkZ2UgdmFyaWFudD1cInByaW1hcnlcIiBtbD1cImRlZmF1bHRcIj57dGFnfTwvQmFkZ2U+KSA6ICcnfVxuICAgICAgICAgIDwvQ3NzSENvbXBvbmVudD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtvbWl0QWN0aW9ucyA/ICcnIDogKFxuICAgICAgICAgIDxCb3ggbXQ9XCJ4bFwiIG1iPXtjc3NBY3Rpb25zTUJ9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGJ1dHRvbnM9e2FjdGlvbkJ1dHRvbnN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25IZWFkZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIERlc2lnblN5c3RlbSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4uL2FjdGlvbi5wcm9wcydcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IFByb3BlcnR5UGxhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3Byb3BlcnR5LWpzb24vcHJvcGVydHktanNvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBQYXJzZWRMYXlvdXRFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9sYXlvdXQtZWxlbWVudC1wYXJzZXInXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxudHlwZSBQcm9wcyA9IEFjdGlvblByb3BzICYge1xuICBsYXlvdXRFbGVtZW50OiBQYXJzZWRMYXlvdXRFbGVtZW50O1xuICB3aGVyZTogUHJvcGVydHlQbGFjZTtcbiAgb25DaGFuZ2U/OiBCYXNlUHJvcGVydHlQcm9wc1snb25DaGFuZ2UnXTtcbn1cblxuZXhwb3J0IGNvbnN0IExheW91dEVsZW1lbnRSZW5kZXJlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGF5b3V0RWxlbWVudCwgcmVzb3VyY2UsIHdoZXJlLCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHtcbiAgICBwcm9wczogbGF5b3V0UHJvcHMsXG4gICAgcHJvcGVydGllczogcHJvcGVydHlOYW1lcyxcbiAgICBsYXlvdXRFbGVtZW50czogaW5uZXJMYXlvdXRFbGVtZW50cyxcbiAgICBjb21wb25lbnQsXG4gIH0gPSBsYXlvdXRFbGVtZW50XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSA9IGxheW91dFByb3BzXG5cbiAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnR5TmFtZXMubWFwKG5hbWUgPT4gcmVzb3VyY2UucHJvcGVydGllc1tuYW1lXSlcblxuICBjb25zdCBDb21wb25lbnQgPSBEZXNpZ25TeXN0ZW1bY29tcG9uZW50XVxuICBpZiAoIUNvbXBvbmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RGVzaWduU3lzdGVtLk1lc3NhZ2VCb3hcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgbWVzc2FnZT1cIkphdmFzY3JpcHQgRXJyb3JcIlxuICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgcHk9XCJ4bFwiXG4gICAgICA+XG4gICAgICAgIFRoZXJlIGlzIG5vIGNvbXBvbmVudCBieSB0aGUgbmFtZSBvZlxuICAgICAgICA8RGVzaWduU3lzdGVtLkJhZGdlIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBteD1cImRlZmF1bHRcIj57Y29tcG9uZW50fTwvRGVzaWduU3lzdGVtLkJhZGdlPlxuICAgICAgICBpbiBAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0uIENoYW5nZVxuICAgICAgICA8RGVzaWduU3lzdGVtLkJhZGdlIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBteD1cImRlZmF1bHRcIj57YEAke2NvbXBvbmVudH1gfTwvRGVzaWduU3lzdGVtLkJhZGdlPlxuICAgICAgICB0byBhdmFpbGFibGUgY29tcG9uZW50IGxpa2UgQEhlYWRlclxuICAgICAgPC9EZXNpZ25TeXN0ZW0uTWVzc2FnZUJveD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLm90aGVyIGFzIGFueX0+XG4gICAgICB7cHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICA8RGVzaWduU3lzdGVtLkJveCBmbGV4R3Jvdz17MX0ga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9PlxuICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EZXNpZ25TeXN0ZW0uQm94PlxuICAgICAgKSl9XG4gICAgICB7aW5uZXJMYXlvdXRFbGVtZW50cy5tYXAoKGlubmVyTGF5b3V0RWxlbWVudCwgaSkgPT4gKFxuICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgbGF5b3V0RWxlbWVudD17aW5uZXJMYXlvdXRFbGVtZW50fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db21wb25lbnQ+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgRHJhd2VyQ29udGVudCwgQm94LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgdXNlUmVjb3JkIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvdXNlLXJlY29yZCdcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCBMYXlvdXRFbGVtZW50UmVuZGVyZXIgZnJvbSAnLi91dGlscy9sYXlvdXQtZWxlbWVudC1yZW5kZXJlcidcblxuY29uc3QgTmV3OiBGQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWNvcmQ6IGluaXRpYWxSZWNvcmQsIHJlc291cmNlLCBhY3Rpb24gfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICByZWNvcmQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIGxvYWRpbmcsXG4gICAgc2V0UmVjb3JkLFxuICB9ID0gdXNlUmVjb3JkKGluaXRpYWxSZWNvcmQsIHJlc291cmNlLmlkKVxuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbFJlY29yZCkge1xuICAgICAgc2V0UmVjb3JkKGluaXRpYWxSZWNvcmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFJlY29yZF0pXG5cbiAgY29uc3Qgc3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IGJvb2xlYW4gPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVTdWJtaXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZEZvcmNlUmVmcmVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSlcbiAgICAgIH1cbiAgICAgIC8vIGlmIHJlY29yZCBoYXMgaWQgPT09IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlY29yZC5pZCkge1xuICAgICAgICBoYW5kbGVDaGFuZ2UoeyBwYXJhbXM6IHt9LCBwb3B1bGF0ZWQ6IHt9LCBlcnJvcnM6IHt9IH0gYXMgUmVjb3JkSlNPTilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBhcz1cImZvcm1cIlxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cbiAgICAgIGZsZXhcbiAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgPlxuICAgICAgPERyYXdlckNvbnRlbnQ+XG4gICAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBsYXlvdXRFbGVtZW50PXtsYXlvdXRFbGVtZW50fVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIDogcmVzb3VyY2UuZWRpdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9XCJidXR0b24tc2F2ZVwiPlxuICAgICAgICAgIHtsb2FkaW5nID8gKDxJY29uIGljb249XCJGYWRlXCIgc3BpbiAvPikgOiBudWxsfVxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTmV3IGFzIGRlZmF1bHQsXG4gIE5ldyxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgRHJhd2VyQ29udGVudCwgQm94LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCB1c2VSZWNvcmQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXG5cbmNvbnN0IEVkaXQ6IEZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY29yZDogaW5pdGlhbFJlY29yZCwgcmVzb3VyY2UsIGFjdGlvbiB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcmVjb3JkLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBzdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICBsb2FkaW5nLFxuICAgIHNldFJlY29yZCxcbiAgfSA9IHVzZVJlY29yZChpbml0aWFsUmVjb3JkLCByZXNvdXJjZS5pZClcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxSZWNvcmQpIHtcbiAgICAgIHNldFJlY29yZChpbml0aWFsUmVjb3JkKVxuICAgIH1cbiAgfSwgW2luaXRpYWxSZWNvcmRdKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiBib29sZWFuID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaGFuZGxlU3VibWl0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJmb3JtXCJcbiAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICBmbGV4XG4gICAgICBmbGV4R3Jvdz17MX1cbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgID5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAgICB7YWN0aW9uLmxheW91dCA/IGFjdGlvbi5sYXlvdXQubWFwKChsYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgbGF5b3V0RWxlbWVudD17bGF5b3V0RWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKSA6IHJlc291cmNlLmVkaXRQcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0RyYXdlckNvbnRlbnQ+XG4gICAgICA8RHJhd2VyRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLXNhdmVcIj5cbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdzYXZlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCB7XG4gIEVkaXQgYXMgZGVmYXVsdCxcbiAgRWRpdCxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdlckNvbnRlbnQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXG5cbi8qKlxuICogQG5hbWUgU2hvd0FjdGlvblxuICogQGNhdGVnb3J5IEFjdGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGdpdmVuIHJlY29yZC5cbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNob3c6IFJlYWN0LkZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCByZWNvcmQsIGFjdGlvbiB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcGVydGllcyA9IHJlc291cmNlLnNob3dQcm9wZXJ0aWVzXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICB7YWN0aW9uLmxheW91dCA/IGFjdGlvbi5sYXlvdXQubWFwKChsYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2xheW91dEVsZW1lbnR9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHdoZXJlPVwic2hvd1wiXG4gICAgICAgIC8+XG4gICAgICApKSA6IHByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgIHdoZXJlPVwic2hvd1wiXG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuXG4gICAgPC9EcmF3ZXJDb250ZW50PlxuICApXG59XG5cbmV4cG9ydCB7XG4gIFNob3cgYXMgZGVmYXVsdCxcbiAgU2hvdyxcbn1cbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5ID0gKGlzVGl0bGU6IGJvb2xlYW4pOiBBcnJheTxzdHJpbmc+ID0+IFtcbiAgaXNUaXRsZSA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyxcbiAgaXNUaXRsZSA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyxcbiAgJ3RhYmxlLWNlbGwnLFxuICAndGFibGUtY2VsbCcsXG5dXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtcbiAgUGxhY2Vob2xkZXIsIFRhYmxlUm93LCBUYWJsZUNlbGwsIENoZWNrQm94LCBCdXR0b25Hcm91cCxcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciwgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL3V0aWxzL2Rpc3BsYXknXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSwgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcbmltcG9ydCBtZXJnZVJlY29yZFJlc3BvbnNlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlJ1xuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBhY3Rpb25zVG9CdXR0b25Hcm91cCB9IGZyb20gJy4uL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAnXG5cbmV4cG9ydCB0eXBlIFJlY29yZEluTGlzdFByb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIGFjdGlvblBlcmZvcm1lZD86IChhY3Rpb246IEFjdGlvblJlc3BvbnNlKSA9PiBhbnk7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG4gIG9uU2VsZWN0PzogKHJlY29yZDogUmVjb3JkSlNPTikgPT4gdm9pZDtcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSZWNvcmRJbkxpc3Q6IFJlYWN0LkZDPFJlY29yZEluTGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzb3VyY2UsIHJlY29yZDogcmVjb3JkRnJvbVByb3BzLCBhY3Rpb25QZXJmb3JtZWQsXG4gICAgaXNMb2FkaW5nLCBvblNlbGVjdCwgaXNTZWxlY3RlZCxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSB1c2VTdGF0ZTxSZWNvcmRKU09OPihyZWNvcmRGcm9tUHJvcHMpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBoYW5kbGVBY3Rpb25DYWxsYmFjayA9IHVzZUNhbGxiYWNrKChhY3Rpb25SZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpID0+IHtcbiAgICBpZiAoYWN0aW9uUmVzcG9uc2UucmVjb3JkICYmICFhY3Rpb25SZXNwb25zZS5yZWRpcmVjdFVybCkge1xuICAgICAgc2V0UmVjb3JkKG1lcmdlUmVjb3JkUmVzcG9uc2UocmVjb3JkLCBhY3Rpb25SZXNwb25zZSBhcyBSZWNvcmRBY3Rpb25SZXNwb25zZSkpXG4gICAgfSBlbHNlIGlmIChhY3Rpb25QZXJmb3JtZWQpIHtcbiAgICAgIGFjdGlvblBlcmZvcm1lZChhY3Rpb25SZXNwb25zZSlcbiAgICB9XG4gIH0sIFthY3Rpb25QZXJmb3JtZWQsIHJlY29yZF0pXG5cbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKGhhbmRsZUFjdGlvbkNhbGxiYWNrKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UmVjb3JkKHJlY29yZEZyb21Qcm9wcylcbiAgfSwgW3JlY29yZEZyb21Qcm9wc10pXG5cbiAgY29uc3QgeyByZWNvcmRBY3Rpb25zIH0gPSByZWNvcmRcblxuICBjb25zdCBzaG93ID0gcmVjb3JkLnJlY29yZEFjdGlvbnMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaG93JylcbiAgY29uc3QgZWRpdCA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnZWRpdCcpXG4gIGNvbnN0IGFjdGlvbiA9IHNob3cgfHwgZWRpdFxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VGFnTmFtZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgIGlmIChhY3Rpb25cbiAgICAgICYmIHRhcmdldFRhZ05hbWUgIT09ICdhJ1xuICAgICAgJiYgdGFyZ2V0VGFnTmFtZSAhPT0gJ2J1dHRvbidcbiAgICAgICYmIHRhcmdldFRhZ05hbWUgIT09ICdzdmcnXG4gICAgKSB7XG4gICAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgcGFyYW1zOiB7IHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZDogcmVjb3JkLmlkIH0sXG4gICAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgICAgfSkoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWN0aW9uUGFyYW1zID0geyByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWQ6IHJlY29yZC5pZCB9XG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2xpY2sgPSAoZXZlbnQsIHNvdXJjZUFjdGlvbjogQWN0aW9uSlNPTik6IHZvaWQgPT4gKFxuICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcbiAgICAgIGFjdGlvbjogc291cmNlQWN0aW9uLFxuICAgICAgcGFyYW1zOiBhY3Rpb25QYXJhbXMsXG4gICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gICAgfSkoZXZlbnQpXG4gIClcblxuICBjb25zdCBidXR0b25zID0gW3tcbiAgICBpY29uOiAnT3ZlcmZsb3dNZW51SG9yaXpvbnRhbCcsXG4gICAgdmFyaWFudDogJ2xpZ2h0JyBhcyBjb25zdCxcbiAgICBsYWJlbDogdW5kZWZpbmVkLFxuICAgICdkYXRhLXRlc3RpZCc6ICdhY3Rpb25zLWRyb3Bkb3duJyxcbiAgICBidXR0b25zOiBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XG4gICAgICBhY3Rpb25zOiByZWNvcmRBY3Rpb25zLFxuICAgICAgcGFyYW1zOiBhY3Rpb25QYXJhbXMsXG4gICAgICBoYW5kbGVDbGljazogaGFuZGxlQWN0aW9uQ2xpY2ssXG4gICAgfSksXG4gIH1dXG5cblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVJvdyBvbkNsaWNrPXtoYW5kbGVDbGlja30gZGF0YS1pZD17cmVjb3JkLmlkfT5cbiAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICdub3Qtc2VsZWN0ZWQnfT5cbiAgICAgICAge29uU2VsZWN0ICYmIHJlY29yZC5idWxrQWN0aW9ucy5sZW5ndGggPyAoXG4gICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICBvbkNoYW5nZT17KCk6IHZvaWQgPT4gb25TZWxlY3QocmVjb3JkKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIHtyZXNvdXJjZS5saXN0UHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICBkYXRhLXByb3BlcnR5LW5hbWU9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5KHByb3BlcnR5LmlzVGl0bGUpfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxQbGFjZWhvbGRlciBzdHlsZT17eyBoZWlnaHQ6IDE0IH19IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICAgIHdoZXJlPVwibGlzdFwiXG4gICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICApKX1cbiAgICAgIDxUYWJsZUNlbGwga2V5PVwib3B0aW9uc1wiPlxuICAgICAgICB7cmVjb3JkQWN0aW9ucy5sZW5ndGggPyAoXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGJ1dHRvbnM9e2J1dHRvbnN9IC8+XG4gICAgICAgICkgOiAnJ31cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgIDwvVGFibGVSb3c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkSW5MaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEljb24sIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxuXG5leHBvcnQgdHlwZSBTb3J0TGlua1Byb3BzID0ge1xuICBwcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XG4gIHNvcnRCeT86IHN0cmluZztcbn1cblxuY2xhc3MgU29ydExpbmsgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFNvcnRMaW5rUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUuYmluZCh0aGlzKVxuICB9XG5cbiAgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBzb3J0QnksIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHNvcnRCeSA9PT0gcHJvcGVydHkucHJvcGVydHlQYXRoXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCBsb2NhdGlvbiwgZGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9ICh0aGlzLmlzQWN0aXZlKCkgJiYgZGlyZWN0aW9uID09PSAnYXNjJykgPyAnZGVzYycgOiAnYXNjJ1xuICAgIGNvbnN0IHNvcnRlZEJ5SWNvbiA9IGBDYXJldCR7ZGlyZWN0aW9uID09PSAnYXNjJyA/ICdVcCcgOiAnRG93bid9YFxuXG4gICAgcXVlcnkuc2V0KCdkaXJlY3Rpb24nLCBvcHBvc2l0ZURpcmVjdGlvbilcbiAgICBxdWVyeS5zZXQoJ3NvcnRCeScsIHByb3BlcnR5LnByb3BlcnR5UGF0aClcblxuICAgIHJldHVybiAoXG4gICAgICA8TmF2TGluayB0bz17eyBzZWFyY2g6IHF1ZXJ5LnRvU3RyaW5nKCkgfX0gY2xhc3NOYW1lPXtjc3NDbGFzcygnU29ydExpbmsnKX0+XG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbH1cbiAgICAgICAge3RoaXMuaXNBY3RpdmUoKSA/ICg8SWNvbiBpY29uPXtzb3J0ZWRCeUljb259IGNvbG9yPVwicHJpbWFyeTEwMFwiIG1sPVwiZGVmYXVsdFwiIC8+KSA6ICcnfVxuICAgICAgPC9OYXZMaW5rPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNvcnRMaW5rKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFibGVDZWxsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBTb3J0TGluayBmcm9tICcuLi9zb3J0LWxpbmsnXG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5SGVhZGVyUHJvcHMgPSB7XG4gIHByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xuICAvKipcbiAgICogUHJvcGVydHkgd2hpY2ggc2hvdWxkIGJlIHRyZWF0ZWQgYXMgbWFpbiBwcm9wZXJ0eS5cbiAgICovXG4gIHRpdGxlUHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIC8qKlxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgZGlyZWN0aW9uLiBFaXRoZXIgJ2FzYycgb3IgJ2Rlc2MnLlxuICAgKi9cbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XG4gIC8qKlxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgZmllbGQgYnkgd2hpY2ggbGlzdCBpcyBzb3J0ZWQuXG4gICAqL1xuICBzb3J0Qnk/OiBzdHJpbmc7XG5cbiAgZGlzcGxheT86IHN0cmluZyB8IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBjb25zdCBQcm9wZXJ0eUhlYWRlcjogUmVhY3QuRkM8UHJvcGVydHlIZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgdGl0bGVQcm9wZXJ0eSwgZGlzcGxheSB9ID0gcHJvcHNcblxuICBjb25zdCBpc01haW4gPSBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGggPT09IHRpdGxlUHJvcGVydHkucHJvcGVydHlQYXRoXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDZWxsXG4gICAgICBjbGFzc05hbWU9e2lzTWFpbiA/ICdtYWluJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgPlxuICAgICAge3Byb3BlcnR5LmlzU29ydGFibGUgPyA8U29ydExpbmsgey4uLnByb3BzfSAvPiA6IHByb3BlcnR5LmxhYmVsfVxuICAgIDwvVGFibGVDZWxsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5SGVhZGVyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGVja0JveCwgVGFibGVIZWFkLCBUYWJsZVJvdywgVGFibGVDZWxsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUHJvcGVydHlIZWFkZXIgZnJvbSAnLi9wcm9wZXJ0eS1oZWFkZXInXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL3V0aWxzL2Rpc3BsYXknXG5cbi8qKlxuICogQG1lbWJlcm9mIFJlY29yZHNUYWJsZUhlYWRlclxuICogQGFsaWFzIFJlY29yZHNUYWJsZUhlYWRlclByb3BzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZHNUYWJsZUhlYWRlclByb3BzID0ge1xuICAvKipcbiAgICogUHJvcGVydHkgd2hpY2ggc2hvdWxkIGJlIHRyZWF0ZWQgYXMgYSBUaXRsZSBQcm9wZXJ0eVxuICAgKi9cbiAgdGl0bGVQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcbiAgLyoqXG4gICAqIEFsbCBwcm9wZXJ0aWVzIHdoaWNoIHNob3VsZCBiZSBwcmVzZW50ZWRcbiAgICovXG4gIHByb3BlcnRpZXM6IEFycmF5PEJhc2VQcm9wZXJ0eUpTT04+O1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGJlIG1hcmtlZCBhcyBjdXJyZW50bHkgc29ydGVkIGJ5XG4gICAqL1xuICBzb3J0Qnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTb3J0IGRpcmVjdGlvblxuICAgKi9cbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGludm9rZWQgd2hlbiBjaGVja2JveCBpcyBjbGlja2VkLiBJZiBnaXZlbiBleHRyYSBjb2x1bW5cbiAgICogd2l0aCBjaGVja2JveCB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBvblNlbGVjdEFsbD86ICgpID0+IGFueTtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBcImJ1bGtcIiBjaGVja2JveCBzaG91bGQgYmUgY2hlY2tlZFxuICAgKi9cbiAgc2VsZWN0ZWRBbGw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFByaW50cyBgdGhlYWRgIHNlY3Rpb24gZm9yIHRhYmxlIHdpdGggcmVjb3Jkcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IFJlY29yZHNUYWJsZUhlYWRlciB9IGZyb20gJ2FkbWluLWJybydcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICogQGV4YW1wbGUgPGNhcHRpb24+TGlzdCB3aXRoIDIgcHJvcGVydGllczwvY2FwdGlvbj5cbiAqIGNvbnN0IHByb3BlcnRpZXMgPSBbe1xuICogICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICogICBuYW1lOiAnZmlyc3ROYW1lJyxcbiAqICAgaXNTb3J0YWJsZTogdHJ1ZSxcbiAqIH0sIHtcbiAqICAgbGFiZWw6ICdMYXN0IE5hbWUnLFxuICogICBuYW1lOiAnbGFzdE5hbWUnLFxuICogfV1cbiAqIHJldHVybiAoXG4gKiA8Qm94IHB5PVwieGxcIj5cbiAqICAgPFRhYmxlPlxuICogICAgPFJlY29yZHNUYWJsZUhlYWRlclxuICogICAgICBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfVxuICogICAgICB0aXRsZVByb3BlcnR5PXtwcm9wZXJ0aWVzWzBdfVxuICogICAgICBzb3J0Qnk9eydmaXJzdE5hbWUnfVxuICogICAgICBkaXJlY3Rpb249eydhc2MnfVxuICogICAgLz5cbiAqICAgIDxUYWJsZUJvZHk+XG4gKiAgICAgIDxUYWJsZVJvdz5cbiAqICAgICAgICA8VGFibGVDZWxsPkpvaG48L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPkRvZTwvVGFibGVDZWxsPlxuICogICAgICAgIDxUYWJsZUNlbGw+PC9UYWJsZUNlbGw+XG4gKiAgICAgIDwvVGFibGVSb3c+XG4gKiAgICAgIDxUYWJsZVJvdz5cbiAqICAgICAgICA8VGFibGVDZWxsPk1heDwvVGFibGVDZWxsPlxuICogICAgICAgIDxUYWJsZUNlbGw+S29kYWx5PC9UYWJsZUNlbGw+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cbiAqICAgICAgPC9UYWJsZVJvdz5cbiAqICAgIDwvVGFibGVCb2R5PlxuICogICA8L1RhYmxlPlxuICogPC9Cb3g+XG4gKiApXG4gKi9cbmV4cG9ydCBjb25zdCBSZWNvcmRzVGFibGVIZWFkZXI6IFJlYWN0LkZDPFJlY29yZHNUYWJsZUhlYWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGVQcm9wZXJ0eSwgcHJvcGVydGllcyxcbiAgICBzb3J0QnksIGRpcmVjdGlvbixcbiAgICBvblNlbGVjdEFsbCwgc2VsZWN0ZWRBbGwgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPFRhYmxlSGVhZD5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICB7b25TZWxlY3RBbGwgPyAoXG4gICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCk6IHZvaWQgPT4gb25TZWxlY3RBbGwoKX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRBbGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAge3Byb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgICA8UHJvcGVydHlIZWFkZXJcbiAgICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXkocHJvcGVydHkuaXNUaXRsZSl9XG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgIHRpdGxlUHJvcGVydHk9e3RpdGxlUHJvcGVydHl9XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cbiAgICAgICAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8VGFibGVDZWxsIGtleT1cImFjdGlvbnNcIiBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9UYWJsZUhlYWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3Jkc1RhYmxlSGVhZGVyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvblRlc3RJZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyB1c2VBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcblxuXG4vKipcbiAqIEBhbGlhcyBBY3Rpb25CdXR0b25Qcm9wc1xuICogQG1lbWJlcm9mIEFjdGlvbkJ1dHRvblxuICovXG5leHBvcnQgdHlwZSBBY3Rpb25CdXR0b25Qcm9wcyA9IHtcbiAgLyoqIEFjdGlvbiB0byB3aGljaCBidXR0b24gc2hvdWxkIHJlZGlyZWN0ICovXG4gIGFjdGlvbjogQWN0aW9uSlNPTjtcbiAgLyoqIElkIG9mIGEgcmVzb3VyY2Ugb2YgYW4gYWN0aW9uICovXG4gIHJlc291cmNlSWQ6IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIHJlY29yZElkIGZvciBfcmVjb3JkXyBhY3Rpb24gKi9cbiAgcmVjb3JkSWQ/OiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCByZWNvcmRJZHMgZm9yIF9idWxrXyBhY3Rpb24gKi9cbiAgcmVjb3JkSWRzPzogQXJyYXk8c3RyaW5nPjtcbiAgLyoqIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gYWN0aW9uIGlzIHBlcmZvcm1lZCAqL1xuICBhY3Rpb25QZXJmb3JtZWQ/OiAoYWN0aW9uOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgQnV0dG9uIHdoaWNoIHJlZGlyZWN0cyB0byBnaXZlbiBhY3Rpb25cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IEFjdGlvbkJ1dHRvbiB9IGZyb20gJ2FkbWluLWJybydcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgQWN0aW9uQnV0dG9uOiBSZWFjdC5GQzxBY3Rpb25CdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgYWN0aW9uLCBhY3Rpb25QZXJmb3JtZWQsIHJlc291cmNlSWQsIHJlY29yZElkLCByZWNvcmRJZHMgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBocmVmLCBoYW5kbGVDbGljayB9ID0gdXNlQWN0aW9uKGFjdGlvbiwge1xuICAgIHJlc291cmNlSWQsIHJlY29yZElkLCByZWNvcmRJZHMsXG4gIH0sIGFjdGlvblBlcmZvcm1lZClcblxuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBmaXJzdENoaWxkID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbMF1cblxuICBpZiAoIWZpcnN0Q2hpbGRcbiAgICB8fCB0eXBlb2YgZmlyc3RDaGlsZCA9PT0gJ3N0cmluZydcbiAgICB8fCB0eXBlb2YgZmlyc3RDaGlsZCA9PT0gJ251bWJlcidcbiAgICB8fCB0eXBlb2YgZmlyc3RDaGlsZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25CdXR0b24gaGFzIHRvIGhhdmUgb25lIGNoaWxkJylcbiAgfVxuXG4gIGNvbnN0IFdyYXBwZWRFbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGZpcnN0Q2hpbGQgYXMgUmVhY3RFbGVtZW50PGFueT4sIHtcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAnZGF0YS10ZXN0aWQnOiBidWlsZEFjdGlvblRlc3RJZChhY3Rpb24pLFxuICAgIGhyZWYsXG4gIH0pXG5cblxuICByZXR1cm4gV3JhcHBlZEVsZW1lbnRcbn1cblxuLy8gVE9ETyAtIHJlbW92ZSB0aGlzIGhhY2tcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgQnV0dG9uLCBJY29uLCBJbmZvQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uJ1xuXG5leHBvcnQgdHlwZSBOb1JlY29yZHNQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuY29uc3QgTm9SZWNvcmRzT3JpZ2luYWw6IFJlYWN0LkZDPE5vUmVjb3Jkc1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiwgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IGNhbkNyZWF0ZSA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSAnbmV3JylcblxuICByZXR1cm4gKFxuICAgIDxJbmZvQm94IHRpdGxlPXt0cmFuc2xhdGVNZXNzYWdlKCdub1JlY29yZHMnLCByZXNvdXJjZS5pZCl9PlxuICAgICAgPFRleHQgbWI9XCJ4eGxcIj5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ25vUmVjb3Jkc0luUmVzb3VyY2UnLCByZXNvdXJjZS5pZCl9XG4gICAgICA8L1RleHQ+XG4gICAgICB7Y2FuQ3JlYXRlID8gKFxuICAgICAgICA8QWN0aW9uQnV0dG9uIGFjdGlvbj17Y2FuQ3JlYXRlfSByZXNvdXJjZUlkPXtyZXNvdXJjZS5pZH0+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cIkFkZFwiIC8+XG4gICAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdjcmVhdGVGaXJzdFJlY29yZCcsIHJlc291cmNlLmlkKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgICApIDogJyd9XG4gICAgPC9JbmZvQm94PlxuICApXG59XG5cbi8vIFRoaXMgaGFjayBwcmV2ZW50cyByb2xsdXAgZnJvbSB0aHJvd2luZyBhbiBlcnJvclxuY29uc3QgTm9SZWNvcmRzID0gYWxsb3dPdmVycmlkZShOb1JlY29yZHNPcmlnaW5hbCwgJ05vUmVjb3JkcycpXG5cbmV4cG9ydCB7IE5vUmVjb3JkcyB9XG5leHBvcnQgZGVmYXVsdCBOb1JlY29yZHNcbiIsImltcG9ydCB7IEFjdGlvbkpTT04sIFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzID0gKHJlY29yZHM6IEFycmF5PFJlY29yZEpTT04+KTogQXJyYXk8QWN0aW9uSlNPTj4gPT4ge1xuICBjb25zdCBhY3Rpb25zID0gT2JqZWN0LnZhbHVlcyhyZWNvcmRzLnJlZHVjZSgobWVtbywgcmVjb3JkKSA9PiAoe1xuICAgIC4uLm1lbW8sXG4gICAgLi4ucmVjb3JkLmJ1bGtBY3Rpb25zLnJlZHVjZSgoYWN0aW9uc01lbW8sIGFjdGlvbikgPT4gKHtcbiAgICAgIC4uLmFjdGlvbnNNZW1vLFxuICAgICAgW2FjdGlvbi5uYW1lXTogYWN0aW9uLFxuICAgIH0pLCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBBY3Rpb25KU09OPiksXG4gIH0pLCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBBY3Rpb25KU09OPikpXG4gIHJldHVybiBhY3Rpb25zXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYmxlQ2FwdGlvbiwgVGl0bGUsIEJ1dHRvbkdyb3VwLCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciwgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzIGZyb20gJy4vdXRpbHMvZ2V0LWJ1bGstYWN0aW9ucy1mcm9tLXJlY29yZHMnXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBhY3Rpb25zVG9CdXR0b25Hcm91cCB9IGZyb20gJy4uL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAnXG5cbnR5cGUgU2VsZWN0ZWRSZWNvcmRzUHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIHNlbGVjdGVkUmVjb3Jkcz86IEFycmF5PFJlY29yZEpTT04+O1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0ZWRSZWNvcmRzOiBSZWFjdC5GQzxTZWxlY3RlZFJlY29yZHNQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgc2VsZWN0ZWRSZWNvcmRzIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKClcblxuICBpZiAoIXNlbGVjdGVkUmVjb3JkcyB8fCAhc2VsZWN0ZWRSZWNvcmRzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBwYXJhbXMgPSB7IHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZHM6IHNlbGVjdGVkUmVjb3Jkcy5tYXAocmVjb3JkcyA9PiByZWNvcmRzLmlkKSB9XG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2xpY2sgPSAoZXZlbnQsIHNvdXJjZUFjdGlvbjogQWN0aW9uSlNPTik6IHZvaWQgPT4gKFxuICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcbiAgICAgIGFjdGlvbjogc291cmNlQWN0aW9uLFxuICAgICAgcGFyYW1zLFxuICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgIH0pKGV2ZW50KVxuICApXG5cbiAgY29uc3QgYnVsa0J1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XG4gICAgYWN0aW9uczogZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyhzZWxlY3RlZFJlY29yZHMpLFxuICAgIHBhcmFtcyxcbiAgICBoYW5kbGVDbGljazogaGFuZGxlQWN0aW9uQ2xpY2ssXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDYXB0aW9uPlxuICAgICAgPEJveCBmbGV4IHB5PVwic21cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxUaXRsZSBtcj1cImxnXCI+XG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdzZWxlY3RlZFJlY29yZHMnLCByZXNvdXJjZS5pZCwgeyBzZWxlY3RlZDogc2VsZWN0ZWRSZWNvcmRzLmxlbmd0aCB9KX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbVwiIHJvdW5kZWQgYnV0dG9ucz17YnVsa0J1dHRvbnN9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L1RhYmxlQ2FwdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZFJlY29yZHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIExvYWRlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFJlY29yZEluTGlzdCBmcm9tICcuL3JlY29yZC1pbi1saXN0J1xuaW1wb3J0IFJlY29yZHNUYWJsZUhlYWRlciBmcm9tICcuL3JlY29yZHMtdGFibGUtaGVhZGVyJ1xuaW1wb3J0IE5vUmVjb3JkcyBmcm9tICcuL25vLXJlY29yZHMnXG5cblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBTZWxlY3RlZFJlY29yZHMgZnJvbSAnLi9zZWxlY3RlZC1yZWNvcmRzJ1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuLyoqXG4gKiBAYWxpYXMgUmVjb3Jkc1RhYmxlUHJvcHNcbiAqIEBtZW1iZXJvZiBSZWNvcmRzVGFibGVcbiAqL1xuZXhwb3J0IHR5cGUgUmVjb3Jkc1RhYmxlUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBSZXNvdXJjZSB3aGljaCB0eXBlIHJlY29yZHMgYXJlIHJlbmRlcmVkLiBCYXNlIG9uIHRoYXQgd2UgZGVmaW5lIHdoaWNoIGNvbHVtbnMgc2hvdWxkIGJlIHNlZW4uXG4gICAqL1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICAvKipcbiAgICogQXJyYXkgb2YgcmVjb3JkcyBzZWVuIGluIHRoZSB0YWJsZVxuICAgKi9cbiAgcmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGludm9rZWQgd2hlbiBzb21lb25lIHBlcmZvcm1zIGFjdGlvbiB3aXRob3V0IGNvbXBvbmVudCBvbiBhIGdpdmVuIHJlY29yZC5cbiAgICogQWN0aW9uIHdpdGhvdXQgY29tcG9uZW50IGlzIGEgYGRlbGV0ZWAgYWN0aW9uIC0geW91IG1pZ2h0IHdhbnQgdG8gcmVmcmVzaCB0aGUgbGlzdCBhZnRlciB0aGF0XG4gICAqL1xuICBhY3Rpb25QZXJmb3JtZWQ/OiAocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiBhbnk7XG4gIC8qKiBkZWZhdWx0IHNvcnQgYnkgY29sdW1uICovXG4gIHNvcnRCeT86IHN0cmluZztcbiAgLyoqIHNvcnQgZGlyZWN0aW9uICovXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAvKiogaW5kaWNhdGVzIGlmIHRoZSB0YWJsZSBzaG91bGQgYmUgaW4gbG9hZGluZyBzdGF0ZSAqL1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xuICAvKiogbGlzdCBvZiBzZWxlY3RlZCByZWNvcmRzICovXG4gIHNlbGVjdGVkUmVjb3Jkcz86IEFycmF5PFJlY29yZEpTT04+O1xuICAvKiogaGFuZGxlciBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiByZWNvcmQgaXMgc2VsZWN0ZWQgKi9cbiAgb25TZWxlY3Q/OiAocmVjb3JkOiBSZWNvcmRKU09OKSA9PiBhbnk7XG4gIC8qKiBoYW5kbGVyIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIGFsbCBpdGVtcyBhcmUgc2VsZWN0ZWQgKi9cbiAgb25TZWxlY3RBbGw/OiAoKSA9PiBhbnk7XG59XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUmVuZGVycyBhbiBlbnRpcmUgcmVjb3JkcyB0YWJsZS4gVG8gZmlsbCB0aGUgZGF0YSB5b3UgbWlnaHQgbmVlZDpcbiAqXG4gKiAtIHtAbGluayB1c2VSZWNvcmRzfSBhbmRcbiAqIC0ge0BsaW5rIHVzZVNlbGVjdGVkUmVjb3Jkc30gaG9va3NcbiAqXG4gKiBzbyBtYWtlIHN1cmUgdG8gc2VlIGF0IHRoZSBkb2N1bWVudGF0aW9uIHBhZ2VzIGZvciBib3RoIG9mIHRoZW1cbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICovXG5leHBvcnQgY29uc3QgUmVjb3Jkc1RhYmxlOiBSZWFjdC5GQzxSZWNvcmRzVGFibGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlc291cmNlLCByZWNvcmRzLFxuICAgIGFjdGlvblBlcmZvcm1lZCwgc29ydEJ5LFxuICAgIGRpcmVjdGlvbiwgaXNMb2FkaW5nLFxuICAgIG9uU2VsZWN0LCBzZWxlY3RlZFJlY29yZHMsXG4gICAgb25TZWxlY3RBbGwsXG4gIH0gPSBwcm9wc1xuICBpZiAoIXJlY29yZHMubGVuZ3RoKSB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuICg8TG9hZGVyIC8+KVxuICAgIH1cbiAgICByZXR1cm4gKDxOb1JlY29yZHMgcmVzb3VyY2U9e3Jlc291cmNlfSAvPilcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkQWxsID0gc2VsZWN0ZWRSZWNvcmRzICYmICEhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiAoXG4gICAgc2VsZWN0ZWRSZWNvcmRzLmZpbmQoc2VsZWN0ZWQgPT4gc2VsZWN0ZWQuaWQgPT09IHJlY29yZC5pZClcbiAgKSlcblxuICBjb25zdCByZWNvcmRzSGF2ZUJ1bGtBY3Rpb24gPSAhIXJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmJ1bGtBY3Rpb25zLmxlbmd0aClcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZT5cbiAgICAgIDxTZWxlY3RlZFJlY29yZHNcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICBzZWxlY3RlZFJlY29yZHM9e3NlbGVjdGVkUmVjb3Jkc31cbiAgICAgIC8+XG4gICAgICA8UmVjb3Jkc1RhYmxlSGVhZGVyXG4gICAgICAgIHByb3BlcnRpZXM9e3Jlc291cmNlLmxpc3RQcm9wZXJ0aWVzfVxuICAgICAgICB0aXRsZVByb3BlcnR5PXtyZXNvdXJjZS50aXRsZVByb3BlcnR5fVxuICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbiAgICAgICAgc29ydEJ5PXtzb3J0Qnl9XG4gICAgICAgIG9uU2VsZWN0QWxsPXtyZWNvcmRzSGF2ZUJ1bGtBY3Rpb24gPyBvblNlbGVjdEFsbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgc2VsZWN0ZWRBbGw9e3NlbGVjdGVkQWxsfVxuICAgICAgLz5cbiAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gKFxuICAgICAgICAgIDxSZWNvcmRJbkxpc3RcbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICBhY3Rpb25QZXJmb3JtZWQ9e2FjdGlvblBlcmZvcm1lZH1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgICAgaXNTZWxlY3RlZD17XG4gICAgICAgICAgICAgIHNlbGVjdGVkUmVjb3JkcyAmJiAhIXNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlQm9keT5cbiAgICA8L1RhYmxlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZHNUYWJsZVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBQYWdpbmF0aW9uLCBUZXh0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBSZWNvcmRzVGFibGUgZnJvbSAnLi4vYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgdXNlUmVjb3JkcyBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3Jkcy91c2UtcmVjb3JkcydcbmltcG9ydCB1c2VTZWxlY3RlZFJlY29yZHMgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXNlbGVjdGVkLXJlY29yZHMvdXNlLXNlbGVjdGVkLXJlY29yZHMnXG5pbXBvcnQgeyBSRUZSRVNIX0tFWSB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPEFjdGlvblByb3BzPiA9ICh7IHJlc291cmNlLCBzZXRUYWcgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcmVjb3JkcyxcbiAgICBsb2FkaW5nLFxuICAgIGRpcmVjdGlvbixcbiAgICBzb3J0QnksXG4gICAgcGFnZSxcbiAgICB0b3RhbCxcbiAgICBmZXRjaERhdGEsXG4gICAgcGVyUGFnZSxcbiAgfSA9IHVzZVJlY29yZHMocmVzb3VyY2UuaWQpXG4gIGNvbnN0IHtcbiAgICBzZWxlY3RlZFJlY29yZHMsXG4gICAgaGFuZGxlU2VsZWN0LFxuICAgIGhhbmRsZVNlbGVjdEFsbCxcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMsXG4gIH0gPSB1c2VTZWxlY3RlZFJlY29yZHMocmVjb3JkcylcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXRUYWcpIHtcbiAgICAgIHNldFRhZyh0b3RhbC50b1N0cmluZygpKVxuICAgIH1cbiAgfSwgW3RvdGFsXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbXSlcbiAgfSwgW3Jlc291cmNlLmlkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICAgIGlmIChzZWFyY2guZ2V0KFJFRlJFU0hfS0VZKSkge1xuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFtdKVxuICAgIH1cbiAgfSwgW2xvY2F0aW9uLnNlYXJjaF0pXG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uUGVyZm9ybWVkID0gKCk6IGFueSA9PiBmZXRjaERhdGEoKVxuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb25DaGFuZ2UgPSAocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgc2VhcmNoLnNldCgncGFnZScsIHBhZ2VOdW1iZXIudG9TdHJpbmcoKSlcbiAgICBoaXN0b3J5LnB1c2goeyBzZWFyY2g6IHNlYXJjaC50b1N0cmluZygpIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XG4gICAgICA8UmVjb3Jkc1RhYmxlXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cbiAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXtoYW5kbGVBY3Rpb25QZXJmb3JtZWR9XG4gICAgICAgIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9XG4gICAgICAgIG9uU2VsZWN0QWxsPXtoYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgIHNlbGVjdGVkUmVjb3Jkcz17c2VsZWN0ZWRSZWNvcmRzfVxuICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbiAgICAgICAgc29ydEJ5PXtzb3J0Qnl9XG4gICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICAgIC8+XG4gICAgICA8VGV4dCBtdD1cInhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnaW5hdGlvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBMaXN0IGFzIGRlZmF1bHQsXG4gIExpc3QsXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZE5vdGljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYWRkLW5vdGljZSdcblxuLyoqXG4gKiBOb3RpY2VNZXNzYWdlIHdoaWNoIGNhbiBiZSBwcmVzZW50ZWQgYXMgYSBcIlRvYXN0XCIgbWVzc2FnZS5cbiAqIEBhbGlhcyBOb3RpY2VNZXNzYWdlXG4gKiBAbWVtYmVyb2Ygd2l0aE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBOb3RpY2VNZXNzYWdlID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHR5cGU/OiAnc3VjY2VzcycgfCAnZXJyb3InO1xufVxuXG5cbi8qKlxuICogQWRkaXRpb25hbCBwcm9wcyB3aGljaCBhcmUgcGFzc2VkIHRvIHlvdXIgY29tcG9uZW50XG4gKiBAYWxpYXMgQWRkTm90aWNlUHJvcHNcbiAqIEBtZW1iZXJvZiB3aXRoTm90aWNlXG4gKi9cbmV4cG9ydCB0eXBlIEFkZE5vdGljZVByb3BzID0ge1xuICAvLyBGdW5jdGlvbiB0cmlnZ2VyaW5nIG5vdGljZSBtZXNzYWdlc1xuICBhZGROb3RpY2U6IChub3RpY2U6IE5vdGljZU1lc3NhZ2UpID0+IHZvaWQ7XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogQWRkTm90aWNlUHJvcHMgPT4gKHtcbiAgYWRkTm90aWNlOiAobm90aWNlOiBOb3RpY2VNZXNzYWdlKTogdm9pZCA9PiBkaXNwYXRjaChhZGROb3RpY2Uobm90aWNlKSksXG59KVxuXG4vKipcbiAqIEhpZ2hlciBPcmRlciBDb21wb25lbnQgd2hpY2ggYWxsb3dzIHlvdSB0byBwb3N0IG5vdGljZSBtZXNzYWdlcyBmcm9tIHlvdXIgY29tcG9uZW50c1xuICpcbiAqIEl0IGdpdmVzIHlvdSB0aGUgYWRkaXRpb25hbCBwcm9wOiBgYWRkTm90aWNlKG5vdGljZU1lc3NhZ2UpYCB0YWtpbmcge0BsaW5rIE5vdGljZU1lc3NhZ2V9LlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHdpdGhOb3RpY2UgfSBmcm9tICdhZG1pbi1icm8vY29yZSdcbiAqXG4gKiBjb25zdCBNWV9NRVNTQUdFID0ge1xuICogICBtZXNzYWdlOiAnSSBhbSB0b2FzdCBtZXNzYWdlJyxcbiAqICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICogfVxuICogY29uc3QgTXlDdXN0b21Db21wb25lbnQgPSAoeyBhZGROb3RpY2UgfSkgPT4ge1xuICogICByZXR1cm4gKFxuICogICAgIDxhIG9uQ2xpY2s9eygpID0+IGFkZE5vdGljZShNWV9NRVNTQUdFKX0+Q2xpY2sgTWU8L2E+XG4gKiAgIClcbiAqIH1cbiAqIGV4cG9ydCBkZWZhdWx0IHdpdGhOb3RpY2UoTXlDdXN0b21Db21wb25lbnQpXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgSE9DXG4gKi9cbmNvbnN0IHdpdGhOb3RpY2UgPSBDb21wb25lbnQgPT4gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbXBvbmVudClcblxuZXhwb3J0IHtcbiAgd2l0aE5vdGljZSBhcyBkZWZhdWx0LFxuICB3aXRoTm90aWNlLFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZVJvdywgVGFibGVDZWxsLCBUZXh0LFxuICBEcmF3ZXJDb250ZW50LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgTWVzc2FnZUJveCwgSWNvbixcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB3aXRoTm90aWNlLCB7IEFkZE5vdGljZVByb3BzIH0gZnJvbSAnLi4vLi4vaG9jL3dpdGgtbm90aWNlJ1xuaW1wb3J0IHsgYXBwZW5kRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcblxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcblxuLyoqXG4gKiBAbmFtZSBTaG93QWN0aW9uXG4gKiBAY2F0ZWdvcnkgQWN0aW9uc1xuICogQGRlc2NyaXB0aW9uIFNob3dzIGEgZ2l2ZW4gcmVjb3JkLlxuICogQGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQnVsa0RlbGV0ZTogUmVhY3QuRkM8QWN0aW9uUHJvcHMgJiBBZGROb3RpY2VQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHJlY29yZHMsIGFjdGlvbiwgYWRkTm90aWNlLCBoaXN0b3J5IH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGlmICghcmVjb3Jkcykge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ3BpY2tTb21lRmlyc3RUb1JlbW92ZScsIHJlc291cmNlLmlkKX1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgcmVjb3JkSWRzID0gcmVjb3Jkcy5tYXAociA9PiByLmlkKVxuICAgIGFwaS5idWxrQWN0aW9uKHtcbiAgICAgIHJlc291cmNlSWQ6IHJlc291cmNlLmlkLFxuICAgICAgYWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsXG4gICAgICByZWNvcmRJZHMsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB9KS50aGVuKCgocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5ub3RpY2UpIHtcbiAgICAgICAgYWRkTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAvLyBidWxrIGZ1bmN0aW9uIGhhdmUgcmVjb3JkSWRzIGluIHRoZSBVUkwgc28gaXQgaGFzIHRvIGJlIHN0cmlwcGVkIGJlZm9yZSByZWRpcmVjdFxuICAgICAgICBzZWFyY2guZGVsZXRlKCdyZWNvcmRJZHMnKVxuICAgICAgICBoaXN0b3J5LnB1c2goYXBwZW5kRm9yY2VSZWZyZXNoKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwsIHNlYXJjaC50b1N0cmluZygpKSlcbiAgICAgIH1cbiAgICB9KSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgYWRkTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZSgnYnVsa0RlbGV0ZUVycm9yJywgcmVzb3VyY2UuaWQpLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHRocm93IGVycm9yXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPERyYXdlckNvbnRlbnQ+XG4gICAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgb21pdEFjdGlvbnMgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICAgIDxNZXNzYWdlQm94XG4gICAgICAgICAgbWI9XCJ4eGxcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgIG1lc3NhZ2U9e3RyYW5zbGF0ZU1lc3NhZ2UoJ3RoZXNlUmVjb3Jkc1dpbGxCZVJlbW92ZWQnLCByZXNvdXJjZS5pZCwgeyBjb3VudDogcmVjb3Jkcy5sZW5ndGggfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3JlY29yZC5pZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9e3Jlc291cmNlLnRpdGxlUHJvcGVydHl9XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0RyYXdlckNvbnRlbnQ+XG4gICAgICA8RHJhd2VyRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIHtsb2FkaW5nID8gKDxJY29uIGljb249XCJGYWRlXCIgc3BpbiAvPikgOiBudWxsfVxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2NvbmZpcm1SZW1vdmFsTWFueScsIHJlc291cmNlLmlkLCB7IGNvdW50OiByZWNvcmRzLmxlbmd0aCB9KX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IEZvcm1hdHRlZEJ1bGtEZWxldGUgPSB3aXRoTm90aWNlKHdpdGhSb3V0ZXIoQnVsa0RlbGV0ZSkpXG5cbmV4cG9ydCB7XG4gIEZvcm1hdHRlZEJ1bGtEZWxldGUgYXMgZGVmYXVsdCxcbiAgRm9ybWF0dGVkQnVsa0RlbGV0ZSBhcyBCdWxrRGVsZXRlLFxufVxuIiwiaW1wb3J0IHsgTmV3IH0gZnJvbSAnLi9uZXcnXG5pbXBvcnQgeyBFZGl0IH0gZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vc2hvdydcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBCdWxrRGVsZXRlIH0gZnJvbSAnLi9idWxrLWRlbGV0ZSdcblxuZXhwb3J0ICogZnJvbSAnLi9uZXcnXG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmV4cG9ydCAqIGZyb20gJy4vZWRpdCdcbmV4cG9ydCAqIGZyb20gJy4vc2hvdydcbmV4cG9ydCAqIGZyb20gJy4vbGlzdCdcbmV4cG9ydCAqIGZyb20gJy4vYnVsay1kZWxldGUnXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcbiAgbmV3OiBOZXcsXG4gIGVkaXQ6IEVkaXQsXG4gIHNob3c6IFNob3csXG4gIGxpc3Q6IExpc3QsXG4gIGJ1bGtEZWxldGU6IEJ1bGtEZWxldGUsXG59XG4iLCJleHBvcnQgY29uc3QgRE9DUyA9ICdodHRwczovL2FkbWluYnJvLmNvbSdcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBVEhTID0ge1xuICByb290UGF0aDogJy9hZG1pbicsXG4gIGxvZ291dFBhdGg6ICcvYWRtaW4vbG9nb3V0JyxcbiAgbG9naW5QYXRoOiAnL2FkbWluL2xvZ2luJyxcbn1cblxuLyogY3NwZWxsOiBkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IEFETUlOX0JST19UTVBfRElSID0gJy5hZG1pbmJybydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IE1lc3NhZ2VCb3gsIExpbmsgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vZXJyb3ItYm91bmRhcnknXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IERPQ1MgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLnByb3BzJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcblxuZGVjbGFyZSBjb25zdCBBZG1pbkJybzoge1xuICBVc2VyQ29tcG9uZW50czogQXJyYXk8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbGwgdGhlIGRlZmF1bHQgYW5kIGN1c3RvbSBhY3Rpb25zIGZvciBib3RoIHRoZSBSZXNvdXJjZSBhbmQgdGhlIFJlY29yZC5cbiAqXG4gKiBJdCBwYXNzZXMgYWxsIHByb3BzIGRvd24gdG8gdGhlIGFjdHVhbCBBY3Rpb24gY29tcG9uZW50LlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgeW91ciBvd24gYWN0aW9uczpcbiAqIGBgYFxuICogLy8gQWRtaW5Ccm8gb3B0aW9uc1xuICogY29uc3QgQWRtaW5Ccm9PcHRpb25zID0ge1xuICogICByZXNvdXJjZXM6IFtcbiAqICAgICAgcmVzb3VyY2UsXG4gKiAgICAgIG9wdGlvbnM6IHtcbiAqICAgICAgICBhY3Rpb25zOiB7XG4gKiAgICAgICAgICAgbXlOZXdBY3Rpb246IHtcbiAqICAgICAgICAgICAgIGxhYmVsOiAnYW1hemluZyBhY3Rpb24nLFxuICogICAgICAgICAgICAgaWNvbjogJ0FkZCcsXG4gKiAgICAgICAgICAgICBpblZpc2libGU6IChyZXNvdXJjZSwgcmVjb3JkKSA9PiByZWNvcmQucGFyYW0oJ2VtYWlsJykgIT09ICcnLFxuICogICAgICAgICAgICAgYWN0aW9uVHlwZTogJ3JlY29yZCcsXG4gKiAgICAgICAgICAgICBjb21wb25lbnQ6IEFkbWluQnJvLmJ1bmRsZSgnLi9teS1uZXctYWN0aW9uJyksXG4gKiAgICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdCwgcmVzcG9uc2UsIGRhdGEpID0+IHtcbiAqICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9XG4gKiAgIF1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIGBgYFxuICogLy8gLi9teS1uZXctYWN0aW9uLmpzeFxuICogaW1wb3J0IHsgQm94IH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IE15TmV3QWN0aW9uID0gKHByb3BzKSA9PiB7XG4gKiAgIGNvbnN0IHsgcmVzb3VyY2UsIGFjdGlvbiwgcmVjb3JkIH0gPSBwcm9wc1xuICogICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcHJvcHMgYW5kIHJlbmRlciBhY3Rpb25cbiAqICAgcmV0dXJuIChcbiAqICAgICA8Qm94PlNvbWUgQWN0aW9uIENvbnRlbnQ8L0JveD5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQG5hbWUgQmFzZUFjdGlvbkNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCYXNlQWN0aW9uQ29tcG9uZW50OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgYWN0aW9uLCByZWNvcmQsIHJlY29yZHMsIHNldFRhZyB9ID0gcHJvcHNcbiAgY29uc3QgZG9jdW1lbnRhdGlvbkxpbmsgPSBbRE9DUywgJ0Jhc2VBY3Rpb24uaHRtbCddLmpvaW4oJy8nKVxuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGxldCBBY3Rpb24gPSBhY3Rpb25zW2FjdGlvbi5uYW1lXVxuXG4gIGlmIChhY3Rpb24uY29tcG9uZW50KSB7XG4gICAgQWN0aW9uID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbYWN0aW9uLmNvbXBvbmVudF1cbiAgfVxuXG4gIGlmIChBY3Rpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxBY3Rpb25cbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cbiAgICAgICAgICBzZXRUYWc9e3NldFRhZ31cbiAgICAgICAgLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cbiAgcmV0dXJuIEFjdGlvbiB8fCAoXG4gICAgPE1lc3NhZ2VCb3ggdmFyaWFudD1cImRhbmdlclwiPlxuICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ25vQWN0aW9uQ29tcG9uZW50Jyl9XG4gICAgICA8VHJhbnMga2V5PVwibWVzc2FnZXMuYnV0dG9ucy5zZWVUaGVEb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIFNlZTpcbiAgICAgICAgPExpbmsgbWw9XCJkZWZhdWx0XCIgaHJlZj17ZG9jdW1lbnRhdGlvbkxpbmt9PnRoZSBkb2N1bWVudGF0aW9uPC9MaW5rPlxuICAgICAgPC9UcmFucz5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUFjdGlvbkNvbXBvbmVudFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVzc2FnZUJveCwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbi8qKlxuICogQG1lbWJlcm9mIEVycm9yTWVzc2FnZUJveFxuICogQGFsaWFzIEVycm9yTWVzc2FnZUJveFByb3BzXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yTWVzc2FnZUJveFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB0ZXN0SWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGNsYXNzXG4gKiBQcmludHMgZXJyb3IgbWVzc2FnZVxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKiBAZXhhbXBsZVxuICogcmV0dXJuIChcbiAqIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9eydTb21lIGVycm9yJ30+XG4gKiAgIDxwPlRleHQgYmVsb3cgdGhlIHRpdGxlPC9wPlxuICogPC9FcnJvck1lc3NhZ2VCb3g+XG4gKiApXG4gKi9cbmNvbnN0IEVycm9yTWVzc2FnZUJveDogUmVhY3QuRkM8RXJyb3JNZXNzYWdlQm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCB0ZXN0SWQgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0gbWVzc2FnZT17dGl0bGV9PlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9SZXNvdXJjZUVycm9yOiBSZWFjdC5GQzx7cmVzb3VyY2VJZDogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9SZXNvdXJjZUVycm9yXCJcbiAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcbiAgICAgIG09XCJ4eGxcIlxuICAgID5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnZXJyb3I0MDRSZXNvdXJjZScsIHJlc291cmNlSWQsIHsgcmVzb3VyY2VJZCB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9BY3Rpb25FcnJvcjogUmVhY3QuRkM8e3Jlc291cmNlSWQ6IHN0cmluZzsgYWN0aW9uTmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9BY3Rpb25FcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0QWN0aW9uJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pfVxuICAgICAgPC9UZXh0PlxuICAgIDwvTWVzc2FnZUJveD5cbiAgKVxufVxuXG5jb25zdCBOb1JlY29yZEVycm9yOiBSZWFjdC5GQzx7XG4gIHJlc291cmNlSWQ6IHN0cmluZztcbiAgcmVjb3JkSWQ6IHN0cmluZztcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlQm94XG4gICAgICBtZXNzYWdlPVwiNDA0IC0gUEFHRSBOT1QgRk9VTkRcIlxuICAgICAgZGF0YS10ZXN0aWQ9XCJOb1JlY29yZEVycm9yXCJcbiAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcbiAgICAgIG09XCJ4eGxcIlxuICAgID5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnZXJyb3I0MDRSZWNvcmQnLCByZXNvdXJjZUlkLCB7IHJlc291cmNlSWQsIHJlY29yZElkIH0pfVxuICAgICAgPC9UZXh0PlxuICAgIDwvTWVzc2FnZUJveD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBOb1Jlc291cmNlRXJyb3IsXG4gIE5vQWN0aW9uRXJyb3IsXG4gIE5vUmVjb3JkRXJyb3IsXG4gIEVycm9yTWVzc2FnZUJveCxcbiAgRXJyb3JNZXNzYWdlQm94IGFzIGRlZmF1bHQsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIEJveFByb3BzLCBEcmF3ZXJDb250ZW50LCBEcmF3ZXJGb290ZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgJiAke0RyYXdlckNvbnRlbnR9IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHhsfTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICBcbiAgJiAke0RyYXdlckZvb3Rlcn0ge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH0gJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH07XG4gIH1cbmBcblxuY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8Qm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFyaWFudCwgY29sb3IsIC4uLnJlc3QgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFdyYXBwZXIgey4uLnJlc3R9IHZhcmlhbnQ9XCJncmV5XCIgbXg9XCJhdXRvXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWRXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgRHJhd2VyLCBERUZBVUxUX0RSQVdFUl9XSURUSCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLyoqXG4gKiBAYWxpYXMgRHJhd2VyUG9ydGFsUHJvcHNcbiAqIEBtZW1iZXJvZiBEcmF3ZXJQb3J0YWxcbiAqL1xuZXhwb3J0IHR5cGUgRHJhd2VyUG9ydGFsUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBUaGUgZHJhd2VyIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRyYXdlciB3aWR0aFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+O1xufVxuXG5jb25zdCBEUkFXRVJfUE9SVEFMX0lEID0gJ2RyYXdlclBvcnRhbCdcblxuLyoqXG4gKiBTaG93cyBhbGwgb2YgaXRzIGNoaWxkcmVuIGluIGEgRHJhd2VyIG9uIHRoZSByaWdodC5cbiAqIEluc3RlYWQgb2YgcmVuZGVyaW5nIGl0J3Mgb3duIHtAbGluayBEcmF3ZXJ9IGNvbXBvbmVudCBpdCByZXVzZXNcbiAqIHRoZSBnbG9iYWwgRHJhd2VyIHZpYSBSZWFjdCBQb3J0YWwuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBEcmF3ZXJQb3J0YWwgfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IERyYXdlclBvcnRhbDogUmVhY3QuRkM8RHJhd2VyUG9ydGFsUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHdpZHRoIH0pID0+IHtcbiAgY29uc3QgW2RyYXdlckVsZW1lbnQsIHNldERyYXdlckVsZW1lbnRdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQgfCBudWxsPihcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRFJBV0VSX1BPUlRBTF9JRCksXG4gIClcbiAgaWYgKCFkcmF3ZXJFbGVtZW50ICYmIHdpbmRvdykge1xuICAgIGNvbnN0IGlubmVyV3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IERyYXdlcldyYXBwZXIgPSAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17KHdpbmRvdyBhcyBhbnkpLlRIRU1FfT5cbiAgICAgICAgPERyYXdlciBpZD17RFJBV0VSX1BPUlRBTF9JRH0gY2xhc3NOYW1lPVwiaGlkZGVuXCIgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKVxuICAgIHJlbmRlcihEcmF3ZXJXcmFwcGVyLCBpbm5lcldyYXBwZXIsICgpID0+IHtcbiAgICAgIHNldERyYXdlckVsZW1lbnQod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERSQVdFUl9QT1JUQUxfSUQpKVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkcmF3ZXJFbGVtZW50KSB7XG4gICAgICBkcmF3ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgZHJhd2VyRWxlbWVudC5zdHlsZS53aWR0aCA9IEFycmF5LmlzQXJyYXkod2lkdGgpID8gd2lkdGhbMF0udG9TdHJpbmcoKSA6IHdpZHRoLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGRyYXdlckVsZW1lbnQuc3R5bGUud2lkdGggPSBERUZBVUxUX0RSQVdFUl9XSURUSFxuICAgICAgICBkcmF3ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKTogdm9pZCA9PiB1bmRlZmluZWRcbiAgfSwgW2RyYXdlckVsZW1lbnRdKVxuXG4gIGlmICghZHJhd2VyRWxlbWVudCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgIGNoaWxkcmVuLFxuICAgIGRyYXdlckVsZW1lbnQsXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyUG9ydGFsXG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIEJveCxcbiAgSDMsXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgRHJhd2VyLFxuICBEcmF3ZXJDb250ZW50LFxuICBEcmF3ZXJGb290ZXIsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmV4cG9ydCB0eXBlIEZpbHRlclByb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICB0b2dnbGVGaWx0ZXI6ICgpID0+IHZvaWQ7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbn1cblxudHlwZSBNYXRjaFByb3BzID0ge1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IHBhcnNlUXVlcnkgPSAobG9jYXRpb24pOiBhbnkgPT4ge1xuICBjb25zdCBmaWx0ZXI6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIHF1ZXJ5LmVudHJpZXMoKSkge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5XG4gICAgaWYgKGtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xuICAgICAgZmlsdGVyW2tleS5yZXBsYWNlKCdmaWx0ZXJzLicsICcnKV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsdGVyXG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJEcmF3ZXI6IFJlYWN0LkZDPEZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBpc1Zpc2libGUsIHRvZ2dsZUZpbHRlciB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcGVydGllcyA9IHJlc291cmNlLmZpbHRlclByb3BlcnRpZXNcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHBhcnNlUXVlcnkobG9jYXRpb24pKVxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8TWF0Y2hQcm9wcz4oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRGaWx0ZXIoe30pLCBbbWF0Y2gucGFyYW1zLnJlc291cmNlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogU3ludGhldGljRXZlbnQpOiBmYWxzZSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcltrZXldICE9PSAnJykge1xuICAgICAgICBzZWFyY2guc2V0KGBmaWx0ZXJzLiR7a2V5fWAsIGZpbHRlcltrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoLmRlbGV0ZShgZmlsdGVycy4ke2tleX1gKVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VhcmNoLnNldCgncGFnZScsICcxJylcbiAgICBoaXN0b3J5LnB1c2goYCR7aGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2gudG9TdHJpbmcoKX1gKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgcmVzZXRGaWx0ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZmlsdGVyZWRTZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgZm9yIChjb25zdCBrZXkgb2Ygc2VhcmNoLmtleXMoKSkge1xuICAgICAgaWYgKCFrZXkubWF0Y2goJ2ZpbHRlcnMuJykpIHtcbiAgICAgICAgZmlsdGVyZWRTZWFyY2guc2V0KGtleSwgc2VhcmNoLmdldChrZXkpIGFzIHN0cmluZylcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVlcnkgPSBmaWx0ZXJlZFNlYXJjaC50b1N0cmluZygpID09PSAnJyA/IGA/JHtmaWx0ZXJlZFNlYXJjaC50b1N0cmluZygpfWAgOiAnJ1xuICAgIGhpc3RvcnkucHVzaChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lICsgcXVlcnkpXG4gICAgc2V0RmlsdGVyKHt9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHByb3BlcnR5TmFtZTogc3RyaW5nIHwgUmVjb3JkSlNPTiwgdmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICgocHJvcGVydHlOYW1lIGFzIFJlY29yZEpTT04pLnBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgY2FuIG5vdCBwYXNzIFJlY29yZEpTT04gdG8gZmlsdGVycycpXG4gICAgfVxuICAgIHNldEZpbHRlcih7XG4gICAgICAuLi5maWx0ZXIsXG4gICAgICBbcHJvcGVydHlOYW1lIGFzIHN0cmluZ106IHZhbHVlLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXIgdmFyaWFudD1cImZpbHRlclwiIGlzSGlkZGVuPXshaXNWaXNpYmxlfSBhcz1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICA8SDM+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICBtcj1cImxnXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHRvZ2dsZUZpbHRlcigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJDaGV2cm9uUmlnaHRcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2ZpbHRlcnMnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvSDM+XG4gICAgICAgIDxCb3ggbXk9XCJ4M1wiPlxuICAgICAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgICB3aGVyZT1cImZpbHRlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2FwcGx5Q2hhbmdlcycsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtyZXNldEZpbHRlcn0gdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdyZXNldEZpbHRlcicsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICA8L0RyYXdlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcmF3ZXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBOb1Jlc291cmNlRXJyb3IsIE5vQWN0aW9uRXJyb3IsIE5vUmVjb3JkRXJyb3IgfSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vdXRpbHMvd3JhcHBlcidcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IHVzZU5vdGljZSwgdXNlUmVzb3VyY2UsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgRHJhd2VyUG9ydGFsIGZyb20gJy4uL2FwcC9kcmF3ZXItcG9ydGFsJ1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UsIFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL21lcmdlLXJlY29yZC1yZXNwb25zZSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmNvbnN0IFJlY29yZEFjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSB1c2VTdGF0ZTxSZWNvcmRKU09OPigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IG1hdGNoID0gdXNlUm91dGVNYXRjaDxSZWNvcmRBY3Rpb25QYXJhbXM+KClcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgeyBhY3Rpb25OYW1lLCByZWNvcmRJZCwgcmVzb3VyY2VJZCB9ID0gbWF0Y2gucGFyYW1zXG4gIGNvbnN0IHJlc291cmNlID0gdXNlUmVzb3VyY2UocmVzb3VyY2VJZClcblxuICBjb25zdCBhY3Rpb24gPSByZWNvcmQgJiYgcmVjb3JkLnJlY29yZEFjdGlvbnMuZmluZChyID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZSlcblxuICBjb25zdCBmZXRjaFJlY29yZCA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgYXBpLnJlY29yZEFjdGlvbihtYXRjaC5wYXJhbXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0UmVjb3JkKHJlc3BvbnNlLmRhdGEucmVjb3JkKVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgYWRkTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZSgnZXJyb3JGZXRjaGluZ1JlY29yZCcsIHJlc291cmNlSWQpLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHRocm93IGVycm9yXG4gICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZWNvcmQoKVxuICB9LCBbYWN0aW9uTmFtZSwgcmVjb3JkSWQsIHJlc291cmNlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvblBlcmZvcm1lZCA9IHVzZUNhbGxiYWNrKChvbGRSZWNvcmQ6IFJlY29yZEpTT04sIHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5yZWNvcmQpIHtcbiAgICAgIHNldFJlY29yZChtZXJnZVJlY29yZFJlc3BvbnNlKG9sZFJlY29yZCwgcmVzcG9uc2UgYXMgUmVjb3JkQWN0aW9uUmVzcG9uc2UpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFJlY29yZCgpXG4gICAgfVxuICB9LCBbZmV0Y2hSZWNvcmRdKVxuXG4gIGlmICghcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXG4gIH1cblxuICAvLyBXaGVuIHRoZSB1c2VyIHZpc2l0cyB0aGlzIHJvdXRlIChyZWNvcmQgYWN0aW9uKSBmcm9tIGEgZGlmZmVyZW50LCB0aGFuIHRoZSBjdXJyZW50IG9uZSwgcmVjb3JkLlxuICAvLyBJdCByZW5kZXJzIGV2ZXJ5dGhpbmcgd2l0aCBhIG5ldyByZXNvdXJjZS4gVGhlIG9sZCByZWNvcmQgcmVtYWlucyB1bnRpbCB1c2VFZmZlY3QgZmV0Y2hlcyBkYXRhXG4gIC8vIGZyb20gdGhlIEFQSS4gdGhhdCBpcyB3aHkgd2UgaGF2ZSB0byBjaGVjayBpZiB0aGUgY3VycmVudCByZWNvcmQgaGFzIGNvcnJlY3QgcmVjb3JkLmlkLlxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCB3b3VsZCBiZSB0byBzZXRSZWNvcmQodW5kZWZpbmVkKSBiZWZvcmUgdGhlIGZldGNoLCBidXQgaXQgaXMgYXN5bmMgYW5kXG4gIC8vIHdlIGNhbm5vdCBiZSBzdXJlIHRoYXQgdGhlIGNvbXBvbmVudCB3b250IGJlIHJlbmRlcmVkIChpdCB3aWxsIGJlIGF0IGxlYXN0IG9uY2UpIHdpdGggdGhlXG4gIC8vIHdyb25nIGRhdGEuXG4gIGNvbnN0IGhhc0RpZmZlcmVudFJlY29yZCA9IHJlY29yZCAmJiByZWNvcmQuaWQudG9TdHJpbmcoKSAhPT0gcmVjb3JkSWRcblxuICBpZiAobG9hZGluZyB8fCBoYXNEaWZmZXJlbnRSZWNvcmQpIHtcbiAgICBjb25zdCBhY3Rpb25Gcm9tUmVzb3VyY2UgPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG4gICAgcmV0dXJuIGFjdGlvbkZyb21SZXNvdXJjZT8uc2hvd0luRHJhd2VyID8gKDxEcmF3ZXJQb3J0YWw+PExvYWRlciAvPjwvRHJhd2VyUG9ydGFsPikgOiA8TG9hZGVyIC8+XG4gIH1cblxuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz4pXG4gIH1cblxuICBpZiAoIXJlY29yZCkge1xuICAgIHJldHVybiAoPE5vUmVjb3JkRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gcmVjb3JkSWQ9e3JlY29yZElkfSAvPilcbiAgfVxuXG4gIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmF3ZXJQb3J0YWwgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgYWN0aW9uPXthY3Rpb24gYXMgQWN0aW9uSlNPTn1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgPEFjdGlvbkhlYWRlclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXsocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKTogdm9pZCA9PiAoXG4gICAgICAgICAgaGFuZGxlQWN0aW9uUGVyZm9ybWVkKHJlY29yZCwgcmVzcG9uc2UpXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRBY3Rpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBCYXNlQWN0aW9uQ29tcG9uZW50IGZyb20gJy4uL2FwcC9iYXNlLWFjdGlvbi1jb21wb25lbnQnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgTm9SZXNvdXJjZUVycm9yLCBOb0FjdGlvbkVycm9yIH0gZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vdXRpbHMvd3JhcHBlcidcbmltcG9ydCBEcmF3ZXJQb3J0YWwgZnJvbSAnLi4vYXBwL2RyYXdlci1wb3J0YWwnXG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcbn1cblxudHlwZSBQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgUm91dGVDb21wb25lbnRQcm9wczxSZXNvdXJjZUFjdGlvblBhcmFtcz5cblxuY29uc3QgUmVzb3VyY2VBY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlcywgbWF0Y2ggfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9ID0gbWF0Y2gucGFyYW1zXG5cbiAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXMuZmluZChyID0+IHIuaWQgPT09IHJlc291cmNlSWQpXG4gIGlmICghcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXG4gIH1cbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG4gIGlmICghYWN0aW9uKSB7XG4gICAgcmV0dXJuICg8Tm9BY3Rpb25FcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBhY3Rpb25OYW1lPXthY3Rpb25OYW1lfSAvPilcbiAgfVxuXG4gIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmF3ZXJQb3J0YWwgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAvPlxuICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgIDxBY3Rpb25IZWFkZXJcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgIC8+XG4gICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcbiAgcmVzb3VyY2VzOiBzdGF0ZS5yZXNvdXJjZXMsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVzb3VyY2VBY3Rpb24pXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlUm91dGVNYXRjaCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7IEJ1bGtBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzIGZyb20gJy4uL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vdXRpbHMvd3JhcHBlcidcbmltcG9ydCB7XG4gIEFjdGlvbkhlYWRlcixcbiAgRHJhd2VyUG9ydGFsLFxuICBCYXNlQWN0aW9uQ29tcG9uZW50LFxuICBFcnJvck1lc3NhZ2VCb3gsXG4gIE5vUmVzb3VyY2VFcnJvcixcbiAgTm9BY3Rpb25FcnJvcixcbn0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIHVzZU5vdGljZSwgdXNlUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9ob29rcydcblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG50eXBlIE1hdGNoUGFyYW1zID0gUGljazxCdWxrQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZScgfCAncmVzb3VyY2VJZCc+XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG5jb25zdCBCdWxrQWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPE1hdGNoUGFyYW1zPigpXG4gIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlPEFycmF5PFJlY29yZEpTT04+PihbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSA9IG1hdGNoLnBhcmFtc1xuICBjb25zdCByZXNvdXJjZSA9IHVzZVJlc291cmNlKHJlc291cmNlSWQpXG5cbiAgY29uc3QgZmV0Y2hSZWNvcmRzID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHJlY29yZElkc1N0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoJ3JlY29yZElkcycpXG4gICAgY29uc3QgcmVjb3JkSWRzID0gcmVjb3JkSWRzU3RyaW5nID8gcmVjb3JkSWRzU3RyaW5nLnNwbGl0KCcsJykgOiBbXVxuICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgIHJldHVybiBhcGkuYnVsa0FjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWUsXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRSZWNvcmRzKHJlc3BvbnNlLmRhdGEucmVjb3JkcylcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBhZGROb3RpY2Uoe1xuICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKCdlcnJvckZldGNoaW5nUmVjb3JkcycsIHJlc291cmNlSWQpLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHRocm93IGVycm9yXG4gICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZWNvcmRzKClcbiAgfSwgW21hdGNoLnBhcmFtcy5yZXNvdXJjZUlkLCBtYXRjaC5wYXJhbXMuYWN0aW9uTmFtZV0pXG5cbiAgaWYgKCFyZXNvdXJjZSkge1xuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcbiAgfVxuXG4gIGlmICghcmVjb3JkcyAmJiAhbG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JNZXNzYWdlQm94IHRpdGxlPVwiTm8gcmVjb3Jkc1wiPlxuICAgICAgICA8cD57dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzU2VsZWN0ZWQnLCByZXNvdXJjZUlkKX08L3A+XG4gICAgICA8L0Vycm9yTWVzc2FnZUJveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBhY3Rpb24gPSBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzKHJlY29yZHMgfHwgW10pLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICBjb25zdCBhY3Rpb25Gcm9tUmVzb3VyY2UgPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG4gICAgcmV0dXJuIGFjdGlvbkZyb21SZXNvdXJjZT8uc2hvd0luRHJhd2VyID8gKDxEcmF3ZXJQb3J0YWw+PExvYWRlciAvPjwvRHJhd2VyUG9ydGFsPikgOiA8TG9hZGVyIC8+XG4gIH1cblxuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz4pXG4gIH1cblxuICBpZiAoYWN0aW9uLnNob3dJbkRyYXdlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICAgIGFjdGlvbj17YWN0aW9uIGFzIEFjdGlvbkpTT059XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAgIC8+XG4gICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgeyFhY3Rpb24/LnNob3dJbkRyYXdlciA/IChcbiAgICAgICAgPEFjdGlvbkhlYWRlclxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICkgOiAnJ31cbiAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgIGFjdGlvbj17YWN0aW9uIGFzIEFjdGlvbkpTT059XG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cbiAgICAgIC8+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bGtBY3Rpb25cbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9hcHAvZXJyb3ItYm91bmRhcnknXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgRXJyb3JNZXNzYWdlQm94IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xuXG5kZWNsYXJlIGNvbnN0IEFkbWluQnJvOiB7XG4gIFVzZXJDb21wb25lbnRzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbkNvbXBvbmVudD47XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGlzQ2xpZW50OiBib29sZWFuO1xufVxuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICBwYWdlczogUmVkdXhTdGF0ZVsncGFnZXMnXTtcbn1cblxudHlwZSBQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgUm91dGVDb21wb25lbnRQcm9wczx7XG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG59PlxuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNDbGllbnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NsaWVudDogdHJ1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwYWdlcywgbWF0Y2ggfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gbWF0Y2hcbiAgICBjb25zdCB7IHBhZ2VOYW1lIH0gPSBwYXJhbXNcbiAgICBjb25zdCB7IGlzQ2xpZW50IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IHBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLm5hbWUgPT09IHBhZ2VOYW1lKVxuXG4gICAgaWYgKCFjdXJyZW50UGFnZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIlRoZXJlIGlzIG5vIHBhZ2Ugb2YgZ2l2ZW4gbmFtZVwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUGFnZTpcbiAgICAgICAgICAgIDxiPntgIFwiJHtwYWdlTmFtZX1cIiBgfTwvYj5cbiAgICAgICAgICAgIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9FcnJvck1lc3NhZ2VCb3g+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgQ29tcG9uZW50ID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbY3VycmVudFBhZ2UuY29tcG9uZW50XVxuXG4gICAgaWYgKCFDb21wb25lbnQgfHwgIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JNZXNzYWdlQm94IHRpdGxlPVwiTm8gY29tcG9uZW50IHNwZWNpZmllZFwiPlxuICAgICAgICAgIDxwPllvdSBoYXZlIHRvIHNwZWNpZnkgY29tcG9uZW50IHdoaWNoIHdpbGwgcmVuZGVyIHRoaXMgUGFnZTwvcD5cbiAgICAgICAgPC9FcnJvck1lc3NhZ2VCb3g+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIHBhZ2VzOiBzdGF0ZS5wYWdlcyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYWdlKVxuIiwiZXhwb3J0IGRlZmF1bHQgKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKVxuICBmb3IgKGNvbnN0IGtleSBvZiBxdWVyeS5rZXlzKCkpIHtcbiAgICBpZiAoa2V5Lm1hdGNoKCdmaWx0ZXJzLicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQmFzZUFjdGlvbiBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xuaW1wb3J0IEZpbHRlckRyYXdlciBmcm9tICcuLi9hcHAvZmlsdGVyLWRyYXdlcidcbmltcG9ydCBxdWVyeUhhc0ZpbHRlciBmcm9tICcuL3V0aWxzL3F1ZXJ5LWhhcy1maWx0ZXInXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBOb1Jlc291cmNlRXJyb3IsIE5vQWN0aW9uRXJyb3IgfSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcbmltcG9ydCBWaWV3SGVscGVycywge1xuICBSZXNvdXJjZUFjdGlvblBhcmFtcywgUmVjb3JkQWN0aW9uUGFyYW1zLCBCdWxrQWN0aW9uUGFyYW1zLFxufSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8U3RyaW5naWZpZWRCdWxrPFJlc291cmNlQWN0aW9uUGFyYW1zPj5cblxudHlwZSBTdHJpbmdpZmllZEJ1bGs8VD4gPSBPbWl0PFQsICdyZWNvcmRzSWQnPiAmIHtcbiAgcmVjb3Jkc0lkcz86IHN0cmluZztcbn1cblxuY29uc3QgZ2V0QWN0aW9uID0gKHJlc291cmNlOiBSZXNvdXJjZUpTT04pOiBBY3Rpb25KU09OIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbiAgY29uc3QgcmVzb3VyY2VJZCA9ICc6cmVzb3VyY2VJZCdcbiAgY29uc3QgYWN0aW9uTmFtZSA9ICc6YWN0aW9uTmFtZSdcbiAgY29uc3QgcmVjb3JkSWQgPSAnOnJlY29yZElkJ1xuXG4gIGNvbnN0IHJlY29yZEFjdGlvblVybCA9IGgucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgcmVzb3VyY2VBY3Rpb25VcmwgPSBoLnJlc291cmNlQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCBidWxrQWN0aW9uVXJsID0gaC5idWxrQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KVxuXG4gIGNvbnN0IHJlc291cmNlQWN0aW9uTWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPFJlc291cmNlQWN0aW9uUGFyYW1zPihyZXNvdXJjZUFjdGlvblVybClcbiAgY29uc3QgcmVjb3JkQWN0aW9uTWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPFJlY29yZEFjdGlvblBhcmFtcz4ocmVjb3JkQWN0aW9uVXJsKVxuICBjb25zdCBidWxrQWN0aW9uTWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPFBpY2s8QnVsa0FjdGlvblBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3Jlc291cmNlSWQnPj4oYnVsa0FjdGlvblVybClcblxuICBjb25zdCBhY3Rpb24gPSByZXNvdXJjZUFjdGlvbk1hdGNoPy5wYXJhbXMuYWN0aW9uTmFtZVxuICAgIHx8IHJlY29yZEFjdGlvbk1hdGNoPy5wYXJhbXMuYWN0aW9uTmFtZVxuICAgIHx8IGJ1bGtBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcblxuICByZXR1cm4gYWN0aW9uID8gcmVzb3VyY2UuYWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSBhY3Rpb24pIDogdW5kZWZpbmVkXG59XG5cbmNvbnN0IFJlc291cmNlQWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZXMsIG1hdGNoLCBsb2NhdGlvbiB9ID0gcHJvcHNcbiAgY29uc3QgeyByZXNvdXJjZUlkIH0gPSBtYXRjaC5wYXJhbXNcblxuICBjb25zdCBbZmlsdGVyVmlzaWJsZSwgc2V0RmlsZXJWaXNpYmxlXSA9IHVzZVN0YXRlKHF1ZXJ5SGFzRmlsdGVyKGxvY2F0aW9uLnNlYXJjaCkpXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlcy5maW5kKHIgPT4gci5pZCA9PT0gcmVzb3VyY2VJZClcbiAgaWYgKCFyZXNvdXJjZSkge1xuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcbiAgfVxuXG4gIGNvbnN0IHJlYWxFbmRBY3Rpb24gPSBnZXRBY3Rpb24ocmVzb3VyY2UpXG4gIGlmIChyZWFsRW5kQWN0aW9uICYmICFyZWFsRW5kQWN0aW9uLnNob3dJbkRyYXdlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBsaXN0QWN0aW9uTmFtZSA9ICdsaXN0J1xuICBjb25zdCBsaXN0QWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGxpc3RBY3Rpb25OYW1lKVxuXG4gIGlmICghbGlzdEFjdGlvbikge1xuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17bGlzdEFjdGlvbk5hbWV9IC8+KVxuICB9XG5cbiAgY29uc3QgdG9nZ2xlRmlsdGVyID0gbGlzdEFjdGlvbi5zaG93RmlsdGVyXG4gICAgPyAoKCk6IHZvaWQgPT4gc2V0RmlsZXJWaXNpYmxlKCFmaWx0ZXJWaXNpYmxlKSlcbiAgICA6IHVuZGVmaW5lZFxuXG4gIHJldHVybiAoXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIHdpZHRoPXtsaXN0QWN0aW9uLmNvbnRhaW5lcldpZHRofSBteD1cImF1dG9cIj5cbiAgICAgIDxBY3Rpb25IZWFkZXJcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICBhY3Rpb249e2xpc3RBY3Rpb259XG4gICAgICAgIHRhZz17dGFnfVxuICAgICAgICB0b2dnbGVGaWx0ZXI9e3RvZ2dsZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8QmFzZUFjdGlvbiBhY3Rpb249e2xpc3RBY3Rpb259IHJlc291cmNlPXtyZXNvdXJjZX0gc2V0VGFnPXtzZXRUYWd9IC8+XG4gICAgICB7bGlzdEFjdGlvbi5zaG93RmlsdGVyID8gKFxuICAgICAgICA8RmlsdGVyRHJhd2VyXG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIGlzVmlzaWJsZT17ZmlsdGVyVmlzaWJsZX1cbiAgICAgICAgICB0b2dnbGVGaWx0ZXI9eygpOiB2b2lkID0+IHsgc2V0RmlsZXJWaXNpYmxlKCFmaWx0ZXJWaXNpYmxlKSB9fVxuICAgICAgICAvPlxuICAgICAgKSA6ICcnfVxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIHJlc291cmNlczogc3RhdGUucmVzb3VyY2VzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlc291cmNlQWN0aW9uKVxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tY2hpbGRyZW4tcHJvcCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEJveCwgT3ZlcmxheSwgUmVzZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vYXBwL3NpZGViYXIvc2lkZWJhcidcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi9hcHAvdG9wLWJhcidcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi9hcHAvbm90aWNlJ1xuXG5pbXBvcnQge1xuICBEYXNoYm9hcmQsIFJlc291cmNlQWN0aW9uLCBSZWNvcmRBY3Rpb24sIFBhZ2UsIEJ1bGtBY3Rpb24sIFJlc291cmNlLFxufSBmcm9tICcuL3JvdXRlcydcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgaHRtbCwgYm9keSwgI2FwcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLmdyZXkxMDB9XG4gIH1cbmBcblxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaWRlYmFyVmlzaWJsZSwgdG9nZ2xlU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2lkZWJhclZpc2libGUpIHsgdG9nZ2xlU2lkZWJhcihmYWxzZSkgfVxuICB9LCBbbG9jYXRpb25dKVxuXG4gIGNvbnN0IHJlc291cmNlSWQgPSAnOnJlc291cmNlSWQnXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSAnOmFjdGlvbk5hbWUnXG4gIGNvbnN0IHJlY29yZElkID0gJzpyZWNvcmRJZCdcbiAgY29uc3QgcGFnZU5hbWUgPSAnOnBhZ2VOYW1lJ1xuXG4gIGNvbnN0IHJlY29yZEFjdGlvblVybCA9IGgucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgcmVzb3VyY2VBY3Rpb25VcmwgPSBoLnJlc291cmNlQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCBidWxrQWN0aW9uVXJsID0gaC5idWxrQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCByZXNvdXJjZVVybCA9IGgucmVzb3VyY2VVcmwoeyByZXNvdXJjZUlkIH0pXG4gIGNvbnN0IHBhZ2VVcmwgPSBoLnBhZ2VVcmwocGFnZU5hbWUpXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UmVzZXQgLz5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPEJveCBoZWlnaHQ9XCIxMDAlXCIgZmxleD5cbiAgICAgICAge3NpZGViYXJWaXNpYmxlID8gKFxuICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB0b2dnbGVTaWRlYmFyKCFzaWRlYmFyVmlzaWJsZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxTaWRlYmFyIGlzVmlzaWJsZT17c2lkZWJhclZpc2libGV9IC8+XG4gICAgICAgIDxCb3ggZmxleCBmbGV4R3Jvdz17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG92ZXJmbG93WT1cImF1dG9cIiBiZz1cImJnXCI+XG4gICAgICAgICAgPFRvcEJhciB0b2dnbGVTaWRlYmFyPXsoKTogdm9pZCA9PiB0b2dnbGVTaWRlYmFyKCFzaWRlYmFyVmlzaWJsZSl9IC8+XG4gICAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPXswfSB6SW5kZXg9XCIyMDAwXCI+XG4gICAgICAgICAgICA8Tm90aWNlIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtoLmRhc2hib2FyZFVybCgpfSBleGFjdCBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtyZXNvdXJjZVVybH0gY29tcG9uZW50PXtSZXNvdXJjZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtwYWdlVXJsfSBleGFjdCBjb21wb25lbnQ9e1BhZ2V9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtyZWNvcmRBY3Rpb25Vcmx9IGNvbXBvbmVudD17UmVjb3JkQWN0aW9ufSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3Jlc291cmNlQWN0aW9uVXJsfSBjb21wb25lbnQ9e1Jlc291cmNlQWN0aW9ufSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2J1bGtBY3Rpb25Vcmx9IGNvbXBvbmVudD17QnVsa0FjdGlvbn0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgeyBBc3NldHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBBU1NFVFNfSU5JVElBTElaRSA9ICdBU1NFVFNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgaW5pdGlhbGl6ZUFzc2V0c1Jlc3BvbnNlID0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IEFzc2V0cztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVBc3NldHMgPSAoZGF0YTogQXNzZXRzKTogaW5pdGlhbGl6ZUFzc2V0c1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IEFTU0VUU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IEJyYW5kaW5nT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IEJSQU5ESU5HX0lOSVRJQUxJWkUgPSAnQlJBTkRJTkdfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUJyYW5kaW5nUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBCUkFORElOR19JTklUSUFMSVpFO1xuICBkYXRhOiBCcmFuZGluZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQnJhbmRpbmcgPSAoZGF0YTogQnJhbmRpbmdPcHRpb25zKTogSW5pdGlhbGl6ZUJyYW5kaW5nUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogQlJBTkRJTkdfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBEYXNoYm9hcmRJblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBEQVNIQk9BUkRfSU5JVElBTElaRSA9ICdEQVNIQk9BUkRfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZURhc2hib2FyZFJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgREFTSEJPQVJEX0lOSVRJQUxJWkU7XG4gIGRhdGE6IERhc2hib2FyZEluU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplRGFzaGJvYXJkID0gKGRhdGE6IERhc2hib2FyZEluU3RhdGUpOiBJbml0aWFsaXplRGFzaGJvYXJkUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogREFTSEJPQVJEX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vbG9jYWxlL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IExPQ0FMRV9JTklUSUFMSVpFID0gJ0xPQ0FMRV9JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplTG9jYWxlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBMT0NBTEVfSU5JVElBTElaRTtcbiAgZGF0YTogTG9jYWxlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUxvY2FsZSA9IChkYXRhOiBMb2NhbGUpOiBJbml0aWFsaXplTG9jYWxlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogTE9DQUxFX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgQWRtaW5QYWdlIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgUEFHRVNfSU5JVElBTElaRSA9ICdQQUdFU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplUGFnZXNSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFBBR0VTX0lOSVRJQUxJWkU7XG4gIGRhdGE6IEFycmF5PEFkbWluUGFnZT47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUGFnZXMgPSAoZGF0YTogQXJyYXk8QWRtaW5QYWdlPik6IEluaXRpYWxpemVQYWdlc1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFBBR0VTX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLi9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IFBBVEhTX0lOSVRJQUxJWkUgPSAnUEFUSFNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVBhdGhzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBQQVRIU19JTklUSUFMSVpFO1xuICBkYXRhOiBQYXRocztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVQYXRocyA9IChkYXRhOiBQYXRocyk6IEluaXRpYWxpemVQYXRoc1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFBBVEhTX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGNvbnN0IFJFU09VUkNFU19JTklUSUFMSVpFID0gJ1JFU09VUkNFU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplUmVzb3VyY2VzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBSRVNPVVJDRVNfSU5JVElBTElaRTtcbiAgZGF0YTogQXJyYXk8UmVzb3VyY2VKU09OPjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVSZXNvdXJjZXMgPSAoZGF0YTogQXJyYXk8UmVzb3VyY2VKU09OPik6IEluaXRpYWxpemVSZXNvdXJjZXNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBSRVNPVVJDRVNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OU19JTklUSUFMSVpFID0gJ1ZFUlNJT05TX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVWZXJzaW9uc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgVkVSU0lPTlNfSU5JVElBTElaRTtcbiAgZGF0YTogVmVyc2lvblByb3BzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVZlcnNpb25zID0gKGRhdGE6IFZlcnNpb25Qcm9wcyk6IEluaXRpYWxpemVWZXJzaW9uc1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFZFUlNJT05TX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1xuICBWRVJTSU9OU19JTklUSUFMSVpFLFxuICBTRVNTSU9OX0lOSVRJQUxJWkUsXG4gIERBU0hCT0FSRF9JTklUSUFMSVpFLFxuICBQQVRIU19JTklUSUFMSVpFLFxuICBBU1NFVFNfSU5JVElBTElaRSxcbiAgQlJBTkRJTkdfSU5JVElBTElaRSxcbiAgTE9DQUxFX0lOSVRJQUxJWkUsXG4gIFBBR0VTX0lOSVRJQUxJWkUsXG4gIFJFU09VUkNFU19JTklUSUFMSVpFLFxuICBTRVRfTk9USUNFX1BST0dSRVNTLFxuICBEUk9QX05PVElDRSxcbiAgQUREX05PVElDRSB9IGZyb20gJy4vYWN0aW9ucydcblxuaW1wb3J0IHsgQXNzZXRzLCBCcmFuZGluZ09wdGlvbnMsIFZlcnNpb25Qcm9wcyB9IGZyb20gJy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFBhZ2VKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgREVGQVVMVF9QQVRIUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uLy4uL2N1cnJlbnQtYWRtaW4uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vbG9jYWxlL2NvbmZpZydcbmltcG9ydCB7IE5vdGljZU1lc3NhZ2UgfSBmcm9tICcuLi9ob2Mvd2l0aC1ub3RpY2UnXG5cbmV4cG9ydCB0eXBlIERhc2hib2FyZEluU3RhdGUgPSB7XG4gIGNvbXBvbmVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTm90aWNlTWVzc2FnZUluU3RhdGUgPSBOb3RpY2VNZXNzYWdlICYge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IE5vdGljZU1lc3NhZ2VbJ3R5cGUnXTtcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgUGF0aHMgPSB7XG4gIHJvb3RQYXRoOiBzdHJpbmc7XG4gIGxvZ291dFBhdGg6IHN0cmluZztcbiAgbG9naW5QYXRoOiBzdHJpbmc7XG4gIGFzc2V0c0NETj86IHN0cmluZztcbn1cblxuY29uc3QgcmVzb3VyY2VzUmVkdWNlciA9IChcbiAgc3RhdGU6IEFycmF5PFJlc291cmNlSlNPTj4gPSBbXSxcbiAgYWN0aW9uOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj47XG4gIH0sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFJFU09VUkNFU19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBwYWdlc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBBcnJheTxQYWdlSlNPTj4gPSBbXSxcbiAgYWN0aW9uOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGRhdGE6IEFycmF5PFBhZ2VKU09OPjtcbiAgfSxcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgUEFHRVNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbG9jYWxlc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBMb2NhbGUgPSB7IGxhbmd1YWdlOiAnZW4nLCB0cmFuc2xhdGlvbnM6IHt9IH0gYXMgTG9jYWxlLFxuICBhY3Rpb246IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZGF0YTogTG9jYWxlO1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBMT0NBTEVfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYnJhbmRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IEJyYW5kaW5nT3B0aW9ucztcbn0pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIEJSQU5ESU5HX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFzc2V0c1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogQXNzZXRzO1xufSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgQVNTRVRTX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHBhdGhzUmVkdWNlciA9IChcbiAgc3RhdGU6IFBhdGhzID0gREVGQVVMVF9QQVRIUyxcbiAgYWN0aW9uOiB7dHlwZTogc3RyaW5nOyBkYXRhOiBQYXRoc30sXG4pOiBQYXRocyA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBQQVRIU19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBkYXNoYm9hcmRSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IERhc2hib2FyZEluU3RhdGU7XG59KTogRGFzaGJvYXJkSW5TdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBEQVNIQk9BUkRfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3Qgc2Vzc2lvblJlZHVjZXIgPSAoXG4gIHN0YXRlOiBDdXJyZW50QWRtaW4gfCBudWxsID0gbnVsbCxcbiAgYWN0aW9uOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGw7XG4gIH0sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFNFU1NJT05fSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgdmVyc2lvbnNSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IFZlcnNpb25Qcm9wcztcbn0pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFZFUlNJT05TX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkbWluOiBhY3Rpb24uZGF0YS5hZG1pbixcbiAgICAgIGFwcDogYWN0aW9uLmRhdGEuYXBwLFxuICAgIH1cbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxudHlwZSBOb3RpY2VBcmdzID0geyBub3RpY2VJZDogc3RyaW5nOyBwcm9ncmVzczogbnVtYmVyIH1cblxuY29uc3Qgbm90aWNlc1JlZHVjZXIgPSAoc3RhdGU6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPiA9IFtdLCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZSB8IE5vdGljZUFyZ3M7XG59KTogQXJyYXk8Tm90aWNlTWVzc2FnZUluU3RhdGU+ID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIEFERF9OT1RJQ0U6IHtcbiAgICBjb25zdCBub3RpY2VzID0gW2FjdGlvbi5kYXRhIGFzIE5vdGljZU1lc3NhZ2VJblN0YXRlXVxuICAgIHJldHVybiBub3RpY2VzXG4gIH1cbiAgY2FzZSBEUk9QX05PVElDRToge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIobm90aWNlID0+IG5vdGljZS5pZCAhPT0gKGFjdGlvbi5kYXRhIGFzIE5vdGljZUFyZ3MpLm5vdGljZUlkKVxuICB9XG4gIGNhc2UgU0VUX05PVElDRV9QUk9HUkVTUzoge1xuICAgIHJldHVybiBzdGF0ZS5tYXAobm90aWNlID0+ICh7XG4gICAgICAuLi5ub3RpY2UsXG4gICAgICBwcm9ncmVzczogbm90aWNlLmlkID09PSAoYWN0aW9uLmRhdGEgYXMgTm90aWNlQXJncykubm90aWNlSWRcbiAgICAgICAgPyBhY3Rpb24uZGF0YS5wcm9ncmVzc1xuICAgICAgICA6IG5vdGljZS5wcm9ncmVzcyxcbiAgICB9KSlcbiAgfVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBSZWR1eFN0YXRlID0ge1xuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XG4gIGJyYW5kaW5nOiBCcmFuZGluZ09wdGlvbnM7XG4gIGFzc2V0czogQXNzZXRzO1xuICBwYXRoczogUGF0aHM7XG4gIHNlc3Npb246IEN1cnJlbnRBZG1pbiB8IG51bGw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkSW5TdGF0ZTtcbiAgbm90aWNlczogQXJyYXk8Tm90aWNlTWVzc2FnZUluU3RhdGU+O1xuICB2ZXJzaW9uczogVmVyc2lvblByb3BzO1xuICBwYWdlczogQXJyYXk8UGFnZUpTT04+O1xuICBsb2NhbGU6IExvY2FsZTtcbn1cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxSZWR1eFN0YXRlPih7XG4gIHJlc291cmNlczogcmVzb3VyY2VzUmVkdWNlcixcbiAgYnJhbmRpbmc6IGJyYW5kaW5nUmVkdWNlcixcbiAgYXNzZXRzOiBhc3NldHNSZWR1Y2VyLFxuICBwYXRoczogcGF0aHNSZWR1Y2VyLFxuICBzZXNzaW9uOiBzZXNzaW9uUmVkdWNlcixcbiAgZGFzaGJvYXJkOiBkYXNoYm9hcmRSZWR1Y2VyLFxuICBub3RpY2VzOiBub3RpY2VzUmVkdWNlcixcbiAgdmVyc2lvbnM6IHZlcnNpb25zUmVkdWNlcixcbiAgcGFnZXM6IHBhZ2VzUmVkdWNlcixcbiAgbG9jYWxlOiBsb2NhbGVzUmVkdWNlcixcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsU3RhdGUgPSB7fSkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbidcbmltcG9ydCBCYXNlUHJvcGVydHlDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgKiBhcyBBcHBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgKiBhcyBIb29rcyBmcm9tICcuL2hvb2tzJ1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgd2l0aE5vdGljZSBmcm9tICcuL2hvYy93aXRoLW5vdGljZSdcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi91dGlscy9mbGF0J1xuXG5jb25zdCBlbnYgPSB7XG4gIE5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHdpbmRvdy5SRURVWF9TVEFURSlcbmNvbnN0IHRoZW1lID0gd2luZG93LlRIRU1FXG5jb25zdCB7IGxvY2FsZSB9ID0gd2luZG93LlJFRFVYX1NUQVRFXG5cbmkxOG5cbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxuICAuaW5pdCh7XG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICBbbG9jYWxlLmxhbmd1YWdlXToge1xuICAgICAgICB0cmFuc2xhdGlvbjogbG9jYWxlLnRyYW5zbGF0aW9ucyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsbmc6IGxvY2FsZS5sYW5ndWFnZSxcbiAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxuICB9KVxuXG5jb25zdCBBcHBsaWNhdGlvbiA9IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8QXBwIC8+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbndpbmRvdy5yZWdlbmVyYXRvclJ1bnRpbWUgPSByZWdlbmVyYXRvclJ1bnRpbWVcblxuZXhwb3J0IGRlZmF1bHQge1xuICB3aXRoTm90aWNlLFxuICBBcHBsaWNhdGlvbixcbiAgVmlld0hlbHBlcnMsXG4gIFVzZXJDb21wb25lbnRzOiB7fSxcbiAgQXBpQ2xpZW50LFxuICBCYXNlUHJvcGVydHlDb21wb25lbnQsXG4gIGVudixcbiAgLi4uQXBwQ29tcG9uZW50cyxcbiAgLi4uSG9va3MsXG4gIGZsYXQsXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIGZyb20gdGhlIG5leHQgcmVsZWFzZVxuICBmbGF0dGVuOiBmbGF0LmZsYXR0ZW4sXG4gIHVuZmxhdHRlbjogZmxhdC51bmZsYXR0ZW4sXG59XG4iXSwibmFtZXMiOlsidW5kZWZpbmVkIiwicmVxdWlyZSQkMCIsImdsb2JhbEFueSIsIndpbmRvdyIsImVycm9yIiwibWVzc2FnZSIsInJ1bkRhdGUiLCJEYXRlIiwiVmlld0hlbHBlcnMiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJvcHRzIiwiZ2V0UGF0aHMiLCJyb290UGF0aCIsIlJFRFVYX1NUQVRFIiwicGF0aHMiLCJ1cmxCdWlsZGVyIiwic2VhcmNoIiwic2VwYXJhdG9yIiwicmVwbGFjZSIsIlJlZ0V4cCIsInN0YXJ0c1dpdGgiLCJwYXJ0cyIsImpvaW4iLCJsb2dpblVybCIsImxvZ2luUGF0aCIsImxvZ291dFVybCIsImxvZ291dFBhdGgiLCJkYXNoYm9hcmRVcmwiLCJwYWdlVXJsIiwicGFnZU5hbWUiLCJlZGl0VXJsIiwicmVzb3VyY2VJZCIsInJlY29yZElkIiwicmVjb3JkQWN0aW9uVXJsIiwiYWN0aW9uTmFtZSIsInNob3dVcmwiLCJkZWxldGVVcmwiLCJuZXdVcmwiLCJyZXNvdXJjZUFjdGlvblVybCIsImxpc3RVcmwiLCJidWxrRGVsZXRlVXJsIiwicmVjb3JkSWRzIiwiYnVsa0FjdGlvblVybCIsInJlc291cmNlVXJsIiwidXJsIiwibGVuZ3RoIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJ0b1N0cmluZyIsImFzc2V0UGF0aCIsImFzc2V0IiwiYXNzZXRzQ0ROIiwiVVJMIiwiaHJlZiIsImdldFRpbWUiLCJhbGxvd092ZXJyaWRlIiwiT3JpZ2luYWxDb21wb25lbnQiLCJuYW1lIiwiV3JhcHBlckNvbXBvbmVudCIsInByb3BzIiwiQ29tcG9uZW50IiwiQWRtaW5Ccm8iLCJVc2VyQ29tcG9uZW50cyIsIlJlYWN0IiwiU3R5bGVkTG9nbyIsInN0eWxlZCIsIkxpbmsiLCJ0aGVtZUdldCIsImgiLCJTaWRlYmFyQnJhbmRpbmciLCJicmFuZGluZyIsImxvZ28iLCJjb21wYW55TmFtZSIsImNzc0NsYXNzIiwiYmFzZVByb3BlcnR5T2YiLCJnbG9iYWwiLCJmcmVlR2xvYmFsIiwiU3ltYm9sIiwicm9vdCIsIm9iamVjdFByb3RvIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwiaXNPYmplY3RMaWtlIiwiYmFzZUdldFRhZyIsImlzQXJyYXkiLCJhcnJheU1hcCIsImlzU3ltYm9sIiwiYmFzZVRvU3RyaW5nIiwiZGVidXJyTGV0dGVyIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNDb21ib1JhbmdlIiwicnNDb21ibyIsImhhc1VuaWNvZGVXb3JkIiwidW5pY29kZVdvcmRzIiwiYXNjaWlXb3JkcyIsInJzQXBvcyIsImFycmF5UmVkdWNlIiwid29yZHMiLCJkZWJ1cnIiLCJiYXNlU2xpY2UiLCJyc0FzdHJhbFJhbmdlIiwicnNWYXJSYW5nZSIsInJzWldKIiwicnNGaXR6IiwicnNNb2RpZmllciIsInJzTm9uQXN0cmFsIiwicnNSZWdpb25hbCIsInJzU3VyclBhaXIiLCJyZU9wdE1vZCIsInJzT3B0VmFyIiwicnNPcHRKb2luIiwicnNTZXEiLCJoYXNVbmljb2RlIiwidW5pY29kZVRvQXJyYXkiLCJhc2NpaVRvQXJyYXkiLCJzdHJpbmdUb0FycmF5IiwiY2FzdFNsaWNlIiwiY3JlYXRlQ2FzZUZpcnN0IiwiY3JlYXRlQ29tcG91bmRlciIsInVwcGVyRmlyc3QiLCJmb3JtYXROYW1lIiwic3BsaXQiLCJ0cmFuc2xhdGUiLCJpMThuIiwia2V5IiwicmVhbE9wdGlvbnMiLCJmb3JtYXR0ZWROYW1lIiwia2V5cyIsImV4aXN0cyIsInQiLCJkZWZhdWx0VmFsdWUiLCJzdGFydENhc2UiLCJjcmVhdGVGdW5jdGlvbnMiLCJ0cmFuc2xhdGVBY3Rpb24iLCJ0cmFuc2xhdGVCdXR0b24iLCJidXR0b25MYWJlbCIsInRyYW5zbGF0ZUxhYmVsIiwibGFiZWwiLCJ0cmFuc2xhdGVQcm9wZXJ0eSIsInByb3BlcnR5TmFtZSIsInRyYW5zbGF0ZU1lc3NhZ2UiLCJtZXNzYWdlTmFtZSIsInRhIiwidGIiLCJ0bCIsInRwIiwidG0iLCJ1c2VUcmFuc2xhdGlvbiIsInJlc3QiLCJvcmlnaW5hbFVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRlRnVuY3Rpb25zIiwiU2lkZWJhclBhZ2VzIiwicGFnZXMiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpc0FjdGl2ZSIsInBhZ2UiLCJwYXRobmFtZSIsIm1hdGNoIiwiZWxlbWVudHMiLCJtYXAiLCJpZCIsImlzU2VsZWN0ZWQiLCJpY29uIiwib25DbGljayIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIk5hdmlnYXRpb24iLCJTaWRlYmFyRm9vdGVyIiwiQm94IiwiU29mdHdhcmVCcm90aGVycyIsImlzT25TZXJ2ZXIiLCJjaGVja1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJvcmlnaW4iLCJyZXF1ZXN0IiwicmVzcG9uc2VVUkwiLCJhbGVydCIsImFzc2lnbiIsIkFwaUNsaWVudCIsImJhc2VVUkwiLCJnZXRCYXNlVXJsIiwiY2xpZW50IiwiYXhpb3MiLCJjcmVhdGUiLCJzZWFyY2hSZWNvcmRzIiwicmVzb3VyY2VBY3Rpb24iLCJkYXRhIiwicmVjb3JkcyIsImF4aW9zUGFyYW1zIiwicSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsInJlY29yZEFjdGlvbiIsImJ1bGtBY3Rpb24iLCJwYXJhbXMiLCJnZXREYXNoYm9hcmQiLCJnZXQiLCJnZXRQYWdlIiwiRk9STV9WQUxVRV9OVUxMIiwiRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1QiLCJGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZIiwiaXNPYmplY3RPckFycmF5IiwidmFsdWUiLCJGaWxlIiwicGFyYW1zVG9Gb3JtRGF0YSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIkFycmF5IiwiQUREX05PVElDRSIsImFkZE5vdGljZSIsInR5cGUiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyIiwicHJvZ3Jlc3MiLCJ1c2VOb3RpY2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibm90aWNlIiwibWVyZ2VSZWNvcmRSZXNwb25zZSIsInJlY29yZCIsImVycm9ycyIsInBvcHVsYXRlZCIsIkRFTElNSVRFUiIsInByb3BlcnR5S2V5UmVnZXgiLCJwcm9wZXJ0eVBhdGgiLCJkZWxpbWl0ZXIiLCJlc2NhcGVkRGVsaW1pdGVyIiwiZXNjYXBlZERlbGltaXRlck9ySW5kZXgiLCJwYXRoIiwiaW5jbHVkZUFsbFNpYmxpbmdzIiwic2VsZWN0UGFyYW1zIiwicHJvcGVydGllcyIsInByb3BlcnR5QXJyYXkiLCJzZWxlY3RlZCIsImZpbHRlciIsInJlZHVjZSIsImdsb2JhbE1lbW8iLCJyZWdleCIsImZpbHRlcmVkIiwibWVtbyIsImZpbHRlck91dFBhcmFtcyIsImdsb2JhbEZpbHRlcmVkIiwicGF0aFRvUGFydHMiLCJhbGxQYXJ0cyIsInNraXBBcnJheUluZGV4ZXMiLCJwYXJ0IiwiaXNOYU4iLCJpc09iamVjdCIsInBhcmFtc0NvcHkiLCJmbGF0dGVuZWQiLCJmbGF0dGVuIiwic2xpY2UiLCJpbmNsdWRlcyIsIlRFTVBfSE9MRElOR19LRVkiLCJ1bmZsYXR0ZW4iLCJmaW5kIiwic2VsZWN0ZWRQYXJhbXMiLCJuZXN0ZWRQcm9wZXJ0aWVzIiwiaW5kZXgiLCJuZXdLZXkiLCJtZXJnZSIsIm1lcmdlUGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInJldmVyc2UiLCJtZXJnZVBhcmFtIiwicmVtb3ZlUGF0aCIsInBhcmVudFBhdGhzIiwicGFyZW50UGF0aCIsInBhcmVudEluZGV4IiwicGFyZW50IiwicHJldmlvdXNQYXRocyIsInByZXZpb3VzUGF0aEluZGV4Iiwic3BsaWNlIiwiZmxhdCIsInVwZGF0ZVJlY29yZCIsInByb3BlcnR5Iiwic2VsZWN0ZWRSZWNvcmQiLCJwcmV2aW91c1JlY29yZCIsInBvcHVsYXRlZE1vZGlmaWVkIiwicG9wdWxhdGVkQ29weSIsImlzRW50aXJlUmVjb3JkR2l2ZW4iLCJwcm9wZXJ0eU9yUmVjb3JkIiwiZmlsdGVyUmVjb3JkUGFyYW1zIiwiaW5jbHVkZVBhcmFtcyIsImlzUHJvcGVydHlQZXJtaXR0ZWQiLCJzb21lIiwiYXBpIiwidXNlUmVjb3JkIiwiaW5pdGlhbFJlY29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJpc1N5bmNlZCIsInNldElzU3luY2VkIiwic2V0UHJvZ3Jlc3MiLCJmaWx0ZXJlZFJlY29yZCIsInNldFJlY29yZCIsInNldEZpbHRlcmVkUmVjb3JkIiwidXNlQ2FsbGJhY2siLCJuZXdSZWNvcmQiLCJGdW5jdGlvbiIsIm9uTm90aWNlIiwiaGFuZGxlQ2hhbmdlIiwiaW5jb21pbmdSZWNvcmQiLCJjb25zb2xlIiwid2FybiIsImhhbmRsZVN1Ym1pdCIsImN1c3RvbVBhcmFtcyIsInN1Ym1pdE9wdGlvbnMiLCJtZXJnZWRQYXJhbXMiLCJvblVwbG9hZFByb2dyZXNzIiwiZSIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJoZWFkZXJzIiwicHJvbWlzZSIsInRoZW4iLCJ1cGRhdGVPblNhdmUiLCJwcmV2IiwiY2F0Y2giLCJzdWJtaXQiLCJhY3Rpb25IYXNDb21wb25lbnQiLCJhY3Rpb24iLCJjb21wb25lbnQiLCJhY3Rpb25IcmVmIiwiaGFzSGFuZGxlciIsImhyZWZNYXAiLCJyZXNvdXJjZSIsImJ1bGsiLCJhY3Rpb25UeXBlIiwiRXJyb3IiLCJjYWxsQWN0aW9uQXBpIiwiYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciIsImFjdGlvblJlc3BvbnNlSGFuZGxlciIsImNhbGxBcGkiLCJidWlsZEFjdGlvblRlc3RJZCIsImJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyIiwiaGFuZGxlQWN0aW9uQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJndWFyZCIsImNvbmZpcm0iLCJSRUZSRVNIX0tFWSIsImFwcGVuZEZvcmNlUmVmcmVzaCIsImhhc0ZvcmNlUmVmcmVzaCIsInJlbW92ZUZvcmNlUmVmcmVzaCIsImRlbGV0ZSIsInVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciIsIm9uQWN0aW9uQ2FsbCIsInJlZGlyZWN0VXJsIiwiYXBwZW5kZWQiLCJ1c2VBY3Rpb24iLCJoYW5kbGVDbGljayIsIlNFU1NJT05fSU5JVElBTElaRSIsInNldEN1cnJlbnRBZG1pbiIsInVzZUN1cnJlbnRBZG1pbiIsImN1cnJlbnRBZG1pbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZXNzaW9uIiwiYWRtaW4iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJpbml0aWFsVmFsdWUiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2ciLCJzZXRWYWx1ZSIsInZhbHVlVG9TdG9yZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZWdFeHAiLCJ1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwib3BlbkVsZW1lbnRzIiwic2V0T3BlbkVsZW1lbnRzIiwiZW5yaWNoUmVzb3VyY2UiLCJ1c2VNZW1vIiwicmVzIiwibmF2aWdhdGlvbiIsImlzT3BlbiIsInZhbHVlcyIsInVzZVJlY29yZHMiLCJzZXRSZWNvcmRzIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJzZXRQYWdlIiwic2V0VG90YWwiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJmZXRjaERhdGEiLCJsaXN0QWN0aW9uUmVzcG9uc2UiLCJtZXRhIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0ZWRSZWNvcmRzIiwic2VsZWN0ZWRSZWNvcmRzIiwic2V0U2VsZWN0ZWRSZWNvcmRzIiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIm5ld1NlbGVjdGVkUmVjb3JkcyIsImhhbmRsZVNlbGVjdEFsbCIsIm1pc3NpbmciLCJidWxrQWN0aW9ucyIsInVzZVJlc291cmNlIiwiZm91bmRSZXNvdXJjZSIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbCIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb24iLCJTdHlsZWRTaWRlYmFyIiwiZGVmYXVsdFByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlclJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJiZyIsIlNpZGViYXIiLCJpc1Zpc2libGUiLCJzb2Z0d2FyZUJyb3RoZXJzIiwiTG9nZ2VkSW4iLCJkcm9wQWN0aW9ucyIsIkN1cnJlbnRVc2VyTmF2IiwiZW1haWwiLCJ0aXRsZSIsImF2YXRhclVybCIsIk92ZXJyaWRhYmxlTG9nZ2VkSW4iLCJWZXJzaW9uSXRlbSIsIlRleHQiLCJjb2xvciIsIlZlcnNpb24iLCJ2ZXJzaW9ucyIsImFwcCIsInZlcnNpb24iLCJOYXZCYXIiLCJ0aGVtZSIsInNpemVzIiwibmF2YmFySGVpZ2h0IiwiY29sb3JzIiwid2hpdGUiLCJjbGFzc05hbWUiLCJUb3BCYXIiLCJ0b2dnbGVTaWRlYmFyIiwiY3Vyc29yIiwiSWNvbiIsIkRST1BfTk9USUNFIiwiZHJvcE5vdGljZSIsIm5vdGljZUlkIiwiU0VUX05PVElDRV9QUk9HUkVTUyIsInNldE5vdGljZVByb2dyZXNzIiwiVElNRV9UT19ESVNBUFBFQVIiLCJOb3RpY2VFbGVtZW50IiwidGltZXIiLCJjb21wb25lbnREaWRNb3VudCIsImRyb3AiLCJub3RpZnlQcm9ncmVzcyIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiTWVzc2FnZUJveCIsIm1pbldpZHRoIiwiTm90aWNlQm94Iiwibm90aWNlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkNvbm5lY3RlZE5vdGljZUJveCIsImNvbm5lY3QiLCJwYWdlSGVhZGVySGVpZ2h0IiwicGFnZUhlYWRlclBhZGRpbmdZIiwicGFnZUhlYWRlclBhZGRpbmdYIiwiRGFzaGJvYXJkSGVhZGVyIiwiSWxsdXN0cmF0aW9uIiwiSDIiLCJib3hlcyIsInZhcmlhbnQiLCJzdWJ0aXRsZSIsIkNhcmQiLCJmbGV4IiwiZ3JleTEwMCIsInByaW1hcnkxMDAiLCJzaGFkb3dzIiwiY2FyZEhvdmVyIiwiYm94U2hhZG93IiwiRGFzaGJvYXJkIiwiYm94IiwiSDUiLCJINCIsIkJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsIkVycm9yQm91bmRhcnkiLCJjb21wb25lbnREaWRDYXRjaCIsImNoaWxkcmVuIiwiaXNDbGllbnQiLCJkYXNoYm9hcmQiLCJEZWZhdWx0RGFzaGJvYXJkIiwiQWRkTmV3SXRlbUJ1dHRvbiIsIlByb3BlcnR5TGFiZWwiLCJsYWJlbFByb3BzIiwiaGlkZUxhYmVsIiwiTGFiZWwiLCJpc1JlcXVpcmVkIiwiY29udmVydFRvU3ViUHJvcGVydHkiLCJhcnJheVByb3BlcnR5IiwicmVtb3ZlU3ViUHJvcGVydHkiLCJzdWJQcm9wZXJ0eVBhdGgiLCJwb3B1bGF0ZWRLZXlNYXAiLCJwcm9wZXJ0eUtleSIsIm5ld1BvcHVsYXRlZEtleU1hcCIsIm5ld1BvcHVsYXRlZCIsIm5ld1Byb3BlcnR5S2V5Iiwib2xkUHJvcGVydHlLZXkiLCJJdGVtUmVuZGVyZXIiLCJJdGVtQ29tcG9uZW50Iiwib25EZWxldGUiLCJJbnB1dHNJblNlY3Rpb24iLCJvbkNoYW5nZSIsIml0ZW1zIiwiYWRkTmV3IiwibmV3SXRlbXMiLCJzdWJQcm9wZXJ0aWVzIiwicmVtb3ZlSXRlbSIsInN1YlByb3BlcnR5IiwiU2VjdGlvbiIsImkiLCJpdGVtUHJvcGVydHkiLCJFZGl0IiwidGVzdElkIiwiRm9ybUdyb3VwIiwiRm9ybU1lc3NhZ2UiLCJMaXN0IiwiU2hvdyIsIlB1cmVDb21wb25lbnQiLCJWYWx1ZUdyb3VwIiwiaXNJZCIsInN1YlByb3BlcnR5V2l0aFBhdGgiLCJyZW5kZXJJdGVtcyIsInNob3dBY3Rpb24iLCJyZWNvcmRBY3Rpb25zIiwiYSIsInRpdGxlUHJvcGVydHkiLCJEZWZhdWx0UHJvcGVydHlWYWx1ZSIsInJhd1ZhbHVlIiwiYXZhaWxhYmxlVmFsdWVzIiwib3B0aW9uIiwib3B0IiwiQmFkZ2UiLCJyZWNvcmRQcm9wZXJ0eUlzRXF1YWwiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2VmFsdWUiLCJuZXh0VmFsdWUiLCJwcmV2RXJyb3IiLCJuZXh0RXJyb3IiLCJCb29sZWFuIiwiU2VsZWN0RWRpdCIsInByb3BWYWx1ZSIsInN0eWxlcyIsInNlbGVjdFN0eWxlcyIsImF2IiwiU2VsZWN0IiwicyIsImlzRGlzYWJsZWQiLCJUZXh0RWRpdCIsIklucHV0IiwidGFyZ2V0Iiwia2V5Q29kZSIsIndpdGhUaGVtZSIsIkZpbHRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInJlbmRlcklucHV0IiwiZmlsdGVyS2V5IiwiZmlsdGVyU3R5bGVzIiwicGFyc2VWYWx1ZSIsIkNoZWNrQm94IiwiaW5saW5lIiwiQm9vbGVhblByb3BlcnR5VmFsdWUiLCJiYXNlIiwibWFwVmFsdWUiLCJ0cmFuc2xhdGlvbiIsIm8iLCJEYXRlUGlja2VyIiwicHJvcGVydHlUeXBlIiwiZGF0ZSIsImZvcm1hdERhdGVQcm9wZXJ0eSIsIlBBUkFNX1NFUEFSQVRPUiIsIm5vcm1hbGl6ZUtleXMiLCJmaWx0ZXJzIiwibm9ybWFsaXplZCIsInBvcHVsYXRlIiwicmVmZXJlbmNlUmVzb3VyY2UiLCJkZWNvcmF0ZSIsImdldFByb3BlcnR5QnlLZXkiLCJyZWZlcmVuY2UiLCJmaW5kT25lIiwiY2FsbGJhY2siLCJpbml0aWFsIiwiQmFja2VuZEZpbHRlciIsImZyb21LZXkiLCJ0b0tleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJwcm9wZXJ0eVByb3BzIiwicXVpbGwiLCJjdXN0b21Qcm9wcyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMiLCJSaWNoVGV4dCIsImNvbnRlbnQiLCJjb250ZW50UmVmIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsImlubmVySFRNTCIsIm9yaWdpbmFsIiwic3Vic3RyaW5nIiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwib3B0aW9uUmVjb3JkcyIsIm9wdGlvblJlY29yZCIsInNlbGVjdGVkSWQiLCJsb2FkZWRSZWNvcmQiLCJzZXRMb2FkZWRSZWNvcmQiLCJsb2FkaW5nUmVjb3JkIiwic2V0TG9hZGluZ1JlY29yZCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImMiLCJmaW5hbGx5IiwiU3R5bGVkTGluayIsIkJ1dHRvbkNTUyIsInNwYWNlIiwieHMiLCJSZWZlcmVuY2VWYWx1ZSIsInJlZklkIiwiciIsImxpbmUiLCJpc0lucHV0Iiwic2V0SXNJbnB1dCIsIklucHV0R3JvdXAiLCJ0eXBlcyIsInRleHRhcmVhIiwiYm9vbGVhbiIsImRhdGV0aW1lIiwicGFzc3dvcmQiLCJyaWNodGV4dCIsInN0cmluZyIsImRlZmF1bHRUeXBlIiwibnVtYmVyIiwiZmxvYXQiLCJtaXhlZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsImJhc2VQcm9wZXJ0eSIsIndoZXJlIiwiY29tcG9uZW50cyIsIkFycmF5VHlwZSIsIk1peGVkIiwiTWl4ZWRUeXBlIiwiY2FtZWxpemVQcm9wZXJ0eVR5cGUiLCJlZGl0Iiwic2hvdyIsImxpc3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCIsIkRlZmF1bHRUeXBlIiwiRGF0ZVRpbWUiLCJSZWZlcmVuY2UiLCJUZXh0QXJlYSIsIlBhc3N3b3JkIiwiQnJlYWRjcnVtYkxpbmsiLCJncmV5NDAiLCJmb250IiwibGluZUhlaWdodHMiLCJkZWZhdWx0IiwiZm9udFNpemVzIiwiQnJlYWRjcnVtYnMiLCJhY3Rpb25zIiwiYWN0aW9uc1RvQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic291cmNlIiwiYnV0dG9uc01hcCIsImJ1dHRvbiIsImJ0biIsInJvdW5kZWQiLCJSb3V0ZXJMaW5rIiwiU3R5bGVkQmFja0J1dHRvbiIsInNob3dJbkRyYXdlciIsImNzc0Nsb3NlSWNvbiIsIkFjdGlvbkhlYWRlciIsInRvZ2dsZUZpbHRlciIsImFjdGlvblBlcmZvcm1lZCIsInRhZyIsIm9taXRBY3Rpb25zIiwiaGlkZUFjdGlvbkhlYWRlciIsInNvdXJjZUFjdGlvbiIsImFjdGlvbkJ1dHRvbnMiLCJyYSIsInJlc291cmNlQWN0aW9ucyIsImN1c3RvbVJlc291cmNlQnV0dG9ucyIsImlzTGlzdCIsImxpc3RBY3Rpb24iLCJjc3NJc1Jvb3RGbGV4IiwiY3NzSGVhZGVyTVQiLCJjc3NBY3Rpb25zTUIiLCJDc3NIQ29tcG9uZW50IiwiSDMiLCJCdXR0b25Hcm91cCIsIkxheW91dEVsZW1lbnRSZW5kZXJlciIsImxheW91dEVsZW1lbnQiLCJsYXlvdXRQcm9wcyIsInByb3BlcnR5TmFtZXMiLCJsYXlvdXRFbGVtZW50cyIsImlubmVyTGF5b3V0RWxlbWVudHMiLCJvdGhlciIsIkRlc2lnblN5c3RlbSIsIkRlc2lnblN5c3RlbS5NZXNzYWdlQm94IiwiRGVzaWduU3lzdGVtLkJhZGdlIiwiRGVzaWduU3lzdGVtLkJveCIsIlByb3BlcnR5VHlwZSIsImlubmVyTGF5b3V0RWxlbWVudCIsIk5ldyIsIkRyYXdlckNvbnRlbnQiLCJsYXlvdXQiLCJlZGl0UHJvcGVydGllcyIsIkRyYXdlckZvb3RlciIsInNob3dQcm9wZXJ0aWVzIiwiaXNUaXRsZSIsIlJlY29yZEluTGlzdCIsInJlY29yZEZyb21Qcm9wcyIsImlzTG9hZGluZyIsIm9uU2VsZWN0IiwiaGFuZGxlQWN0aW9uQ2FsbGJhY2siLCJhY3Rpb25SZXNwb25zZSIsInRhcmdldFRhZ05hbWUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhY3Rpb25QYXJhbXMiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsImxpc3RQcm9wZXJ0aWVzIiwiUGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJTb3J0TGluayIsIm9wcG9zaXRlRGlyZWN0aW9uIiwic29ydGVkQnlJY29uIiwiTmF2TGluayIsIndpdGhSb3V0ZXIiLCJQcm9wZXJ0eUhlYWRlciIsImlzTWFpbiIsImlzU29ydGFibGUiLCJSZWNvcmRzVGFibGVIZWFkZXIiLCJvblNlbGVjdEFsbCIsInNlbGVjdGVkQWxsIiwiVGFibGVIZWFkIiwibWFyZ2luTGVmdCIsIkFjdGlvbkJ1dHRvbiIsImZpcnN0Q2hpbGQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJXcmFwcGVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIk5vUmVjb3Jkc09yaWdpbmFsIiwiY2FuQ3JlYXRlIiwiSW5mb0JveCIsIk5vUmVjb3JkcyIsImdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMiLCJhY3Rpb25zTWVtbyIsIlNlbGVjdGVkUmVjb3JkcyIsImJ1bGtCdXR0b25zIiwiVGFibGVDYXB0aW9uIiwiVGl0bGUiLCJSZWNvcmRzVGFibGUiLCJMb2FkZXIiLCJyZWNvcmRzSGF2ZUJ1bGtBY3Rpb24iLCJUYWJsZSIsIlRhYmxlQm9keSIsInNldFRhZyIsImhhbmRsZUFjdGlvblBlcmZvcm1lZCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJwYWdlTnVtYmVyIiwiUGFnaW5hdGlvbiIsIndpdGhOb3RpY2UiLCJCdWxrRGVsZXRlIiwiY291bnQiLCJGb3JtYXR0ZWRCdWxrRGVsZXRlIiwibmV3IiwiYnVsa0RlbGV0ZSIsIkJhc2VBY3Rpb25Db21wb25lbnQiLCJkb2N1bWVudGF0aW9uTGluayIsIkRPQ1MiLCJBY3Rpb24iLCJUcmFucyIsIkVycm9yTWVzc2FnZUJveCIsIk5vUmVzb3VyY2VFcnJvciIsIk5vQWN0aW9uRXJyb3IiLCJOb1JlY29yZEVycm9yIiwiU3R5bGVkV3JhcHBlciIsInh4bCIsIldyYXBwZXIiLCJEUkFXRVJfUE9SVEFMX0lEIiwiRHJhd2VyUG9ydGFsIiwiZHJhd2VyRWxlbWVudCIsInNldERyYXdlckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIkRyYXdlcldyYXBwZXIiLCJUaGVtZVByb3ZpZGVyIiwiVEhFTUUiLCJEcmF3ZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsIkRFRkFVTFRfRFJBV0VSX1dJRFRIIiwiYWRkIiwiY3JlYXRlUG9ydGFsIiwicGFyc2VRdWVyeSIsImVudHJ5IiwiRmlsdGVyRHJhd2VyIiwiZmlsdGVyUHJvcGVydGllcyIsInNldEZpbHRlciIsInVzZVJvdXRlTWF0Y2giLCJyZXNldEZpbHRlciIsImZpbHRlcmVkU2VhcmNoIiwiUmVjb3JkQWN0aW9uIiwiZmV0Y2hSZWNvcmQiLCJvbGRSZWNvcmQiLCJoYXNEaWZmZXJlbnRSZWNvcmQiLCJhY3Rpb25Gcm9tUmVzb3VyY2UiLCJjb250YWluZXJXaWR0aCIsIlJlc291cmNlQWN0aW9uIiwiQnVsa0FjdGlvbiIsImZldGNoUmVjb3JkcyIsInJlY29yZElkc1N0cmluZyIsIlBhZ2UiLCJjdXJyZW50UGFnZSIsInF1ZXJ5U3RyaW5nIiwiZ2V0QWN0aW9uIiwicmVzb3VyY2VBY3Rpb25NYXRjaCIsInJlY29yZEFjdGlvbk1hdGNoIiwiYnVsa0FjdGlvbk1hdGNoIiwiZmlsdGVyVmlzaWJsZSIsInNldEZpbGVyVmlzaWJsZSIsInF1ZXJ5SGFzRmlsdGVyIiwicmVhbEVuZEFjdGlvbiIsImxpc3RBY3Rpb25OYW1lIiwic2hvd0ZpbHRlciIsIkJhc2VBY3Rpb24iLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwic2lkZWJhclZpc2libGUiLCJSZXNldCIsIk92ZXJsYXkiLCJOb3RpY2UiLCJTd2l0Y2giLCJSb3V0ZSIsIlJlc291cmNlIiwiQVNTRVRTX0lOSVRJQUxJWkUiLCJCUkFORElOR19JTklUSUFMSVpFIiwiREFTSEJPQVJEX0lOSVRJQUxJWkUiLCJMT0NBTEVfSU5JVElBTElaRSIsIlBBR0VTX0lOSVRJQUxJWkUiLCJQQVRIU19JTklUSUFMSVpFIiwiUkVTT1VSQ0VTX0lOSVRJQUxJWkUiLCJWRVJTSU9OU19JTklUSUFMSVpFIiwicmVzb3VyY2VzUmVkdWNlciIsInBhZ2VzUmVkdWNlciIsImxvY2FsZXNSZWR1Y2VyIiwibGFuZ3VhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJicmFuZGluZ1JlZHVjZXIiLCJhc3NldHNSZWR1Y2VyIiwicGF0aHNSZWR1Y2VyIiwiREVGQVVMVF9QQVRIUyIsImRhc2hib2FyZFJlZHVjZXIiLCJzZXNzaW9uUmVkdWNlciIsInZlcnNpb25zUmVkdWNlciIsIm5vdGljZXNSZWR1Y2VyIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImFzc2V0cyIsImxvY2FsZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiZW52IiwiTk9ERV9FTlYiLCJzdG9yZSIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiQXBwbGljYXRpb24iLCJQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJBcHBDb21wb25lbnRzIiwiSG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQSxJQUFJLE9BQU8sSUFBSSxVQUFVLE9BQU8sRUFBRTtBQUVsQztDQUNBLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztDQUM1QixFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDakMsRUFBRSxJQUFJQSxXQUFTLENBQUM7Q0FDaEIsRUFBRSxJQUFJLE9BQU8sR0FBRyxPQUFP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QUFDM0I7Q0FDQSxRQUFRLElBQUksTUFBTSxFQUFFO0NBQ3BCO0NBQ0E7Q0FDQSxVQUFVLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQ2xDLFVBQVUsT0FBTyxDQUFDLEdBQUcsR0FBR0EsV0FBUyxDQUFDO0NBQ2xDLFNBQVM7QUFDVDtDQUNBLFFBQVEsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDO0NBQ3pCLE9BQU87QUFDUDtDQUNBLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtDQUM1RCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdkMsUUFBUSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ3RDO0NBQ0EsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO0NBQ3JDO0NBQ0E7Q0FDQTtDQUNBLFVBQVUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDL0IsU0FBUztBQUNUO0NBQ0EsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtDQUN2QyxVQUFVLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ3hELFVBQVUsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDNUQ7Q0FDQSxVQUFVLElBQUksUUFBUSxJQUFJLFVBQVUsRUFBRTtDQUN0QyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO0NBQzVDLGNBQWMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNsRCxhQUFhLE1BQU0sSUFB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TUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRztDQUMzQixFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUMvRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUMvRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDeEMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJO0NBQzVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUM1QixFQUFFLE1BQU0sRUFBRSxJQUFJO0NBQ2Q7Q0FDQSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHO0NBQy9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUMzRixFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUMzRixFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUc7Q0FDL0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJO0NBQ2hDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSTtDQUNoQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUs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
