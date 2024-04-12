import { ContractFactory } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Quoter, QuoterInterface } from "../Quoter";
type QuoterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Quoter__factory extends ContractFactory {
    constructor(...args: QuoterConstructorParams);
    getDeployTransaction(_uniV3Factory: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_uniV3Factory: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Quoter & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Quoter__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620028b4380380620028b483398101604081905262000034916200005a565b600080546001600160a01b0319166001600160a01b03929092169190911790556200008c565b6000602082840312156200006d57600080fd5b81516001600160a01b03811681146200008557600080fd5b9392505050565b612818806200009c6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632a8895ff14610046578063585b87ee1461006e57806386ed50b11461008f575b600080fd5b61005961005436600461210c565b6100a2565b60405190151581526020015b60405180910390f35b61008161007c366004612156565b610265565b604051908152602001610065565b61008161009d366004612156565b6102f5565b60008054604051630b4c774160e11b815282916001600160a01b031690631698ee82906100d990879087906101f4906004016121a9565b602060405180830381865afa1580156100f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011a91906121d1565b90506001600160a01b0381161561013557600191505061025f565b600054604051630b4c774160e11b81526001600160a01b0390911690631698ee829061016b9087908790610bb8906004016121a9565b602060405180830381865afa158015610188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ac91906121d1565b90506001600160a01b038116156101c757600191505061025f565b600054604051630b4c774160e11b81526001600160a01b0390911690631698ee82906101fd9087908790612710906004016121a9565b602060405180830381865afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e91906121d1565b90506001600160a01b0381161561025957600191505061025f565b60009150505b92915050565b60008054604051630b4c774160e11b815282916001600160a01b031690631698ee829061029a908990899088906004016121a9565b602060405180830381865afa1580156102b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102db91906121d1565b90506102e985878684610379565b9150505b949350505050565b60008054604051630b4c774160e11b815282916001600160a01b031690631698ee829061032a908990899088906004016121a9565b602060405180830381865afa158015610347573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036b91906121d1565b90506102e98686868461041f565b60006001600160a01b038085169086161181806103d08587856103ba576103b5600173fffd8963efd1fc6a506488495d951d5263988d26612204565b6103ca565b6103ca6401000276a3600161222c565b866104a2565b9150915082156103f957600081136103f0576103eb81612257565b6103f2565b805b9350610414565b6000821361040f5761040a82612257565b610411565b815b93505b505050949350505050565b60006001600160a01b038085169086161081806104638561043f88612257565b856103ba576103b5600173fffd8963efd1fc6a506488495d951d5263988d26612204565b915091508215610486576000821361047e576103eb82612257565b819350610414565b600081136104975761040a81612257565b979650505050505050565b600080808513816104b28861052f565b90506000806000806104c6858c8c8c61075e565b9250925092505b8251158015906104ef5750896001600160a01b0316816001600160a01b031614155b15610511576105048c868584868f8f8d610896565b91955090925090506104cd565b61051c838c8b610b3c565b909d909c509a5050505050505050505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260008290506000806000836001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd91906122a8565b965050505050925092506000846001600160a01b0316631a6865026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b919061234f565b90506000876001600160a01b031663d0c93a7c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561067d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a1919061236a565b90506000886001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107079190612385565b6040805160c0810182526001600160a01b039098168852600296870b60208901529290950b918601919091525062ffffff90921660608401526001600160801b039091166080830152151560a08201529392505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915260808501518551836107db5786600001516001600160a01b0316856001600160a01b03161180156107d6575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038616105b61080d565b86600001516001600160a01b0316856001600160a01b031610801561080d57506401000276a36001600160a01b038616115b6108445760405162461bcd60e51b815260206004820152600360248201526214d41360ea1b60448201526064015b60405180910390fd5b6040518060a001604052808781526020016000815260200188600001516001600160a01b03168152602001886020015160020b815260200160006001600160801b031681525092509450945094915050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052819081906001600160a01b038916815260408b015160608b01516108f491908e89610bb9565b901515604084015260029190910b6020830152935061095f898761092c57886001600160a01b0316866001600160a01b031611610942565b886001600160a01b0316866001600160a01b0316105b61094c578561094e565b885b8a8d600001518f606001518b610cf3565b60c085015260a08401526080830152925084156109cb576109928160c00151826080015161098d91906123a2565b610f45565b8a518b906109a19083906123ba565b90525060a08101516109c1906109b690610f45565b60208c015190610f5b565b60208b0152610a17565b6109d88160a00151610f45565b8a518b906109e79083906123f9565b90525060c08101516080820151610a1191610a069161098d91906123a2565b60208c015190610f7b565b60208b01525b836001600160a01b0316836001600160a01b03161415610b0757806040015115610ada57602081015160405163f30dba9360e01b815260029190910b60048201526000906001600160a01b038e169063f30dba939060240161010060405180830381865afa158015610a8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab1919061243a565b5050505050509150508615610acc57610ac9816124e4565b90505b610ad68982610f9b565b9250505b85610ae9578060200151610afa565b60018160200151610afa9190612514565b60020b60608b0152610b2d565b80516001600160a01b03848116911614610b2d57610b248361105b565b60020b60608b01525b50985098509895505050505050565b6000806000841315610b7f5782610b635760208501518551610b5e90866123ba565b610b75565b8451610b6f90856123ba565b85602001515b9092509050610bb1565b82610b9a578451610b9090856123ba565b8560200151610bab565b60208501518551610bab90866123ba565b90925090505b935093915050565b6000808080610bc88888612572565b905084610bdd5780610bd9816125ac565b9150505b60008760020b128015610bfb5750610bf588886125ce565b60020b15155b15610c0e5780610c0a816125f0565b9150505b60405163299ce14b60e11b8152600282900b60081d60010b60048201526000906001600160a01b03881690635339c29690602401602060405180830381865afa158015610c5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c839190612614565b9050610c9181898b89611374565b9095509350620d89e719600286900b1215610cb257620d89e7199450610cdc565b610cbf620d89e71961262d565b60020b8560020b1315610cdc57610cd9620d89e71961262d565b94505b610ce585611507565b925050509450945094915050565b60008080808415156001600160a01b03808b16908c16101514610d3e5760405162461bcd60e51b815260206004820152600360248201526214d41160ea1b604482015260640161083b565b60008712801590610db6576000610d6a89610d5c8a620f4240612647565b62ffffff16620f424061183a565b905086610d8357610d7e8c8c8c60016118ef565b610d90565b610d908b8d8c6001611976565b9450848110610da1578a9550610db0565b610dad8c8b838a611aed565b95505b50610e0a565b85610dcd57610dc88b8b8b6000611976565b610dda565b610dda8a8c8b60006118ef565b925082610de689612257565b10610df357899450610e0a565b610e078b8a610e018b612257565b89611b39565b94505b6001600160a01b038a8116908616148615610e6d57808015610e295750815b610e3f57610e3a868d8c6001611976565b610e41565b845b9450808015610e4e575081155b610e6457610e5f868d8c60006118ef565b610e66565b835b9350610eb7565b808015610e775750815b610e8d57610e888c878c60016118ef565b610e8f565b845b9450808015610e9c575081155b610eb257610ead8c878c6000611976565b610eb4565b835b93505b81158015610ecc5750610ec989612257565b84115b15610edd57610eda89612257565b93505b818015610efc57508a6001600160a01b0316866001600160a01b031614155b15610f1257610f0b858a612663565b9250610f36565b610f338562ffffff8a16610f298b620f4240612647565b62ffffff16611b85565b92505b50509650965096509692505050565b6000600160ff1b8210610f5757600080fd5b5090565b60008082121583610f6c84826123ba565b92508213151461025f57600080fd5b60008082121583610f8c84826123f9565b92508212151461025f57600080fd5b60008082600f0b1215611008576001600160801b038316610fbb836124e4565b610fc5908561267a565b9150816001600160801b0316106110035760405162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015260640161083b565b61025f565b6001600160801b03831661101c838561269a565b9150816001600160801b0316101561025f5760405162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015260640161083b565b60006401000276a36001600160a01b03831610801590611097575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b6110c75760405162461bcd60e51b81526020600482015260016024820152602960f91b604482015260640161083b565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c9790881196179094179092171790911717176080811061115b57607f810383901c9150611165565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461136557886001600160a01b031661134a82611507565b6001600160a01b0316111561135f5781611367565b80611367565b815b9998505050505050505050565b600080806113828587612572565b905060008660020b1280156113a2575061139c85876125ce565b60020b15155b156113b557806113b1816125f0565b9150505b83156114505760006113c682611bc5565b915060009050600160ff831681901b906113e09082612663565b6113ea91906123a2565b898116801515955090915084611417578761140860ff851686612514565b61141291906126bc565b611446565b8761142182611be2565b60ff168460ff166114329190612647565b61143c9086612514565b61144691906126bc565b95505050506114fd565b6000611465611460836001612749565b611bc5565b91506000905061147c600160ff841681901b612663565b198981168015159550909150846114c057876114998460ff612790565b60ff166114a7866001612749565b6114b19190612749565b6114bb91906126bc565b6114f7565b87836114cb83611cda565b6114d59190612790565b60ff166114e3866001612749565b6114ed9190612749565b6114f791906126bc565b95505050505b5094509492505050565b60008060008360020b1261151e578260020b611526565b8260020b6000035b9050620d89e881111561155f5760405162461bcd60e51b81526020600482015260016024820152601560fa1b604482015260640161083b565b60006001821661157357600160801b611585565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156115b9576ffff97272373d413259a46990580e213a0260801c5b60048216156115d8576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156115f7576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611616576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611635576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611654576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611673576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611693576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156116b3576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156116d3576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156116f3576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611713576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611733576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611753576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611773576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611794576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156117b4576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156117d3576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156117f0576b048a170391f7dc42444e8fa20260801c5b60008460020b131561181157806000198161180d5761180d61255c565b0490505b640100000000810615611825576001611828565b60005b60ff16602082901c0192505050919050565b600080806000198587098587029250828110838203039150508060001415611874576000841161186957600080fd5b5082900490506118e8565b80841161188057600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b6000836001600160a01b0316856001600160a01b0316111561190f579293925b816119435761193e6001600160801b03841661192b8787612204565b6001600160a01b0316600160601b61183a565b61196d565b61196d6001600160801b03841661195a8787612204565b6001600160a01b0316600160601b611b85565b95945050505050565b6000836001600160a01b0316856001600160a01b03161115611996579293925b600160601b600160e01b03606084901b1660006119b38787612204565b6001600160a01b031690506000876001600160a01b0316116119d457600080fd5b600082158015906119e457508115155b15611a125760fe6119f483611be2565b60ff16611a0085611be2565b60ff16611a0d91906123a2565b101590505b8015611a945784611a5657611a51611a3d876001600160801b0316848a6001600160a01b031661183a565b600160601b8a6001600160a01b031661183a565b611a8a565b611a8a611a76876001600160801b0316848a6001600160a01b0316611b85565b600160601b8a6001600160a01b0316611b85565b93505050506102ed565b84611ac157876001600160a01b0316611ab784848a6001600160a01b031661183a565b611a5191906127b3565b611a8a611ad884848a6001600160a01b0316611b85565b896001600160a01b0316808204910615150190565b600080856001600160a01b031611611b0457600080fd5b6000846001600160801b031611611b1a57600080fd5b81611b2c5761193e8585856001611e05565b61196d8585856001611eec565b600080856001600160a01b031611611b5057600080fd5b6000846001600160801b031611611b6657600080fd5b81611b785761193e8585856000611eec565b61196d8585856000611e05565b6000611b9284848461183a565b905060008280611ba457611ba461255c565b84860911156118e8576000198110611bbb57600080fd5b6001019392505050565b600281900b60081d6000611bdb610100846125ce565b9050915091565b6000808211611bf057600080fd5b600160801b8210611c0e57608091821c91611c0b90826127c7565b90505b680100000000000000008210611c3157604091821c91611c2e90826127c7565b90505b6401000000008210611c5057602091821c91611c4d90826127c7565b90505b620100008210611c6d57601091821c91611c6a90826127c7565b90505b6101008210611c8957600891821c91611c8690826127c7565b90505b60108210611ca457600491821c91611ca190826127c7565b90505b60048210611cbf57600291821c91611cbc90826127c7565b90505b60028210611cd557611cd26001826127c7565b90505b919050565b6000808211611ce857600080fd5b5060ff6001600160801b03821615611d0c57611d05608082612790565b9050611d14565b608082901c91505b67ffffffffffffffff821615611d3657611d2f604082612790565b9050611d3e565b604082901c91505b63ffffffff821615611d5c57611d55602082612790565b9050611d64565b602082901c91505b61ffff821615611d8057611d79601082612790565b9050611d88565b601082901c91505b60ff821615611da357611d9c600882612790565b9050611dab565b600882901c91505b600f821615611dc657611dbf600482612790565b9050611dce565b600482901c91505b6003821615611de957611de2600282612790565b9050611df1565b600282901c91505b6001821615611cd557611cd2600182612790565b60008115611e775760006001600160a01b03841115611e3b57611e3684600160601b876001600160801b031661183a565b611e52565b611e526001600160801b038616606086901b6127b3565b9050611e6f611e6a6001600160a01b038816836120c3565b6120de565b9150506102ed565b60006001600160a01b03841115611ea557611ea084600160601b876001600160801b0316611b85565b611ec2565b611ec2606085901b6001600160801b038716808204910615150190565b905080866001600160a01b031611611ed957600080fd5b611e6f816001600160a01b038816612663565b600082611efa5750836102ed565b600160601b600160e01b03606085901b1660008115801590611f2457506001600160a01b03871615155b15611f5b5760fe611f3d886001600160a01b0316611be2565b60ff16611f4984611be2565b60ff16611f5691906123a2565b101590505b83156120295760006001600160a01b03881686611f7882826127ec565b9250611f8490836127b3565b1415611ffd5781611f955780611fb2565b611fb286896001600160a01b0316896001600160801b0316611b85565b905081611fbf5782611fc5565b600160601b5b92506000611fd382856123a2565b9050838110611ffb57611ff0848a6001600160a01b031683611b85565b9450505050506102ed565b505b611a8a8361201e886120186001600160a01b038d16846127b3565b906120c3565b808204910615150190565b60006001600160a01b0388168661204082826127ec565b925061204c90836127b3565b14801561205857508083115b61206157600080fd5b8161206c5780612089565b61208986896001600160a01b0316896001600160801b0316611b85565b905081612096578261209c565b600160601b5b925060006120aa8285612663565b9050611ff0611e6a858b6001600160a01b031684611b85565b6000826120d083826123a2565b915081101561025f57600080fd5b806001600160a01b0381168114611cd557600080fd5b6001600160a01b038116811461210957600080fd5b50565b6000806040838503121561211f57600080fd5b823561212a816120f4565b9150602083013561213a816120f4565b809150509250929050565b62ffffff8116811461210957600080fd5b6000806000806080858703121561216c57600080fd5b8435612177816120f4565b93506020850135612187816120f4565b925060408501359150606085013561219e81612145565b939692955090935050565b6001600160a01b03938416815291909216602082015262ffffff909116604082015260600190565b6000602082840312156121e357600080fd5b81516118e8816120f4565b634e487b7160e01b600052601160045260246000fd5b60006001600160a01b0383811690831681811015612224576122246121ee565b039392505050565b60006001600160a01b0382811684821680830382111561224e5761224e6121ee565b01949350505050565b6000600160ff1b82141561226d5761226d6121ee565b5060000390565b8051600281900b8114611cd557600080fd5b805161ffff81168114611cd557600080fd5b80518015158114611cd557600080fd5b600080600080600080600060e0888a0312156122c357600080fd5b87516122ce816120f4565b96506122dc60208901612274565b95506122ea60408901612286565b94506122f860608901612286565b935061230660808901612286565b925060a088015160ff8116811461231c57600080fd5b915061232a60c08901612298565b905092959891949750929550565b80516001600160801b0381168114611cd557600080fd5b60006020828403121561236157600080fd5b6118e882612338565b60006020828403121561237c57600080fd5b6118e882612274565b60006020828403121561239757600080fd5b81516118e881612145565b600082198211156123b5576123b56121ee565b500190565b60008083128015600160ff1b8501841216156123d8576123d86121ee565b6001600160ff1b03840183138116156123f3576123f36121ee565b50500390565b600080821280156001600160ff1b038490038513161561241b5761241b6121ee565b600160ff1b8390038412811615612434576124346121ee565b50500190565b600080600080600080600080610100898b03121561245757600080fd5b61246089612338565b9750602089015180600f0b811461247657600080fd5b80975050604089015195506060890151945060808901518060060b811461249c57600080fd5b60a08a01519094506124ad816120f4565b60c08a015190935063ffffffff811681146124c757600080fd5b91506124d560e08a01612298565b90509295985092959890939650565b600081600f0b6f7fffffffffffffffffffffffffffffff1981141561250b5761250b6121ee565b60000392915050565b60008160020b8360020b6000811281627fffff190183128115161561253b5761253b6121ee565b81627fffff018313811615612552576125526121ee565b5090039392505050565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b806125895761258961255c565b627fffff198214600019821416156125a3576125a36121ee565b90059392505050565b60008160020b627fffff8114156125c5576125c56121ee565b60010192915050565b60008260020b806125e1576125e161255c565b808360020b0791505092915050565b60008160020b627fffff1981141561260a5761260a6121ee565b6000190192915050565b60006020828403121561262657600080fd5b5051919050565b60008160020b627fffff1981141561250b5761250b6121ee565b600062ffffff83811690831681811015612224576122246121ee565b600082821015612675576126756121ee565b500390565b60006001600160801b0383811690831681811015612224576122246121ee565b60006001600160801b0380831681851680830382111561224e5761224e6121ee565b60008160020b8360020b627fffff6000821360008413838304851182821616156126e8576126e86121ee565b627fffff196000851282811687830587121615612707576127076121ee565b60008712925085820587128484161615612723576127236121ee565b85850587128184161615612739576127396121ee565b5050509290910295945050505050565b60008160020b8360020b6000821282627fffff0382138115161561276f5761276f6121ee565b82627fffff19038212811615612787576127876121ee565b50019392505050565b600060ff821660ff8416808210156127aa576127aa6121ee565b90039392505050565b6000826127c2576127c261255c565b500490565b600060ff821660ff84168060ff038211156127e4576127e46121ee565b019392505050565b6000816000190483118215151615612806576128066121ee565b50029056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_uniV3Factory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token1";
            readonly type: "address";
        }];
        readonly name: "doesPoolExist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_fromToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_toToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint24";
            readonly name: "_poolFee";
            readonly type: "uint24";
        }];
        readonly name: "estimateMaxSwapUniswapV3";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_fromToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_toToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint24";
            readonly name: "_poolFee";
            readonly type: "uint24";
        }];
        readonly name: "estimateMinSwapUniswapV3";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): QuoterInterface;
    static connect(address: string, runner?: ContractRunner | null): Quoter;
}
export {};
