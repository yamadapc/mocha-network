mocha-network
=============
- - -
A [mocha](https://github.com/mochajs/mocha) reporter to expose test running
through real-time APIs. It's currently just an idea.

We should emit test events as they come through a `Socket.IO` API. Test suites
need to be modeled to have unique "ids" (I'm currently fond of using the tests'
`titles`). The information on each suite/test-case's status should also be
exposed through a simple RESTful JSON API.

Code-coverage metrics, if available should also be exposed through an HTTP API.
Whenever coverage for a `file` changes, an event should also be emitted through
the `Socket.IO` API.

Entities should be flattened - without using `CircularJSON.stringify` as we
currently are - and references should be sent in a more economic way. If the
structure of the full test spec is available, though, it should be emitted right
away.

The server should also keep track of the history of previously ran tests. It
should be able to, later on, expose useful metrics about the code being tested
and the development process - the number of times a given test changed state
etc.

It should be built in such a way that multiple transports could be supported and
that a `BaseNetwork` reporter class is exported along with the general purpouse
one, so that reporters could be written using other transports than `HTTP` and
`Socket.IO`, such as `ZeroMQ`, `IRC`, `growl` notifications etc.

Most of the code explained here isn't hard to write, but rather to design. This
repository is currently just a big joke, honestly. It exposes trivial lines of
javascript, which are being used to build a real-world UI on top of the test
events. I feel this is the only way to extract the best design ideas from the
problem. That being said, ad-hoc design and specification will also be very
useful.

If a robust API is thought-out, this could surpass the scope of node.js test
reporting and generalized as an interface test frameworks should expose in order
to be supported by graphical test reporter interfaces. I'd be glad to add
support for Haskell, D and Ruby testing frameworks and the likes if possible.

Having a specification on test reporting APIs is also useful for building text
editor integration and other "higher" level interfaces.

By now I'm just dreaming, but I feel the meaning behind the experiment should be
clarified.

License
-------
The code in this repository is licensed under the MIT license for Pedro Tacla
Yamada. For more information please refer to the [LICENSE](/LICENSE) file.

## Donations
Would you like to buy me a beer? Send bitcoin to 3JjxJydvoJjTrhLL86LGMc8cNB16pTAF3y
