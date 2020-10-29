(function() {var implementors = {};
implementors["frontier_consensus"] = [{"text":"impl&lt;B, I, C&gt; UnwindSafe for FrontierBlockImport&lt;B, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["frontier_consensus_primitives"] = [{"text":"impl UnwindSafe for ConsensusLog","synthetic":true,"types":[]}];
implementors["frontier_rpc"] = [{"text":"impl&lt;B, C, P, CT, BE, H&gt; !UnwindSafe for EthApi&lt;B, C, P, CT, BE, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, BE, C&gt; UnwindSafe for NetApi&lt;B, BE, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, P, C, BE, H&gt; !UnwindSafe for EthPubSubApi&lt;B, P, C, BE, H&gt;","synthetic":true,"types":[]}];
implementors["frontier_rpc_core"] = [{"text":"impl UnwindSafe for AccountInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtAccountInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EthAccount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageProof","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RecoveredAccount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bytes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Block","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Rich&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CallRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Filter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Index","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Log","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Receipt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SyncInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Peers","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PeerInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PeerNetworkInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PeerProtocolsInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionStats","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChainStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EthProtocolInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PipProtocolInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Transaction","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RichRawTransaction","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Work","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockTransactions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockNumber","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FilterChanges","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for VariadicValue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SyncStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocalTransactionStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionCondition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PubSubSyncStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Result","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Kind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Params","synthetic":true,"types":[]}];
implementors["frontier_rpc_primitives"] = [{"text":"impl UnwindSafe for TransactionStatus","synthetic":true,"types":[]}];
implementors["frontier_template_node"] = [{"text":"impl UnwindSafe for Executor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MockTimestampInherentDataProvider","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ConsensusResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RunCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cli","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sealing","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Subcommand","synthetic":true,"types":[]},{"text":"impl&lt;C, F, P&gt; !UnwindSafe for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P&gt; !UnwindSafe for FullDeps&lt;C, P&gt;","synthetic":true,"types":[]}];
implementors["frontier_template_runtime"] = [{"text":"impl UnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChainId","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionConverter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !UnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SessionKeys","synthetic":true,"types":[]}];
implementors["frontier_template_test_client"] = [{"text":"impl UnwindSafe for LocalExecutor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenesisParameters","synthetic":true,"types":[]}];
implementors["pallet_ethereum"] = [{"text":"impl UnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReturnValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()