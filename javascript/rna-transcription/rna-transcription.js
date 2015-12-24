var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(nucleotide) {
    var Rna = nucleotide
    .replace(/C/g, 'G')
    .replace(/G/g, 'C')
    .replace(/A/g, 'U')
    .replace(/T/g, 'A');
    return Rna;
};

module.exports = DnaTranscriber;
