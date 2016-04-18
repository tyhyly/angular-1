'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var common_tools_1 = require('./common_tools');
var context = lang_1.global;
/**
 * Enabled Angular 2 debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 */
function enableDebugTools(ref) {
    context.ng = new common_tools_1.AngularTools(ref);
}
exports.enableDebugTools = enableDebugTools;
/**
 * Disables Angular 2 tools.
 */
function disableDebugTools() {
    delete context.ng;
}
exports.disableDebugTools = disableDebugTools;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTg4bzRjUTdPLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci90b29scy90b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXFCLDBCQUEwQixDQUFDLENBQUE7QUFFaEQsNkJBQTJCLGdCQUFnQixDQUFDLENBQUE7QUFFNUMsSUFBSSxPQUFPLEdBQVEsYUFBTSxDQUFDO0FBRTFCOzs7Ozs7Ozs7O0dBVUc7QUFDSCwwQkFBaUMsR0FBaUI7SUFDaEQsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUZlLHdCQUFnQixtQkFFL0IsQ0FBQTtBQUVEOztHQUVHO0FBQ0g7SUFDRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUZlLHlCQUFpQixvQkFFaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2xvYmFsfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDb21wb25lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXInO1xuaW1wb3J0IHtBbmd1bGFyVG9vbHN9IGZyb20gJy4vY29tbW9uX3Rvb2xzJztcblxudmFyIGNvbnRleHQgPSA8YW55Pmdsb2JhbDtcblxuLyoqXG4gKiBFbmFibGVkIEFuZ3VsYXIgMiBkZWJ1ZyB0b29scyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB5b3VyIGJyb3dzZXInc1xuICogZGV2ZWxvcGVyIGNvbnNvbGUuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogMS4gT3BlbiBkZXZlbG9wZXIgY29uc29sZSAoZS5nLiBpbiBDaHJvbWUgQ3RybCArIFNoaWZ0ICsgailcbiAqIDEuIFR5cGUgYG5nLmAgKHVzdWFsbHkgdGhlIGNvbnNvbGUgd2lsbCBzaG93IGF1dG8tY29tcGxldGUgc3VnZ2VzdGlvbilcbiAqIDEuIFRyeSB0aGUgY2hhbmdlIGRldGVjdGlvbiBwcm9maWxlciBgbmcucHJvZmlsZXIudGltZUNoYW5nZURldGVjdGlvbigpYFxuICogICAgdGhlbiBoaXQgRW50ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVEZWJ1Z1Rvb2xzKHJlZjogQ29tcG9uZW50UmVmKTogdm9pZCB7XG4gIGNvbnRleHQubmcgPSBuZXcgQW5ndWxhclRvb2xzKHJlZik7XG59XG5cbi8qKlxuICogRGlzYWJsZXMgQW5ndWxhciAyIHRvb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZURlYnVnVG9vbHMoKTogdm9pZCB7XG4gIGRlbGV0ZSBjb250ZXh0Lm5nO1xufVxuIl19