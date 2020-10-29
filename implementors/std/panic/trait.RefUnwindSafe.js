(function() {var implementors = {};
implementors["frontier_consensus"] = [{"text":"impl&lt;B, I, C&gt; RefUnwindSafe for FrontierBlockImport&lt;B, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["frontier_consensus_primitives"] = [{"text":"impl RefUnwindSafe for ConsensusLog","synthetic":true,"types":[]}];
implementors["frontier_rpc"] = [{"text":"impl&lt;B, C, P, CT, BE, H&gt; !RefUnwindSafe for EthApi&lt;B, C, P, CT, BE, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, BE, C&gt; RefUnwindSafe for NetApi&lt;B, BE, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, P, C, BE, H&gt; !RefUnwindSafe for EthPubSubApi&lt;B, P, C, BE, H&gt;","synthetic":true,"types":[]}];
implementors["frontier_rpc_core"] = [{"text":"impl RefUnwindSafe for AccountInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtAccountInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EthAccount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageProof","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RecoveredAccount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bytes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Block","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Rich&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CallRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Filter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Index","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Log","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Receipt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SyncInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Peers","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerNetworkInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PeerProtocolsInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionStats","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChainStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EthProtocolInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PipProtocolInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Transaction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RichRawTransaction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Work","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BlockTransactions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BlockNumber","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FilterChanges","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for VariadicValue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SyncStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LocalTransactionStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionCondition","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PubSubSyncStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Result","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Kind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Params","synthetic":true,"types":[]}];
implementors["frontier_rpc_primitives"] = [{"text":"impl RefUnwindSafe for TransactionStatus","synthetic":true,"types":[]}];
implementors["frontier_template_node"] = [{"text":"impl RefUnwindSafe for Executor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MockTimestampInherentDataProvider","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ConsensusResult","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RunCmd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Cli","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sealing","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Subcommand","synthetic":true,"types":[]},{"text":"impl&lt;C, F, P&gt; !RefUnwindSafe for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P&gt; !RefUnwindSafe for FullDeps&lt;C, P&gt;","synthetic":true,"types":[]}];
implementors["frontier_template_runtime"] = [{"text":"impl RefUnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChainId","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransactionConverter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !RefUnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionKeys","synthetic":true,"types":[]}];
implementors["frontier_template_test_client"] = [{"text":"impl RefUnwindSafe for LocalExecutor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenesisParameters","synthetic":true,"types":[]}];
implementors["pallet_ethereum"] = [{"text":"impl RefUnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReturnValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()