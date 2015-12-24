var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(nucleotide) {
    if (nucleotide === 'C') {

    }
    switch (nucleotide) {
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        case 'A':
            return 'U';
        case 'T':
            return 'A';
    }
};

module.exports = DnaTranscriber;
