import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      credentialSubject: {
        you: 'Rock',
        id: 'did:web:example.com',
      },
      issuer: {
        id: 'did:ethr:sepolia:0x029cc246fc6f6cbf861c96dd9fa4234cbb8e25e5d75002455f0d2b6e94f6715d0d',
      },
      type: ['VerifiableCredential'],
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      issuanceDate: '2025-02-04T09:26:14.000Z',
      proof: {
        type: 'JwtProof2020',
        jwt:"eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IlJvY2sifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20iLCJuYmYiOjE3Mzg2NjExNzQsImlzcyI6ImRpZDpldGhyOnNlcG9saWE6MHgwMjljYzI0NmZjNmY2Y2JmODYxYzk2ZGQ5ZmE0MjM0Y2JiOGUyNWU1ZDc1MDAyNDU1ZjBkMmI2ZTk0ZjY3MTVkMGQifQ.jPPTUYjiy3mFF-uWhbTdpvuppIVgecrt3cmpQEZB7Jt30KnImHFABI8iNPl4OaAWocSMI0e6QxYxjylXr-cphw"
    ,}},
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)