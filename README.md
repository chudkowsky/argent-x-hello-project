## RUNNING 
To run project simply run `npm run dev`

connect to argent x, create standard account and go to sepolia network
add funds 


useful:
class hash and address of deployed controller account contract 
class hash: `0x5f1d696987d433cffb98f7c90c739368aa17419daa00e3d88bc1157d0902aae`.

in order to deploy account contract you have to prepare call data, deploy contract with sncast:
` sncast --url https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/H3BmmFuOaYNEtpwkiuGsFMj-7wl3bTJq --account <account> deploy --class-hash 0x5f1d696987d433cffb98f7c90c739368aa17419daa00e3d88bc1157d0902aae --constructor-calldata 0x0 0x5dfe72b432bd8aa88c992165aadf7ff2622004e56d3fdadb715d651d5790c23 0x1 `
