var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(nucleotide) {
    if (nucleotide === 'C') {
        return 'G';
    }
};

module.exports = DnaTranscriber;
