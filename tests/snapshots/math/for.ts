
{
    function calculateTotalFromRange(start: number, end: number): number {
        let total: number = 0;

        for (let i = start; i < end; i++) {
            total = total + i;
        }

        return total;
    }

    calculateTotalFromRange(1, 100);
    calculateTotalFromRange(50, 100);
}