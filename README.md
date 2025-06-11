│   │   │   │   NullFactory.js
│   │   │   │   OptimizationStages.js
│   │   │   │   OptionsApply.js
│   │   │   │   Parser.js
│   │   │   │   PlatformPlugin.js
│   │   │   │   PrefetchPlugin.js
│   │   │   │   ProgressPlugin.js
│   │   │   │   ProvidePlugin.js
│   │   │   │   RawModule.js
│   │   │   │   RecordIdsPlugin.js
│   │   │   │   RequestShortener.js
│   │   │   │   RequireJsStuffPlugin.js
│   │   │   │   ResolverFactory.js
│   │   │   │   RuntimeGlobals.js
│   │   │   │   RuntimeModule.js
│   │   │   │   RuntimePlugin.js
│   │   │   │   RuntimeTemplate.js
│   │   │   │   SelfModuleFactory.js
│   │   │   │   SingleEntryPlugin.js
│   │   │   │   SizeFormatHelpers.js
│   │   │   │   SourceMapDevToolModuleOptionsPlugin.js
│   │   │   │   SourceMapDevToolPlugin.js
│   │   │   │   Stats.js
│   │   │   │   Template.js
│   │   │   │   TemplatedPathPlugin.js
│   │   │   │   UnhandledSchemeError.js
│   │   │   │   UnsupportedFeatureWarning.js
│   │   │   │   UseStrictPlugin.js
│   │   │   │   validateSchema.js
│   │   │   │   WarnCaseSensitiveModulesPlugin.js
│   │   │   │   WarnDeprecatedOptionPlugin.js
│   │   │   │   WarnNoModeSetPlugin.js
│   │   │   │   WatchIgnorePlugin.js
│   │   │   │   Watching.js
│   │   │   │   webpack.js
│   │   │   │   WebpackError.js
│   │   │   │   WebpackIsIncludedPlugin.js
│   │   │   │   WebpackOptionsApply.js
│   │   │   │   WebpackOptionsDefaulter.js
│   │   │   │
│   │   │   ├───asset
│   │   │   │       AssetGenerator.js
│   │   │   │       AssetModulesPlugin.js
│   │   │   │       AssetParser.js
│   │   │   │       AssetSourceGenerator.js
│   │   │   │       AssetSourceParser.js
│   │   │   │       RawDataUrlModule.js
│   │   │   │
│   │   │   ├───async-modules
│   │   │   │       AwaitDependenciesInitFragment.js
│   │   │   │       InferAsyncModulesPlugin.js
│   │   │   │
│   │   │   ├───cache
│   │   │   │       AddBuildDependenciesPlugin.js
│   │   │   │       AddManagedPathsPlugin.js
│   │   │   │       getLazyHashedEtag.js
│   │   │   │       IdleFileCachePlugin.js
│   │   │   │       MemoryCachePlugin.js
│   │   │   │       MemoryWithGcCachePlugin.js
│   │   │   │       mergeEtags.js
│   │   │   │       PackFileCacheStrategy.js
│   │   │   │       ResolverCachePlugin.js
│   │   │   │
│   │   │   ├───config
│   │   │   │       browserslistTargetHandler.js
│   │   │   │       defaults.js
│   │   │   │       normalization.js
│   │   │   │       target.js
│   │   │   │
│   │   │   ├───container
│   │   │   │       ContainerEntryDependency.js
│   │   │   │       ContainerEntryModule.js
│   │   │   │       ContainerEntryModuleFactory.js
│   │   │   │       ContainerExposedDependency.js
│   │   │   │       ContainerPlugin.js
│   │   │   │       ContainerReferencePlugin.js
│   │   │   │       FallbackDependency.js
│   │   │   │       FallbackItemDependency.js
│   │   │   │       FallbackModule.js
│   │   │   │       FallbackModuleFactory.js
│   │   │   │       HoistContainerReferencesPlugin.js
│   │   │   │       ModuleFederationPlugin.js
│   │   │   │       options.js
│   │   │   │       RemoteModule.js
│   │   │   │       RemoteRuntimeModule.js
│   │   │   │       RemoteToExternalDependency.js
│   │   │   │
│   │   │   ├───css
│   │   │   │       CssGenerator.js
│   │   │   │       CssLoadingRuntimeModule.js
│   │   │   │       CssModulesPlugin.js
│   │   │   │       CssParser.js
│   │   │   │       walkCssTokens.js
│   │   │   │
│   │   │   ├───debug
│   │   │   │       ProfilingPlugin.js
│   │   │   │
│   │   │   ├───dependencies
│   │   │   │       AMDDefineDependency.js
│   │   │   │       AMDDefineDependencyParserPlugin.js
│   │   │   │       AMDPlugin.js
│   │   │   │       AMDRequireArrayDependency.js
│   │   │   │       AMDRequireContextDependency.js
│   │   │   │       AMDRequireDependenciesBlock.js
│   │   │   │       AMDRequireDependenciesBlockParserPlugin.js
│   │   │   │       AMDRequireDependency.js
│   │   │   │       AMDRequireItemDependency.js
│   │   │   │       AMDRuntimeModules.js
│   │   │   │       CachedConstDependency.js
│   │   │   │       CommonJsDependencyHelpers.js
│   │   │   │       CommonJsExportRequireDependency.js
│   │   │   │       CommonJsExportsDependency.js
│   │   │   │       CommonJsExportsParserPlugin.js
│   │   │   │       CommonJsFullRequireDependency.js
│   │   │   │       CommonJsImportsParserPlugin.js
│   │   │   │       CommonJsPlugin.js
│   │   │   │       CommonJsRequireContextDependency.js
│   │   │   │       CommonJsRequireDependency.js
│   │   │   │       CommonJsSelfReferenceDependency.js
│   │   │   │       ConstDependency.js
│   │   │   │       ContextDependency.js
│   │   │   │       ContextDependencyHelpers.js
│   │   │   │       ContextDependencyTemplateAsId.js
│   │   │   │       ContextDependencyTemplateAsRequireCall.js
│   │   │   │       ContextElementDependency.js
│   │   │   │       CreateScriptUrlDependency.js
│   │   │   │       CriticalDependencyWarning.js
│   │   │   │       CssIcssExportDependency.js
│   │   │   │       CssIcssImportDependency.js
│   │   │   │       CssIcssSymbolDependency.js
│   │   │   │       CssImportDependency.js
│   │   │   │       CssLocalIdentifierDependency.js
│   │   │   │       CssSelfLocalIdentifierDependency.js
│   │   │   │       CssUrlDependency.js
│   │   │   │       DelegatedSourceDependency.js
│   │   │   │       DllEntryDependency.js
│   │   │   │       DynamicExports.js
│   │   │   │       EntryDependency.js
│   │   │   │       ExportsInfoDependency.js
│   │   │   │       ExternalModuleDependency.js
│   │   │   │       ExternalModuleInitFragment.js
│   │   │   │       getFunctionExpression.js
│   │   │   │       HarmonyAcceptDependency.js
│   │   │   │       HarmonyAcceptImportDependency.js
│   │   │   │       HarmonyCompatibilityDependency.js
│   │   │   │       HarmonyDetectionParserPlugin.js
│   │   │   │       HarmonyEvaluatedImportSpecifierDependency.js
│   │   │   │       HarmonyExportDependencyParserPlugin.js
│   │   │   │       HarmonyExportExpressionDependency.js
│   │   │   │       HarmonyExportHeaderDependency.js
│   │   │   │       HarmonyExportImportedSpecifierDependency.js
│   │   │   │       HarmonyExportInitFragment.js
│   │   │   │       HarmonyExports.js
│   │   │   │       HarmonyExportSpecifierDependency.js
│   │   │   │       HarmonyImportDependency.js
│   │   │   │       HarmonyImportDependencyParserPlugin.js
│   │   │   │       HarmonyImportSideEffectDependency.js
│   │   │   │       HarmonyImportSpecifierDependency.js
│   │   │   │       HarmonyModulesPlugin.js
│   │   │   │       HarmonyTopLevelThisParserPlugin.js
│   │   │   │       ImportContextDependency.js
│   │   │   │       ImportDependency.js
│   │   │   │       ImportEagerDependency.js
│   │   │   │       ImportMetaContextDependency.js
│   │   │   │       ImportMetaContextDependencyParserPlugin.js
│   │   │   │       ImportMetaContextPlugin.js
│   │   │   │       ImportMetaHotAcceptDependency.js
│   │   │   │       ImportMetaHotDeclineDependency.js
│   │   │   │       ImportMetaPlugin.js
│   │   │   │       ImportParserPlugin.js
│   │   │   │       ImportPlugin.js
│   │   │   │       ImportWeakDependency.js
│   │   │   │       JsonExportsDependency.js
│   │   │   │       LoaderDependency.js
│   │   │   │       LoaderImportDependency.js
│   │   │   │       LoaderPlugin.js
│   │   │   │       LocalModule.js
│   │   │   │       LocalModuleDependency.js
│   │   │   │       LocalModulesHelpers.js
│   │   │   │       ModuleDecoratorDependency.js
│   │   │   │       ModuleDependency.js
│   │   │   │       ModuleDependencyTemplateAsId.js
│   │   │   │       ModuleDependencyTemplateAsRequireId.js
│   │   │   │       ModuleHotAcceptDependency.js
│   │   │   │       ModuleHotDeclineDependency.js
│   │   │   │       NullDependency.js
│   │   │   │       PrefetchDependency.js
│   │   │   │       processExportInfo.js
│   │   │   │       ProvidedDependency.js
│   │   │   │       PureExpressionDependency.js
│   │   │   │       RequireContextDependency.js
│   │   │   │       RequireContextDependencyParserPlugin.js
│   │   │   │       RequireContextPlugin.js
│   │   │   │       RequireEnsureDependenciesBlock.js
│   │   │   │       RequireEnsureDependenciesBlockParserPlugin.js
│   │   │   │       RequireEnsureDependency.js
│   │   │   │       RequireEnsureItemDependency.js
│   │   │   │       RequireEnsurePlugin.js
│   │   │   │       RequireHeaderDependency.js
│   │   │   │       RequireIncludeDependency.js
│   │   │   │       RequireIncludeDependencyParserPlugin.js
│   │   │   │       RequireIncludePlugin.js
│   │   │   │       RequireResolveContextDependency.js
│   │   │   │       RequireResolveDependency.js
│   │   │   │       RequireResolveHeaderDependency.js
│   │   │   │       RuntimeRequirementsDependency.js
│   │   │   │       StaticExportsDependency.js
│   │   │   │       SystemPlugin.js
│   │   │   │       SystemRuntimeModule.js
│   │   │   │       UnsupportedDependency.js
│   │   │   │       URLDependency.js
│   │   │   │       URLPlugin.js
│   │   │   │       WebAssemblyExportImportedDependency.js
│   │   │   │       WebAssemblyImportDependency.js
│   │   │   │       WebpackIsIncludedDependency.js
│   │   │   │       WorkerDependency.js
│   │   │   │       WorkerPlugin.js
│   │   │   │
│   │   │   ├───electron
│   │   │   │       ElectronTargetPlugin.js
│   │   │   │
│   │   │   ├───errors
│   │   │   │       BuildCycleError.js
│   │   │   │
│   │   │   ├───esm
│   │   │   │       ExportWebpackRequireRuntimeModule.js
│   │   │   │       ModuleChunkFormatPlugin.js
│   │   │   │       ModuleChunkLoadingPlugin.js
│   │   │   │       ModuleChunkLoadingRuntimeModule.js
│   │   │   │
│   │   │   ├───hmr
│   │   │   │       HotModuleReplacement.runtime.js
│   │   │   │       HotModuleReplacementRuntimeModule.js
│   │   │   │       JavascriptHotModuleReplacement.runtime.js
│   │   │   │       lazyCompilationBackend.js
│   │   │   │       LazyCompilationPlugin.js
│   │   │   │
│   │   │   ├───ids
│   │   │   │       ChunkModuleIdRangePlugin.js
│   │   │   │       DeterministicChunkIdsPlugin.js
│   │   │   │       DeterministicModuleIdsPlugin.js
│   │   │   │       HashedModuleIdsPlugin.js
│   │   │   │       IdHelpers.js
│   │   │   │       NamedChunkIdsPlugin.js
│   │   │   │       NamedModuleIdsPlugin.js
│   │   │   │       NaturalChunkIdsPlugin.js
│   │   │   │       NaturalModuleIdsPlugin.js
│   │   │   │       OccurrenceChunkIdsPlugin.js
│   │   │   │       OccurrenceModuleIdsPlugin.js
│   │   │   │       SyncModuleIdsPlugin.js
│   │   │   │
│   │   │   ├───javascript
│   │   │   │       ArrayPushCallbackChunkFormatPlugin.js
│   │   │   │       BasicEvaluatedExpression.js
│   │   │   │       ChunkHelpers.js
│   │   │   │       CommonJsChunkFormatPlugin.js
│   │   │   │       EnableChunkLoadingPlugin.js
│   │   │   │       JavascriptGenerator.js
│   │   │   │       JavascriptModulesPlugin.js
│   │   │   │       JavascriptParser.js
│   │   │   │       JavascriptParserHelpers.js
│   │   │   │       StartupHelpers.js
│   │   │   │
│   │   │   ├───json
│   │   │   │       JsonData.js
│   │   │   │       JsonGenerator.js
│   │   │   │       JsonModulesPlugin.js
│   │   │   │       JsonParser.js
│   │   │   │
│   │   │   ├───library
│   │   │   │       AbstractLibraryPlugin.js
│   │   │   │       AmdLibraryPlugin.js
│   │   │   │       AssignLibraryPlugin.js
│   │   │   │       EnableLibraryPlugin.js
│   │   │   │       ExportPropertyLibraryPlugin.js
│   │   │   │       JsonpLibraryPlugin.js
│   │   │   │       ModuleLibraryPlugin.js
│   │   │   │       SystemLibraryPlugin.js
│   │   │   │       UmdLibraryPlugin.js
│   │   │   │
│   │   │   ├───logging
│   │   │   │       createConsoleLogger.js
│   │   │   │       Logger.js
│   │   │   │       runtime.js
│   │   │   │       truncateArgs.js
│   │   │   │
│   │   │   ├───node
│   │   │   │       CommonJsChunkLoadingPlugin.js
│   │   │   │       nodeConsole.js
│   │   │   │       NodeEnvironmentPlugin.js
│   │   │   │       NodeSourcePlugin.js
│   │   │   │       NodeTargetPlugin.js
│   │   │   │       NodeTemplatePlugin.js
│   │   │   │       NodeWatchFileSystem.js
│   │   │   │       ReadFileChunkLoadingRuntimeModule.js
│   │   │   │       ReadFileCompileAsyncWasmPlugin.js
│   │   │   │       ReadFileCompileWasmPlugin.js
│   │   │   │       RequireChunkLoadingRuntimeModule.js
│   │   │   │
│   │   │   ├───optimize
│   │   │   │       AggressiveMergingPlugin.js
│   │   │   │       AggressiveSplittingPlugin.js
│   │   │   │       ConcatenatedModule.js
│   │   │   │       EnsureChunkConditionsPlugin.js
│   │   │   │       FlagIncludedChunksPlugin.js
│   │   │   │       InnerGraph.js
│   │   │   │       InnerGraphPlugin.js
│   │   │   │       LimitChunkCountPlugin.js
│   │   │   │       MangleExportsPlugin.js
│   │   │   │       MergeDuplicateChunksPlugin.js
│   │   │   │       MinChunkSizePlugin.js
│   │   │   │       MinMaxSizeWarning.js
│   │   │   │       ModuleConcatenationPlugin.js
│   │   │   │       RealContentHashPlugin.js
│   │   │   │       RemoveEmptyChunksPlugin.js
│   │   │   │       RemoveParentModulesPlugin.js
│   │   │   │       RuntimeChunkPlugin.js
│   │   │   │       SideEffectsFlagPlugin.js
│   │   │   │       SplitChunksPlugin.js
│   │   │   │
│   │   │   ├───performance
│   │   │   │       AssetsOverSizeLimitWarning.js
│   │   │   │       EntrypointsOverSizeLimitWarning.js
│   │   │   │       NoAsyncChunksWarning.js
│   │   │   │       SizeLimitsPlugin.js
│   │   │   │
│   │   │   ├───prefetch
│   │   │   │       ChunkPrefetchFunctionRuntimeModule.js
│   │   │   │       ChunkPrefetchPreloadPlugin.js
│   │   │   │       ChunkPrefetchStartupRuntimeModule.js
│   │   │   │       ChunkPrefetchTriggerRuntimeModule.js
│   │   │   │       ChunkPreloadTriggerRuntimeModule.js
│   │   │   │
│   │   │   ├───rules
│   │   │   │       BasicEffectRulePlugin.js
│   │   │   │       BasicMatcherRulePlugin.js
│   │   │   │       ObjectMatcherRulePlugin.js
│   │   │   │       RuleSetCompiler.js
│   │   │   │       UseEffectRulePlugin.js
│   │   │   │
│   │   │   ├───runtime
│   │   │   │       AsyncModuleRuntimeModule.js
│   │   │   │       AutoPublicPathRuntimeModule.js
│   │   │   │       BaseUriRuntimeModule.js
│   │   │   │       ChunkNameRuntimeModule.js
│   │   │   │       CompatGetDefaultExportRuntimeModule.js
│   │   │   │       CompatRuntimeModule.js
│   │   │   │       CreateFakeNamespaceObjectRuntimeModule.js
│   │   │   │       CreateScriptRuntimeModule.js
│   │   │   │       CreateScriptUrlRuntimeModule.js
│   │   │   │       DefinePropertyGettersRuntimeModule.js
│   │   │   │       EnsureChunkRuntimeModule.js
│   │   │   │       GetChunkFilenameRuntimeModule.js
│   │   │   │       GetFullHashRuntimeModule.js
│   │   │   │       GetMainFilenameRuntimeModule.js
│   │   │   │       GetTrustedTypesPolicyRuntimeModule.js
│   │   │   │       GlobalRuntimeModule.js
│   │   │   │       HasOwnPropertyRuntimeModule.js
│   │   │   │       HelperRuntimeModule.js
│   │   │   │       LoadScriptRuntimeModule.js
│   │   │   │       MakeNamespaceObjectRuntimeModule.js
│   │   │   │       NonceRuntimeModule.js
│   │   │   │       OnChunksLoadedRuntimeModule.js
│   │   │   │       PublicPathRuntimeModule.js
│   │   │   │       RelativeUrlRuntimeModule.js
│   │   │   │       RuntimeIdRuntimeModule.js
│   │   │   │       StartupChunkDependenciesPlugin.js
│   │   │   │       StartupChunkDependenciesRuntimeModule.js
│   │   │   │       StartupEntrypointRuntimeModule.js
│   │   │   │       SystemContextRuntimeModule.js
│   │   │   │
│   │   │   ├───schemes
│   │   │   │       DataUriPlugin.js
│   │   │   │       FileUriPlugin.js
│   │   │   │       HttpUriPlugin.js
│   │   │   │
│   │   │   ├───serialization
│   │   │   │       AggregateErrorSerializer.js
│   │   │   │       ArraySerializer.js
│   │   │   │       BinaryMiddleware.js
│   │   │   │       DateObjectSerializer.js
│   │   │   │       ErrorObjectSerializer.js
│   │   │   │       FileMiddleware.js
│   │   │   │       MapObjectSerializer.js
│   │   │   │       NullPrototypeObjectSerializer.js
│   │   │   │       ObjectMiddleware.js
│   │   │   │       PlainObjectSerializer.js
│   │   │   │       RegExpObjectSerializer.js
│   │   │   │       Serializer.js
│   │   │   │       SerializerMiddleware.js
│   │   │   │       SetObjectSerializer.js
│   │   │   │       SingleItemMiddleware.js
│   │   │   │       types.js
│   │   │   │
│   │   │   ├───sharing
│   │   │   │       ConsumeSharedFallbackDependency.js
│   │   │   │       ConsumeSharedModule.js
│   │   │   │       ConsumeSharedPlugin.js
│   │   │   │       ConsumeSharedRuntimeModule.js
│   │   │   │       ProvideForSharedDependency.js
│   │   │   │       ProvideSharedDependency.js
│   │   │   │       ProvideSharedModule.js
│   │   │   │       ProvideSharedModuleFactory.js
│   │   │   │       ProvideSharedPlugin.js
│   │   │   │       resolveMatchedConfigs.js
│   │   │   │       SharePlugin.js
│   │   │   │       ShareRuntimeModule.js
│   │   │   │       utils.js
│   │   │   │
│   │   │   ├───stats
│   │   │   │       DefaultStatsFactoryPlugin.js
│   │   │   │       DefaultStatsPresetPlugin.js
│   │   │   │       DefaultStatsPrinterPlugin.js
│   │   │   │       StatsFactory.js
│   │   │   │       StatsPrinter.js
│   │   │   │
│   │   │   ├───util
│   │   │   │   │   ArrayHelpers.js
│   │   │   │   │   ArrayQueue.js
│   │   │   │   │   AsyncQueue.js
│   │   │   │   │   binarySearchBounds.js
│   │   │   │   │   chainedImports.js
│   │   │   │   │   cleverMerge.js
│   │   │   │   │   comparators.js
│   │   │   │   │   compileBooleanMatcher.js
│   │   │   │   │   concatenate.js
│   │   │   │   │   conventions.js
│   │   │   │   │   create-schema-validation.js
│   │   │   │   │   createHash.js
│   │   │   │   │   deprecation.js
│   │   │   │   │   deterministicGrouping.js
│   │   │   │   │   extractUrlAndGlobal.js
│   │   │   │   │   findGraphRoots.js
│   │   │   │   │   fs.js
│   │   │   │   │   generateDebugId.js
│   │   │   │   │   Hash.js
│   │   │   │   │   identifier.js
│   │   │   │   │   internalSerializables.js
│   │   │   │   │   IterableHelpers.js
│   │   │   │   │   LazyBucketSortedSet.js
│   │   │   │   │   LazySet.js
│   │   │   │   │   magicComment.js
│   │   │   │   │   makeSerializable.js
│   │   │   │   │   MapHelpers.js
│   │   │   │   │   memoize.js
│   │   │   │   │   nonNumericOnlyHash.js
│   │   │   │   │   numberHash.js
│   │   │   │   │   objectToMap.js
│   │   │   │   │   ParallelismFactorCalculator.js
│   │   │   │   │   processAsyncTree.js
│   │   │   │   │   propertyAccess.js
│   │   │   │   │   propertyName.js
│   │   │   │   │   Queue.js
│   │   │   │   │   registerExternalSerializer.js
│   │   │   │   │   removeBOM.js
│   │   │   │   │   runtime.js
│   │   │   │   │   Semaphore.js
│   │   │   │   │   semver.js
│   │   │   │   │   serialization.js
│   │   │   │   │   SetHelpers.js
│   │   │   │   │   smartGrouping.js
│   │   │   │   │   SortableSet.js
│   │   │   │   │   source.js
│   │   │   │   │   StackedCacheMap.js
│   │   │   │   │   StackedMap.js
│   │   │   │   │   StringXor.js
│   │   │   │   │   TupleQueue.js
│   │   │   │   │   TupleSet.js
│   │   │   │   │   URLAbsoluteSpecifier.js
│   │   │   │   │   WeakTupleMap.js
│   │   │   │   │
│   │   │   │   └───hash
│   │   │   │           BatchedHash.js
│   │   │   │           md4.js
│   │   │   │           wasm-hash.js
│   │   │   │           xxhash64.js
│   │   │   │
│   │   │   ├───wasm
│   │   │   │       EnableWasmLoadingPlugin.js
│   │   │   │
│   │   │   ├───wasm-async
│   │   │   │       AsyncWasmLoadingRuntimeModule.js
│   │   │   │       AsyncWebAssemblyGenerator.js
│   │   │   │       AsyncWebAssemblyJavascriptGenerator.js
│   │   │   │       AsyncWebAssemblyModulesPlugin.js
│   │   │   │       AsyncWebAssemblyParser.js
│   │   │   │       UniversalCompileAsyncWasmPlugin.js
│   │   │   │
│   │   │   ├───wasm-sync
│   │   │   │       UnsupportedWebAssemblyFeatureError.js
│   │   │   │       WasmChunkLoadingRuntimeModule.js
│   │   │   │       WasmFinalizeExportsPlugin.js
│   │   │   │       WebAssemblyGenerator.js
│   │   │   │       WebAssemblyInInitialChunkError.js
│   │   │   │       WebAssemblyJavascriptGenerator.js
│   │   │   │       WebAssemblyModulesPlugin.js
│   │   │   │       WebAssemblyParser.js
│   │   │   │       WebAssemblyUtils.js
│   │   │   │
│   │   │   ├───web
│   │   │   │       FetchCompileAsyncWasmPlugin.js
│   │   │   │       FetchCompileWasmPlugin.js
│   │   │   │       JsonpChunkLoadingPlugin.js
│   │   │   │       JsonpChunkLoadingRuntimeModule.js
│   │   │   │       JsonpTemplatePlugin.js
│   │   │   │
│   │   │   └───webworker
│   │   │           ImportScriptsChunkLoadingPlugin.js
│   │   │           ImportScriptsChunkLoadingRuntimeModule.js
│   │   │           WebWorkerTemplatePlugin.js
│   │   │
│   │   └───schemas
│   │       │   WebpackOptions.check.d.ts
│   │       │   WebpackOptions.check.js
│   │       │   WebpackOptions.json
│   │       │   _container.json
│   │       │   _sharing.json
│   │       │
│   │       └───plugins
│   │           │   BannerPlugin.check.d.ts
│   │           │   BannerPlugin.check.js
│   │           │   BannerPlugin.json
│   │           │   DllPlugin.check.d.ts
│   │           │   DllPlugin.check.js
│   │           │   DllPlugin.json
│   │           │   DllReferencePlugin.check.d.ts
│   │           │   DllReferencePlugin.check.js
│   │           │   DllReferencePlugin.json
│   │           │   HashedModuleIdsPlugin.check.d.ts
│   │           │   HashedModuleIdsPlugin.check.js
│   │           │   HashedModuleIdsPlugin.json
│   │           │   IgnorePlugin.check.d.ts
│   │           │   IgnorePlugin.check.js
│   │           │   IgnorePlugin.json
│   │           │   LoaderOptionsPlugin.check.d.ts
│   │           │   LoaderOptionsPlugin.check.js
│   │           │   LoaderOptionsPlugin.json
│   │           │   ProgressPlugin.check.d.ts
│   │           │   ProgressPlugin.check.js
│   │           │   ProgressPlugin.json
│   │           │   SourceMapDevToolPlugin.check.d.ts
│   │           │   SourceMapDevToolPlugin.check.js
│   │           │   SourceMapDevToolPlugin.json
│   │           │   WatchIgnorePlugin.check.d.ts
│   │           │   WatchIgnorePlugin.check.js
│   │           │   WatchIgnorePlugin.json
│   │           │
│   │           ├───asset
│   │           │       AssetGeneratorOptions.check.d.ts
│   │           │       AssetGeneratorOptions.check.js
│   │           │       AssetGeneratorOptions.json
│   │           │       AssetInlineGeneratorOptions.check.d.ts
│   │           │       AssetInlineGeneratorOptions.check.js
│   │           │       AssetInlineGeneratorOptions.json
│   │           │       AssetParserOptions.check.d.ts
│   │           │       AssetParserOptions.check.js
│   │           │       AssetParserOptions.json
│   │           │       AssetResourceGeneratorOptions.check.d.ts
│   │           │       AssetResourceGeneratorOptions.check.js
│   │           │       AssetResourceGeneratorOptions.json
│   │           │
│   │           ├───container
│   │           │       ContainerPlugin.check.d.ts
│   │           │       ContainerPlugin.check.js
│   │           │       ContainerPlugin.json
│   │           │       ContainerReferencePlugin.check.d.ts
│   │           │       ContainerReferencePlugin.check.js
│   │           │       ContainerReferencePlugin.json
│   │           │       ExternalsType.check.d.ts
│   │           │       ExternalsType.check.js
│   │           │       ExternalsType.json
│   │           │       ModuleFederationPlugin.check.d.ts
│   │           │       ModuleFederationPlugin.check.js
│   │           │       ModuleFederationPlugin.json
│   │           │
│   │           ├───css
│   │           │       CssAutoGeneratorOptions.check.d.ts
│   │           │       CssAutoGeneratorOptions.check.js
│   │           │       CssAutoGeneratorOptions.json
│   │           │       CssAutoParserOptions.check.d.ts
│   │           │       CssAutoParserOptions.check.js
│   │           │       CssAutoParserOptions.json
│   │           │       CssGeneratorOptions.check.d.ts
│   │           │       CssGeneratorOptions.check.js
│   │           │       CssGeneratorOptions.json
│   │           │       CssGlobalGeneratorOptions.check.d.ts
│   │           │       CssGlobalGeneratorOptions.check.js
│   │           │       CssGlobalGeneratorOptions.json
│   │           │       CssGlobalParserOptions.check.d.ts
│   │           │       CssGlobalParserOptions.check.js
│   │           │       CssGlobalParserOptions.json
│   │           │       CssModuleGeneratorOptions.check.d.ts
│   │           │       CssModuleGeneratorOptions.check.js
│   │           │       CssModuleGeneratorOptions.json
│   │           │       CssModuleParserOptions.check.d.ts
│   │           │       CssModuleParserOptions.check.js
│   │           │       CssModuleParserOptions.json
│   │           │       CssParserOptions.check.d.ts
│   │           │       CssParserOptions.check.js
│   │           │       CssParserOptions.json
│   │           │
│   │           ├───debug
│   │           │       ProfilingPlugin.check.d.ts
│   │           │       ProfilingPlugin.check.js
│   │           │       ProfilingPlugin.json
│   │           │
│   │           ├───ids
│   │           │       OccurrenceChunkIdsPlugin.check.d.ts
│   │           │       OccurrenceChunkIdsPlugin.check.js
│   │           │       OccurrenceChunkIdsPlugin.json
│   │           │       OccurrenceModuleIdsPlugin.check.d.ts
│   │           │       OccurrenceModuleIdsPlugin.check.js
│   │           │       OccurrenceModuleIdsPlugin.json
│   │           │
│   │           ├───json
│   │           │       JsonModulesPluginGenerator.check.d.ts
│   │           │       JsonModulesPluginGenerator.check.js
│   │           │       JsonModulesPluginGenerator.json
│   │           │       JsonModulesPluginParser.check.d.ts
│   │           │       JsonModulesPluginParser.check.js
│   │           │       JsonModulesPluginParser.json
│   │           │
│   │           ├───optimize
│   │           │       AggressiveSplittingPlugin.check.d.ts
│   │           │       AggressiveSplittingPlugin.check.js
│   │           │       AggressiveSplittingPlugin.json
│   │           │       LimitChunkCountPlugin.check.d.ts
│   │           │       LimitChunkCountPlugin.check.js
│   │           │       LimitChunkCountPlugin.json
│   │           │       MergeDuplicateChunksPlugin.check.d.ts
│   │           │       MergeDuplicateChunksPlugin.check.js
│   │           │       MergeDuplicateChunksPlugin.json
│   │           │       MinChunkSizePlugin.check.d.ts
│   │           │       MinChunkSizePlugin.check.js
│   │           │       MinChunkSizePlugin.json
│   │           │
│   │           ├───schemes
│   │           │       HttpUriPlugin.check.d.ts
│   │           │       HttpUriPlugin.check.js
│   │           │       HttpUriPlugin.json
│   │           │
│   │           └───sharing
│   │                   ConsumeSharedPlugin.check.d.ts
│   │                   ConsumeSharedPlugin.check.js
│   │                   ConsumeSharedPlugin.json
│   │                   ProvideSharedPlugin.check.d.ts
│   │                   ProvideSharedPlugin.check.js
│   │                   ProvideSharedPlugin.json
│   │                   SharePlugin.check.d.ts
│   │                   SharePlugin.check.js
│   │                   SharePlugin.json
│   │
│   ├───webpack-cli
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───bin
│   │   │       cli.js
│   │   │
│   │   ├───lib
│   │   │   │   bootstrap.d.ts
│   │   │   │   bootstrap.js
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   types.d.ts
│   │   │   │   types.js
│   │   │   │   webpack-cli.d.ts
│   │   │   │   webpack-cli.js
│   │   │   │
│   │   │   ├───plugins
│   │   │   │       cli-plugin.d.ts
│   │   │   │       cli-plugin.js
│   │   │   │
│   │   │   └───utils
│   │   │           dynamic-import-loader.d.ts
│   │   │           dynamic-import-loader.js
│   │   │
│   │   └───node_modules
│   │       └───commander
│   │           │   esm.mjs
│   │           │   index.js
│   │           │   LICENSE
│   │           │   package-support.json
│   │           │   package.json
│   │           │   Readme.md
│   │           │
│   │           ├───lib
│   │           │       argument.js
│   │           │       command.js
│   │           │       error.js
│   │           │       help.js
│   │           │       option.js
│   │           │       suggestSimilar.js
│   │           │
│   │           └───typings
│   │                   esm.d.mts
│   │                   index.d.ts
│   │
│   ├───webpack-dev-middleware
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │   │   index.js
│   │   │   │   middleware.js
│   │   │   │   options.json
│   │   │   │
│   │   │   └───utils
│   │   │           compatibleAPI.js
│   │   │           escapeHtml.js
│   │   │           etag.js
│   │   │           getFilenameFromUrl.js
│   │   │           getPaths.js
│   │   │           memorize.js
│   │   │           parseTokenList.js
│   │   │           ready.js
│   │   │           setupHooks.js
│   │   │           setupOutputFileSystem.js
│   │   │           setupWriteToDisk.js
│   │   │
│   │   └───types
│   │       │   index.d.ts
│   │       │   middleware.d.ts
│   │       │
│   │       └───utils
│   │               compatibleAPI.d.ts
│   │               escapeHtml.d.ts
│   │               etag.d.ts
│   │               getFilenameFromUrl.d.ts
│   │               getPaths.d.ts
│   │               memorize.d.ts
│   │               parseTokenList.d.ts
│   │               ready.d.ts
│   │               setupHooks.d.ts
│   │               setupOutputFileSystem.d.ts
│   │               setupWriteToDisk.d.ts
│   │
│   ├───webpack-dev-server
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───bin
│   │   │       cli-flags.js
│   │   │       webpack-dev-server.js
│   │   │
│   │   ├───client
│   │   │   │   index.js
│   │   │   │   overlay.js
│   │   │   │   progress.js
│   │   │   │   socket.js
│   │   │   │
│   │   │   ├───clients
│   │   │   │       SockJSClient.js
│   │   │   │       WebSocketClient.js
│   │   │   │
│   │   │   ├───modules
│   │   │   │   ├───logger
│   │   │   │   │       index.js
│   │   │   │   │
│   │   │   │   └───sockjs-client
│   │   │   │           index.js
│   │   │   │
│   │   │   └───utils
│   │   │           log.js
│   │   │           sendMessage.js
│   │   │
│   │   ├───lib
│   │   │   │   getPort.js
│   │   │   │   options.json
│   │   │   │   Server.js
│   │   │   │
│   │   │   └───servers
│   │   │           BaseServer.js
│   │   │           SockJSServer.js
│   │   │           WebsocketServer.js
│   │   │
│   │   └───types
│   │       ├───bin
│   │       │       cli-flags.d.ts
│   │       │       webpack-dev-server.d.ts
│   │       │
│   │       └───lib
│   │           │   getPort.d.ts
│   │           │   Server.d.ts
│   │           │
│   │           └───servers
│   │                   BaseServer.d.ts
│   │                   SockJSServer.d.ts
│   │                   WebsocketServer.d.ts
│   │
│   ├───webpack-merge
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │           index.d.ts
│   │           index.js
│   │           index.js.map
│   │           join-arrays.d.ts
│   │           join-arrays.js
│   │           join-arrays.js.map
│   │           merge-with.d.ts
│   │           merge-with.js
│   │           merge-with.js.map
│   │           types.d.ts
│   │           types.js
│   │           types.js.map
│   │           unique.d.ts
│   │           unique.js
│   │           unique.js.map
│   │           utils.d.ts
│   │           utils.js
│   │           utils.js.map
│   │
│   ├───webpack-sources
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │       │   CachedSource.js
│   │       │   CompatSource.js
│   │       │   ConcatSource.js
│   │       │   index.js
│   │       │   OriginalSource.js
│   │       │   PrefixSource.js
│   │       │   RawSource.js
│   │       │   ReplaceSource.js
│   │       │   SizeOnlySource.js
│   │       │   Source.js
│   │       │   SourceMapSource.js
│   │       │
│   │       └───helpers
│   │               createMappingsSerializer.js
│   │               getFromStreamChunks.js
│   │               getGeneratedSourceInfo.js
│   │               getName.js
│   │               getSource.js
│   │               readMappings.js
│   │               splitIntoLines.js
│   │               splitIntoPotentialTokens.js
│   │               streamAndGetSourceAndMap.js
│   │               streamChunks.js
│   │               streamChunksOfCombinedSourceMap.js
│   │               streamChunksOfRawSource.js
│   │               streamChunksOfSourceMap.js
│   │
│   ├───websocket-driver
│   │   │   CHANGELOG.md
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │       └───websocket
│   │           │   driver.js
│   │           │   http_parser.js
│   │           │   streams.js
│   │           │
│   │           └───driver
│   │               │   base.js
│   │               │   client.js
│   │               │   draft75.js
│   │               │   draft76.js
│   │               │   headers.js
│   │               │   hybi.js
│   │               │   proxy.js
│   │               │   server.js
│   │               │   stream_reader.js
│   │               │
│   │               └───hybi
│   │                       frame.js
│   │                       message.js
│   │
│   ├───websocket-extensions
│   │   │   CHANGELOG.md
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │       │   parser.js
│   │       │   websocket_extensions.js
│   │       │
│   │       └───pipeline
│   │               cell.js
│   │               functor.js
│   │               index.js
│   │               pledge.js
│   │               README.md
│   │               ring_buffer.js
│   │
│   ├───which
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   which.js
│   │   │
│   │   └───bin
│   │           node-which
│   │
│   ├───wildcard
│   │   │   docs.json
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │   └───workflows
│   │   │           build.yml
│   │   │
│   │   ├───examples
│   │   │       arrays.js
│   │   │       objects.js
│   │   │       strings.js
│   │   │
│   │   └───test
│   │           all.js
│   │           arrays.js
│   │           objects.js
│   │           strings.js
│   │
│   ├───ws
│   │   │   browser.js
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   wrapper.mjs
│   │   │
│   │   └───lib
│   │           buffer-util.js
│   │           constants.js
│   │           event-target.js
│   │           extension.js
│   │           limiter.js
│   │           permessage-deflate.js
│   │           receiver.js
│   │           sender.js
│   │           stream.js
│   │           subprotocol.js
│   │           validation.js
│   │           websocket-server.js
│   │           websocket.js
│   │
│   ├───yallist
│   │       iterator.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       yallist.js
│   │
│   └───yocto-queue
│           index.d.ts
│           index.js
│           license
│           package.json
│           readme.md
│
├───public
│   │   index.html
│   │   style.css
│   │   umkm-logo.png
│   │
│   └───images
│           ilustrasi.png
│           logo.png
│
└───src
    │   App.js
    │   index.css
    │   index.js
    │
    ├───assets
    │   └───styles
    │           style.css
    │
    ├───components
    │       ExampleComponent.js
    │       Footer.js
    │       Layout.js
    │       Navbar.js
    │       PrivateRoute.js
    │       SlideoutMenu.js
    │
    ├───pages
    │       About.js
    │       Dashboard.js
    │       DashboardPerbankan.js
    │       DashboardUMKM.js
    │       EditProfile.js
    │       Home.js
    │       LandingPage.js
    │       Login.js
    │       LoginPerbankan.js
    │       LoginUMKM.js
    │       Profile.js
    │       Register.js
    │
    ├───services
    │       api.js
    │
    └───styles
            animations.css
