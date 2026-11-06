// Enable the V8 compile cache before anything else is imported: the 13
// builtin plugin bundles cost ~750ms of parse/compile per cold start
// (measured via console 'Loading <plugin>' timestamps). Node 22.8+ persists
// the compiled bytecode, so subsequent launches skip re-parsing them.
// NOTE: this module must be imported first in both entry points.
try {
    ;(require('module') as any).enableCompileCache?.(require('node:os').tmpdir() + '/tabby-v8-compile-cache')
} catch { }
