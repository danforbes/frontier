(function() {var implementors = {};
implementors["frontier_consensus"] = [{"text":"impl&lt;Block:&nbsp;BlockT, I:&nbsp;Clone + BlockImport&lt;Block&gt;, C&gt; Clone for FrontierBlockImport&lt;Block, I, C&gt;","synthetic":false,"types":[]}];
implementors["frontier_consensus_primitives"] = [{"text":"impl Clone for ConsensusLog","synthetic":false,"types":[]}];
implementors["frontier_rpc_core"] = [{"text":"impl Clone for AccountInfo","synthetic":false,"types":[]},{"text":"impl Clone for StorageProof","synthetic":false,"types":[]},{"text":"impl Clone for EthAccount","synthetic":false,"types":[]},{"text":"impl Clone for ExtAccountInfo","synthetic":false,"types":[]},{"text":"impl Clone for RecoveredAccount","synthetic":false,"types":[]},{"text":"impl Clone for Header","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Rich&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for BlockNumber","synthetic":false,"types":[]},{"text":"impl Clone for Bytes","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for VariadicValue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for Filter","synthetic":false,"types":[]},{"text":"impl Clone for Log","synthetic":false,"types":[]},{"text":"impl Clone for Transaction","synthetic":false,"types":[]},{"text":"impl Clone for RichRawTransaction","synthetic":false,"types":[]},{"text":"impl Clone for TransactionRequest","synthetic":false,"types":[]},{"text":"impl Clone for TransactionCondition","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for PubSubSyncStatus","synthetic":false,"types":[]},{"text":"impl Clone for Kind","synthetic":false,"types":[]},{"text":"impl Clone for Params","synthetic":false,"types":[]}];
implementors["frontier_rpc_primitives"] = [{"text":"impl Clone for TransactionStatus","synthetic":false,"types":[]}];
implementors["frontier_template_node"] = [{"text":"impl Clone for Sealing","synthetic":false,"types":[]}];
implementors["frontier_template_runtime"] = [{"text":"impl Clone for SessionKeys","synthetic":false,"types":[]},{"text":"impl Clone for Runtime","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Origin","synthetic":false,"types":[]},{"text":"impl Clone for OriginCaller","synthetic":false,"types":[]},{"text":"impl Clone for Call","synthetic":false,"types":[]}];
implementors["pallet_ethereum"] = [{"text":"impl Clone for ReturnValue","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Trait&gt; Clone for Module&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()