
///<reference path='../typings/main/ambient/jquery/jquery.d.ts' />
///<reference path='../typings/main/ambient/node/node.d.ts' />
///<reference path='../typings/main/ambient/jsdom/jsdom.d.ts' />

import { jsdom } from 'jsdom';

import * as fs from 'fs';
import * as path from 'path';

const index = path.join(__dirname, '..', 'index.html');

const html = fs.readFileSync(index, 'utf8');

export var window = jsdom(html).defaultView;
export var document = window.document;