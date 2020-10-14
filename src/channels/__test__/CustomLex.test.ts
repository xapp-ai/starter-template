/*! Copyright (c) 2020, XAPP AI */
import { expect } from "chai";
import { TranslateLexConnectRequestWithKendra } from "../CustomLex";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const simpleLex = require("./assets/lex-simple.json");

describe(`${TranslateLexConnectRequestWithKendra.name}`, () => {
    describe(`when passed a payload`, () => {
        it('translates correctly', () => {
            const translator = new TranslateLexConnectRequestWithKendra();
            const translated = translator.translate(simpleLex);
            expect(translated).to.exist;
            expect(translated.type).to.equal("LAUNCH_REQUEST");
        });
    });
});