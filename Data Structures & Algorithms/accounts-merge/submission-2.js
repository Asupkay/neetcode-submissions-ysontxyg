class Solution {
    accountsMerge(accounts) {
        const adj = new Map();        // email -> Set of neighbor emails
        const emailToAcc = new Map(); // email -> account index (first seen)
        const emailGroup = new Map(); // account index -> list of emails
        const visited = new Set();

        // Build graph
        for (let accId = 0; accId < accounts.length; accId++) {
            const account = accounts[accId];
            for (let i = 1; i < account.length; i++) {
                const email = account[i];
                if (!adj.has(email)) adj.set(email, new Set());
                if (!emailToAcc.has(email)) emailToAcc.set(email, accId);
                if (i >= 2) {
                    adj.get(email).add(account[i - 1]);
                    adj.get(account[i - 1]).add(email);
                }
            }
        }

        // DFS
        const dfs = (email, accId) => {
            visited.add(email);
            emailGroup.get(accId).push(email);
            for (const neighbor of adj.get(email)) {
                if (!visited.has(neighbor)) dfs(neighbor, accId);
            }
        };

        // Traverse all unvisited emails
        for (const [email, accId] of emailToAcc.entries()) {
            if (!visited.has(email)) {
                if (!emailGroup.has(accId)) emailGroup.set(accId, []);
                dfs(email, accId);
            }
        }

        // Build result
        const res = [];
        for (const [accId, group] of emailGroup.entries()) {
            res.push([accounts[accId][0], ...group.sort()]);
        }
        return res;
    }
}